"use client";

import { useEffect } from "react";
import type { Industry } from "./data";

export function FlowController({
  wordmark = false,
  industries,
  adaptiveMobile = false,
}: {
  wordmark?: boolean;
  industries?: Industry[];
  adaptiveMobile?: boolean;
}) {
  useEffect(() => {
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>(
        adaptiveMobile ? ".flow--home .flow__panel" : ".flow__panel"
      )
    );
    const nav = document.querySelector<HTMLElement>(".nav");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    let frame = 0;
    let lastLayoutWidth = 0;

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

    const isAdaptiveMobile = () =>
      adaptiveMobile && window.matchMedia("(max-width: 900px)").matches;

    const syncMobilePanelMode = () => {
      if (!adaptiveMobile) return;

      const mobile = isAdaptiveMobile();
      const viewportHeight = window.innerHeight;

      panels.forEach((panel) => {
        panel.classList.toggle(
          "is-mobile-tall",
          mobile && panel.scrollHeight > viewportHeight + 8
        );
      });
    };

    // Natural (pre-transform, pre-sticky) document offset of an element.
    // offsetTop walks the layout box, so it is immune to both the `rotate()`
    // we apply below and to `position: sticky` — reading it (instead of
    // getBoundingClientRect, which returns the *rotated* bounding box) keeps
    // the rotation from feeding back into its own measurement and jittering.
    const absTop = (el: HTMLElement) => {
      let t = 0;
      let n: HTMLElement | null = el;
      while (n) {
        t += n.offsetTop;
        n = n.offsetParent as HTMLElement | null;
      }
      return t;
    };

    // ---- story-scroll rotation reveal ----
    // Each incoming panel starts rotated 30° about its bottom-left corner and
    // straightens to 0° as it rises into view, swinging up over the previous
    // (sticky, lower z-index) panel — the corner gap reveals the panel behind.
    const MAX_ROT = 30;
    const updRot = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const mobile = isAdaptiveMobile();
      panels.forEach((p, idx) => {
        // Natural top of the panel relative to the viewport, unaffected by the
        // sticky pinning or the rotation we set on it.
        const natTop = absTop(p) - scrollY;
        const h = p.offsetHeight;

        if (natTop > vh * 1.05 || natTop + h < -vh * 0.05) return;

        let pprog = (vh - natTop) / (vh + h);
        pprog = Math.max(0, Math.min(1, pprog));
        const bg = p.querySelector<HTMLElement>(".flow__bg");

        // Mobile background parallax creates unnecessary repaints and visible
        // jitter while the browser toolbar changes the viewport height.
        if (bg && !mobile)
          bg.style.transform =
            "scale(1.1) translateY(" + (pprog - 0.5) * -4.5 + "%)";

        // First panel never rotates (it is the entry hero).
        if (idx === 0) {
          if (p.style.transform) p.style.transform = "";
          return;
        }

        // rise: 0 when the panel's top sits at the bottom of the viewport,
        // 1 once it has reached the top (and stays 1 while it is pinned).
        let rise = (vh - natTop) / vh;
        rise = Math.max(0, Math.min(1, rise));
        const e = easeInOutCubic(rise);
        const rot = (1 - e) * MAX_ROT;

        if (rot > 0.02) {
          // On phones, panels taller than the viewport leave the sticky stack
          // (is-mobile-tall → position:relative), so their element bottom-left
          // can sit far below the screen — pivoting there would fling the
          // content sideways. Anchor the hinge to the viewport's bottom-left
          // instead so every panel swings up uniformly from the screen edge.
          if (mobile) p.style.transformOrigin = "0px " + (vh - natTop).toFixed(1) + "px";
          p.style.transform = "rotate(" + rot + "deg)";
        } else {
          if (p.style.transform) p.style.transform = "";
          if (mobile && p.style.transformOrigin) p.style.transformOrigin = "";
        }
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

    const update = () => {
      frame = 0;
      if (!reduce) updRot();
      navSync();
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      const width = window.innerWidth;
      if (Math.abs(width - lastLayoutWidth) > 4) {
        lastLayoutWidth = width;
        syncMobilePanelMode();
      }
      onScroll();
    };

    lastLayoutWidth = window.innerWidth;
    syncMobilePanelMode();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    update();

    if (document.fonts?.ready) {
      document.fonts.ready.then(syncMobilePanelMode);
    }

    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    });

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
