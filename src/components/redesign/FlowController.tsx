"use client";

import { useEffect } from "react";
import type { Industry } from "./data";

type Rotor = { id: string; words: string[] };

export function FlowController({
  rotors = [],
  wordmark = false,
  industries,
}: {
  rotors?: Rotor[];
  wordmark?: boolean;
  industries?: Industry[];
}) {
  useEffect(() => {
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>(".flow__panel")
    );
    const nav = document.querySelector<HTMLElement>(".nav");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // ---- panel reveal ----
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-on");
          }),
        { threshold: 0.3 }
      );
      panels.forEach((p) => io.observe(p));
      cleanups.push(() => io.disconnect());
    } else {
      panels.forEach((p) => p.classList.add("is-on"));
    }

    // ---- parallax + rising-card clip reveal ----
    const easeInOutCubic = (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    const updClip = () => {
      const vh = window.innerHeight;
      const small = window.innerWidth <= 900;
      panels.forEach((p, idx) => {
        const r = p.getBoundingClientRect();
        let pprog = (vh - r.top) / (vh + r.height);
        pprog = Math.max(0, Math.min(1, pprog));
        const bg = p.querySelector<HTMLElement>(".flow__bg");
        if (bg)
          bg.style.transform =
            "scale(1.1) translateY(" + (pprog - 0.5) * -4.5 + "%)";
        if (idx === 0) {
          p.style.clipPath = "inset(0% round 0px)";
          return;
        }
        let rise = (vh - r.top) / vh;
        rise = Math.max(0, Math.min(1, rise));
        const e = easeInOutCubic(rise);
        const s = (1 - e) * (small ? 0 : 27);
        const rad = (1 - e) * (small ? 24 : 34);
        p.style.clipPath =
          "inset(0% " + s + "% 0% " + s + "% round " + rad + "px)";
      });
    };

    // ---- nav colour sync ----
    const navSync = () => {
      if (!nav || !panels.length) return;
      const probe = 46;
      let active = panels[0];
      for (let k = 0; k < panels.length; k++) {
        const r = panels[k].getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          active = panels[k];
          break;
        }
      }
      const ink = active.getAttribute("data-ink") || "dark";
      nav.classList.toggle("on-light", ink === "light");
      nav.classList.toggle("on-dark", ink !== "light");
      if (wordmark) nav.classList.toggle("show-word", active !== panels[0]);
    };

    const onScroll = () => {
      if (!reduce) updClip();
      navSync();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    // ---- rotating words ----
    if (!reduce) {
      rotors.forEach(({ id, words }) => {
        const el = document.getElementById(id);
        if (!el) return;
        let i = 0;
        const t = window.setInterval(() => {
          i = (i + 1) % words.length;
          el.classList.remove("is-swap");
          void el.offsetWidth;
          el.textContent = words[i];
          el.classList.add("is-swap");
        }, 2300);
        cleanups.push(() => window.clearInterval(t));
      });
    }

    // ---- panoge modal ----
    if (industries) {
      const track = document.getElementById("indTrack");
      const modal = document.getElementById("pmodal");
      if (track && modal) {
        const pmNum = document.getElementById("pmNum")!;
        const pmTitle = document.getElementById("pmTitle")!;
        const pmDesc = document.getElementById("pmDesc")!;
        const pmTags = document.getElementById("pmTags")!;
        const pmImgTag = document.getElementById("pmImgTag")!;
        const openModal = (idx: number) => {
          const d = industries[idx % industries.length];
          pmNum.textContent = String((idx % industries.length) + 1).padStart(2, "0");
          pmTitle.textContent = d.t;
          pmDesc.textContent = d.d;
          pmImgTag.textContent = "SLIKA — " + d.img;
          pmTags.innerHTML = d.tg
            .map((x) => "<span>" + x + "</span>")
            .join("");
          modal.classList.add("is-open");
          modal.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
        };
        const closeModal = () => {
          modal.classList.remove("is-open");
          modal.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        };
        const onTrackClick = (e: Event) => {
          const card = (e.target as HTMLElement).closest<HTMLElement>(".icard");
          if (!card) return;
          openModal(parseInt(card.getAttribute("data-i") || "0", 10));
        };
        const onModalClick = (e: Event) => {
          if ((e.target as HTMLElement).hasAttribute("data-close")) closeModal();
        };
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Escape") closeModal();
        };
        track.addEventListener("click", onTrackClick);
        modal.addEventListener("click", onModalClick);
        document.addEventListener("keydown", onKey);
        cleanups.push(() => {
          track.removeEventListener("click", onTrackClick);
          modal.removeEventListener("click", onModalClick);
          document.removeEventListener("keydown", onKey);
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
