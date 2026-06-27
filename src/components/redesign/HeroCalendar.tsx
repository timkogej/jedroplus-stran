"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ScrollTrigger's `pin` wraps the pinned node in a `.pin-spacer` div it inserts
// into the DOM. On client-side navigation React would try to remove the pinned
// node from the parent it *thinks* owns it and hit "removeChild → NotFoundError",
// because the real parent is now GSAP's spacer. Running setup/teardown in a
// layout effect makes `ctx.revert()` (which removes the spacer) fire during the
// mutation phase — before React removes the node — so the DOM is restored first.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Izmenjujoča se beseda v hero naslovu: "Prihodnost <…> vašega podjetja".
const ROT_WORDS = ["komunikacije", "naročanja", "izkušnje", "terminov"];

function RotatingWord() {
  const [i, setI] = React.useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((p) => (p + 1) % ROT_WORDS.length),
      2400
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span className="jhc-rot">
      <span key={i} className="jhc-rot__w">
        {ROT_WORDS[i]}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 *  Jedro+ cinematic hero — a white "Apple Calendar"-style day view
 *  inside an iPhone. As you scroll, gradient appointment blocks drop
 *  into the day and a personalised AI reminder slides in on top.
 * ------------------------------------------------------------------ */

const HOUR_H = 60; // px per hour in the day timeline
const START_HOUR = 9; // first hour shown
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];

type Appt = {
  start: number; // decimal hour, e.g. 10.5 = 10:30
  end: number;
  title: string;
  who: string;
  grad: string;
};

const APPTS: Appt[] = [
  {
    start: 9,
    end: 10,
    title: "Striženje & oblikovanje",
    who: "Luka N.",
    grad: "linear-gradient(135deg,#6E5BF6 0%,#3D8BF5 100%)",
  },
  {
    start: 10.5,
    end: 11.5,
    title: "Barvanje las",
    who: "Ana K.",
    grad: "linear-gradient(135deg,#F65BB0 0%,#7B5BF6 100%)",
  },
  {
    start: 12.25,
    end: 13.25,
    title: "Manikura",
    who: "Sara P.",
    grad: "linear-gradient(135deg,#25D3C0 0%,#3D8BF5 100%)",
  },
  {
    start: 13.75,
    end: 14.75,
    title: "Sproščujoča masaža",
    who: "Maja R.",
    grad: "linear-gradient(135deg,#FFA15B 0%,#F6655B 100%)",
  },
  {
    start: 15.5,
    end: 16.5,
    title: "Posvet & nega",
    who: "Nik B.",
    grad: "linear-gradient(135deg,#3D8BF5 0%,#25D3C0 100%)",
  },
];

export function HeroCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  /* light sheen on the card following the cursor — the phone stays upright */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      if (window.scrollY > window.innerHeight * 1.5) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* main cinematic scroll timeline */
  useIsomorphicLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // nav colour follows the white outer frames and the dark card in between
    const nav = document.querySelector<HTMLElement>(".nav");
    const setNav = (light: boolean, showWord = light) => {
      if (!nav) return;
      nav.classList.toggle("on-light", light);
      nav.classList.toggle("on-dark", !light);
      nav.classList.toggle("show-word", showWord);
    };
    setNav(true, false);

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(
          [
            ".jhc-card",
            ".jhc-phone-wrap",
            ".jhc-appt",
            ".jhc-notif",
            ".jhc-left",
            ".jhc-brand",
            ".jhc-cal",
          ],
          { clearProps: "all", autoAlpha: 1 }
        );
        gsap.set(".jhc-hero", { autoAlpha: 1 });
        gsap.set(".jhc-cta", { autoAlpha: 0 });
        return;
      }

      // initial states
      gsap.set(".jhc-line1", { autoAlpha: 0, y: 60, filter: "blur(16px)" });
      gsap.set(".jhc-line2", { autoAlpha: 0, y: 60, filter: "blur(16px)" });
      gsap.set(".jhc-sub", { autoAlpha: 0, y: 30 });
      gsap.set(".jhc-card", { yPercent: 130, autoAlpha: 1 });
      gsap.set(
        [".jhc-phone-wrap", ".jhc-notif", ".jhc-left", ".jhc-brand"],
        { autoAlpha: 0 }
      );
      gsap.set(".jhc-cal", { autoAlpha: 0 });
      gsap.set(".jhc-appt", { autoAlpha: 0, y: 26, scale: 0.9 });
      gsap.set(".jhc-cta", { autoAlpha: 0, scale: 0.85, filter: "blur(24px)" });

      // intro (autoplay)
      gsap
        .timeline({ delay: 0.25 })
        .to(".jhc-line1", {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "expo.out",
        })
        .to(
          ".jhc-line2",
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "expo.out",
          },
          "-=1.05"
        )
        .to(".jhc-sub", { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=5200" : "+=6200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setNav(self.progress < 0.24 || self.progress >= 0.78, false),
          onLeave: () => setNav(true, true),
          onEnterBack: () => setNav(true, false),
        },
      });

      tl
        // hero text recedes, card rises
        .to(
          ".jhc-hero",
          { scale: 1.12, autoAlpha: 0, filter: "blur(16px)", ease: "power2.in", duration: 1.6 },
          0
        )
        .to(".jhc-card", { yPercent: 0, ease: "power3.out", duration: 2 }, 0)
        // card expands to full bleed
        .to(".jhc-card", {
          width: "100%",
          height: "100%",
          borderRadius: 0,
          ease: "power3.inOut",
          duration: 1.4,
        })
        // phone flies in
        .fromTo(
          ".jhc-phone-wrap",
          { y: 220, z: -400, rotationX: 40, autoAlpha: 0, scale: 0.7 },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.2,
          },
          "-=0.5"
        )
        .to(".jhc-cal", { autoAlpha: 1, duration: 0.8 }, "-=1.4")
        // brand + left copy slide in
        .fromTo(
          ".jhc-brand",
          { x: 60, autoAlpha: 0, scale: 0.85 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.6 },
          "-=1.6"
        )
        .fromTo(
          ".jhc-left",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power3.out", duration: 1.6 },
          "<"
        )
        // appointments drop into the day, one by one
        .to(
          ".jhc-appt",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "back.out(1.5)",
            duration: 1,
            stagger: 0.9,
          },
          "-=0.8"
        )
        // personalised AI reminder slides in on top
        .fromTo(
          ".jhc-notif",
          { y: -90, autoAlpha: 0, scale: 0.9 },
          { y: 0, autoAlpha: 1, scale: 1, ease: "back.out(1.4)", duration: 1.4 },
          "-=1.6"
        )
        // breathe
        .to({}, { duration: 2 })
        // hand off to the CTA
        .to(
          [".jhc-phone-wrap", ".jhc-left", ".jhc-brand"],
          { y: -40, autoAlpha: 0, scale: 0.92, ease: "power3.in", duration: 1.2 }
        )
        .set(".jhc-cta", { autoAlpha: 1 })
        .to(
          ".jhc-card",
          {
            width: isMobile ? "92vw" : "84vw",
            height: isMobile ? "88vh" : "82vh",
            borderRadius: isMobile ? 30 : 40,
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pull"
        )
        .to(
          ".jhc-cta",
          { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 },
          "pull"
        )
        // card lifts away, leaving the CTA as the closing frame
        .to(".jhc-card", {
          yPercent: -130,
          autoAlpha: 0,
          ease: "power3.in",
          duration: 1.4,
        });

      // keep measurements correct once fonts/images settle
      const refresh = () => ScrollTrigger.refresh();
      if (document.fonts?.ready) document.fonts.ready.then(refresh);
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    }, containerRef);

    // reduced-motion fallback: no pin/scrub, so toggle nav on plain scroll
    let onScroll: (() => void) | undefined;
    if (reduce) {
      onScroll = () =>
        setNav(true, window.scrollY > window.innerHeight * 0.6);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      ctx.revert();
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="jhc">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="jhc-grid" aria-hidden="true" />

      {/* ---- background hero text ---- */}
      <div className="jhc-hero">
        <h1 className="jhc-h">
          <span className="jhc-line1">
            Prihodnost <RotatingWord />
          </span>
          <span className="jhc-line2">vašega podjetja</span>
        </h1>
        <p className="jhc-sub">
          Koledar terminov, baza strank in personalizirani AI opomniki —
          povezani v eno jedro.
        </p>
      </div>

      {/* ---- CTA (revealed at the end) ---- */}
      <div className="jhc-cta">
        <h2 className="jhc-cta-h">Začnite še danes.</h2>
        <p className="jhc-cta-p">
          Prevzemite nadzor nad termini, strankami in komunikacijo — pokažemo
          vam Jedro+ v živo, brezplačno.
        </p>
        <div className="jhc-cta-row">
          <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">
            Preizkusi brezplačno <span className="arr">→</span>
          </a>
          <a className="jhc-cta-link" href="/funkcije">
            Oglej si funkcije <span className="arr">→</span>
          </a>
        </div>
      </div>

      {/* ---- the deep card ---- */}
      <div className="jhc-card-layer" aria-hidden="false">
        <div ref={cardRef} className="jhc-card">
          <div className="jhc-sheen" aria-hidden="true" />
          <div className="jhc-row">
            {/* brand */}
            <div className="jhc-brand">
              <span>Jedro+</span>
            </div>

            {/* phone */}
            <div className="jhc-phone-wrap">
              <div ref={phoneRef} className="jhc-phone">
                <span className="jhc-btn jhc-btn-1" aria-hidden="true" />
                <span className="jhc-btn jhc-btn-2" aria-hidden="true" />
                <span className="jhc-btn jhc-btn-3" aria-hidden="true" />
                <span className="jhc-btn jhc-btn-r" aria-hidden="true" />

                <div className="jhc-screen">
                  <div className="jhc-glare" aria-hidden="true" />
                  <div className="jhc-island">
                    <span className="jhc-dot" />
                  </div>

                  {/* personalised AI reminder */}
                  <div className="jhc-notif">
                    <div className="jhc-notif-ic">J+</div>
                    <div className="jhc-notif-body">
                      <div className="jhc-notif-top">
                        <span>Jedro+ · AI opomnik</span>
                        <span className="jhc-notif-time">zdaj</span>
                      </div>
                      <p>
                        Pozdravljeni Ana! 💙 Jutri ob 10:30 vas čaka termin za
                        barvanje. Se vidimo!
                      </p>
                    </div>
                  </div>

                  {/* white calendar — single day */}
                  <div className="jhc-cal">
                    <div className="jhc-cal-head">
                      <div>
                        <span className="jhc-cal-month">Junij</span>
                        <span className="jhc-cal-day">Torek 25</span>
                      </div>
                      <div className="jhc-cal-av">+</div>
                    </div>
                    <div className="jhc-cal-pill">Danes · 5 terminov</div>

                    <div
                      className="jhc-timeline"
                      style={{ height: HOURS.length * HOUR_H }}
                    >
                      {HOURS.map((h) => (
                        <div
                          key={h}
                          className="jhc-hour"
                          style={{ top: (h - START_HOUR) * HOUR_H }}
                        >
                          <span className="jhc-hour-lbl">{h}:00</span>
                          <span className="jhc-hour-line" />
                        </div>
                      ))}

                      {APPTS.map((a, i) => (
                        <div
                          key={i}
                          className="jhc-appt"
                          style={{
                            top: (a.start - START_HOUR) * HOUR_H + 3,
                            height: (a.end - a.start) * HOUR_H - 6,
                            background: a.grad,
                          }}
                        >
                          <span className="jhc-appt-t">{a.title}</span>
                          <span className="jhc-appt-w">
                            {fmt(a.start)}–{fmt(a.end)} · {a.who}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="jhc-homebar" />
                </div>
              </div>
            </div>

            {/* left copy */}
            <div className="jhc-left">
              <h3>Vaš dan, samodejno urejen.</h3>
              <p>
                Termini se sami posedejo na pravo mesto, opomniki gredo ob
                pravem času — vi pa se posvetite strankam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function fmt(h: number) {
  const hr = Math.floor(h);
  const mn = Math.round((h - hr) * 60);
  return `${hr}:${mn === 0 ? "00" : mn}`;
}

const STYLES = `
  .jhc{ position:relative; width:100%; height:100vh; height:100svh; overflow:hidden;
    display:flex; align-items:center; justify-content:center;
    background:#fff; color:#0E0E12; perspective:1500px; }

  .jhc-grid{ position:absolute; inset:0; z-index:0; opacity:.5; pointer-events:none;
    background-size:58px 58px;
    background-image:
      linear-gradient(to right, rgba(14,14,18,.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(14,14,18,.045) 1px, transparent 1px);
    -webkit-mask-image:radial-gradient(ellipse at center, #000 0%, transparent 70%);
    mask-image:radial-gradient(ellipse at center, #000 0%, transparent 70%); }

  /* hero text */
  .jhc-hero{ position:absolute; z-index:10; inset:0; display:flex; flex-direction:column;
    align-items:center; justify-content:center; text-align:center; padding:0 24px; }
  .jhc-h{ font-family:var(--display); font-weight:300; letter-spacing:-.04em;
    line-height:1.06; font-size:clamp(2.6rem,7vw,6rem); margin:0; color:#0E0E12; }
  .jhc-h span{ display:block; }
  .jhc-h .jhc-rot{ display:block; }
  .jhc-h .jhc-rot__w{ display:inline-block; color:#0E0E12;
    padding-bottom:.06em;
    animation:jhcRotIn .55s var(--ease,cubic-bezier(.22,1,.36,1)) both; }
  @keyframes jhcRotIn{
    from{ opacity:0; transform:translateY(.32em); filter:blur(7px); }
    to{ opacity:1; transform:none; filter:blur(0); }
  }
  .jhc-line2{ background:linear-gradient(108deg,#8E7DFF 0%,#5FA8FF 50%,#3FE5D2 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    line-height:1.18; padding-bottom:.14em; }
  .jhc-sub{ margin:clamp(20px,3vh,34px) auto 0; max-width:52ch;
    font-family:var(--text); font-weight:400; color:rgba(14,14,18,.66);
    font-size:clamp(1rem,1.5vw,1.35rem); line-height:1.5; }

  /* CTA */
  .jhc-cta{ position:absolute; z-index:10; inset:0; display:flex; flex-direction:column;
    align-items:center; justify-content:center; text-align:center; padding:0 24px;
    pointer-events:auto; }
  .jhc-cta-h{ font-family:var(--display); font-weight:300; letter-spacing:-.04em;
    font-size:clamp(2.4rem,6vw,5rem); margin:0;
    background:var(--grad); -webkit-background-clip:text; background-clip:text;
    color:transparent; }
  .jhc-cta-p{ margin:22px auto 36px; max-width:48ch; color:rgba(14,14,18,.66);
    font-size:clamp(1rem,1.5vw,1.25rem); line-height:1.55; }
  .jhc-cta-row{ display:flex; flex-wrap:wrap; align-items:center; gap:28px; justify-content:center; }
  .jhc-cta-link{ display:inline-flex; align-items:center; gap:9px; color:#0E0E12;
    font-weight:600; font-size:17px; line-height:1.2; padding:4px 0;
    border-bottom:1px solid currentColor; transition:gap .25s var(--ease), opacity .25s var(--ease); }
  .jhc-cta-link:hover{ gap:13px; opacity:.68; }

  /* card */
  .jhc-card-layer{ position:absolute; inset:0; z-index:20; display:flex;
    align-items:center; justify-content:center; pointer-events:none; perspective:1500px; }
  .jhc-card{ position:relative; width:92vw; height:90vh; border-radius:32px;
    overflow:hidden; pointer-events:auto; visibility:hidden;
    background:linear-gradient(150deg,#15275E 0%,#0A101E 100%);
    box-shadow:0 50px 120px -25px rgba(0,0,0,.9), inset 0 1px 2px rgba(255,255,255,.16),
      inset 0 -2px 6px rgba(0,0,0,.8);
    border:1px solid rgba(255,255,255,.05); }
  .jhc-sheen{ position:absolute; inset:0; z-index:40; pointer-events:none; border-radius:inherit;
    background:radial-gradient(700px circle at var(--mx,50%) var(--my,40%),
      rgba(255,255,255,.07) 0%, transparent 42%); mix-blend-mode:screen; }
  .jhc-row{ position:relative; z-index:10; width:100%; max-width:1280px; height:100%;
    margin:0 auto; padding:24px clamp(16px,4vw,56px);
    display:flex; flex-direction:column; align-items:center; justify-content:space-evenly;
    gap:8px; }

  .jhc-brand{ order:1; width:100%; display:flex; justify-content:center; }
  .jhc-brand span{ font-family:var(--display); font-weight:300; letter-spacing:-.04em;
    font-size:clamp(3rem,8vw,7rem);
    background:linear-gradient(180deg,#FFFFFF 0%,#9AA6C8 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    filter:drop-shadow(0 12px 24px rgba(0,0,0,.6)); }

  .jhc-left{ order:3; width:100%; text-align:center; max-width:30ch; }
  .jhc-left h3{ font-family:var(--display); font-weight:300; letter-spacing:-.03em;
    font-size:clamp(1.4rem,2.4vw,2rem); color:#fff; margin:0; }
  .jhc-left p{ margin:12px auto 0; color:rgba(180,196,255,.7);
    font-size:clamp(.92rem,1.2vw,1.05rem); line-height:1.5; }

  /* phone */
  .jhc-phone-wrap{ order:2; position:relative; display:flex; align-items:center;
    justify-content:center; perspective:1000px; }
  .jhc-phone{ position:relative; width:284px; height:586px; border-radius:48px;
    background:#0c0c0e; transform-style:preserve-3d; will-change:transform;
    box-shadow: inset 0 0 0 2px #4a4a52, inset 0 0 0 7px #000,
      0 40px 80px -15px rgba(0,0,0,.9), 0 15px 25px -5px rgba(0,0,0,.7); }
  .jhc-btn{ position:absolute; background:linear-gradient(90deg,#3c3c40,#161618);
    box-shadow:-2px 0 5px rgba(0,0,0,.8), inset -1px 0 1px rgba(255,255,255,.12); }
  .jhc-btn-1{ top:120px; left:-3px; width:3px; height:26px; border-radius:3px 0 0 3px; }
  .jhc-btn-2{ top:162px; left:-3px; width:3px; height:46px; border-radius:3px 0 0 3px; }
  .jhc-btn-3{ top:222px; left:-3px; width:3px; height:46px; border-radius:3px 0 0 3px; }
  .jhc-btn-r{ top:172px; right:-3px; width:3px; height:72px; border-radius:0 3px 3px 0;
    background:linear-gradient(90deg,#161618,#3c3c40); }

  .jhc-screen{ position:absolute; inset:7px; border-radius:42px; overflow:hidden;
    background:#F4F5F7; color:#0E0E12;
    box-shadow:inset 0 0 14px rgba(0,0,0,.9); }
  .jhc-glare{ position:absolute; inset:0; z-index:60; pointer-events:none;
    background:linear-gradient(115deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 42%); }
  .jhc-island{ position:absolute; top:8px; left:50%; transform:translateX(-50%);
    width:96px; height:26px; background:#000; border-radius:16px; z-index:55;
    display:flex; align-items:center; justify-content:flex-end; padding-right:11px; }
  .jhc-dot{ width:6px; height:6px; border-radius:50%; background:#34d27b;
    box-shadow:0 0 8px rgba(52,210,123,.9); }

  /* AI reminder notification */
  .jhc-notif{ position:absolute; top:42px; left:10px; right:10px; z-index:50;
    display:flex; gap:10px; padding:11px 12px; border-radius:18px;
    background:rgba(255,255,255,.82); backdrop-filter:blur(18px);
    border:1px solid rgba(255,255,255,.7);
    box-shadow:0 18px 36px -12px rgba(20,30,70,.4); }
  .jhc-notif-ic{ flex:0 0 auto; width:34px; height:34px; border-radius:10px;
    background:linear-gradient(135deg,#6E5BF6,#25D3C0); color:#fff; font-weight:800;
    font-size:13px; display:grid; place-items:center;
    box-shadow:0 6px 14px -4px rgba(110,91,246,.7); }
  .jhc-notif-body{ flex:1; min-width:0; }
  .jhc-notif-top{ display:flex; justify-content:space-between; align-items:center;
    font-size:10.5px; font-weight:700; color:#3a3b45; letter-spacing:.01em; }
  .jhc-notif-time{ color:#9a9ba4; font-weight:600; }
  .jhc-notif-body p{ margin:3px 0 0; font-size:11.5px; line-height:1.32; color:#23242c; }

  /* calendar */
  .jhc-cal{ position:absolute; inset:0; padding:46px 14px 18px; display:flex;
    flex-direction:column; }
  .jhc-cal-head{ display:flex; align-items:center; justify-content:space-between;
    padding:0 2px 2px; }
  .jhc-cal-month{ display:block; font-size:11px; font-weight:700; letter-spacing:.12em;
    text-transform:uppercase; color:#F6655B; }
  .jhc-cal-day{ display:block; font-family:var(--display); font-weight:700;
    font-size:23px; letter-spacing:-.03em; color:#0E0E12; line-height:1.1; }
  .jhc-cal-av{ width:34px; height:34px; display:grid; place-items:center;
    font-family:var(--display); font-weight:800; font-size:30px; line-height:1;
    background:linear-gradient(135deg,#6E5BF6 0%,#3D8BF5 55%,#25D3C0 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent; }
  .jhc-cal-pill{ align-self:flex-start; margin:8px 0 12px; font-size:11px; font-weight:600;
    color:#5b5c66; background:#ECEDF1; border-radius:100px; padding:5px 11px; }

  .jhc-timeline{ position:relative; flex:1; }
  .jhc-hour{ position:absolute; left:0; right:0; height:0; display:flex; align-items:center; }
  .jhc-hour-lbl{ flex:0 0 auto; width:38px; font-size:10px; font-weight:600;
    color:#a6a7b0; transform:translateY(-50%); }
  .jhc-hour-line{ flex:1; height:1px; background:#E4E5EA; }

  .jhc-appt{ position:absolute; left:42px; right:2px; border-radius:13px;
    padding:8px 11px; color:#fff; overflow:hidden; display:flex; flex-direction:column;
    justify-content:center; gap:2px;
    box-shadow:0 10px 22px -10px rgba(20,20,40,.55), inset 0 1px 1px rgba(255,255,255,.25);
    will-change:transform,opacity; }
  .jhc-appt-t{ font-size:12px; font-weight:700; letter-spacing:-.01em; line-height:1.15;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    text-shadow:0 1px 2px rgba(0,0,0,.18); }
  .jhc-appt-w{ font-size:10px; font-weight:500; opacity:.92;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

  .jhc-homebar{ position:absolute; bottom:8px; left:50%; transform:translateX(-50%);
    width:118px; height:4px; border-radius:4px; background:rgba(0,0,0,.22); z-index:58; }

  /* layout: phone centred, brand + copy flank it on desktop */
  @media (min-width:1000px){
    .jhc-row{ display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:24px; }
    .jhc-brand{ order:3; justify-content:flex-end; }
    .jhc-phone-wrap{ order:2; }
    .jhc-left{ order:1; text-align:left; }
    .jhc-left p{ margin-left:0; margin-right:0; }
  }
  @media (max-width:999px){
    .jhc-left{ display:none; }
    .jhc-brand span{ font-size:clamp(2.6rem,11vw,4rem); }
  }
  @media (max-width:560px){
    .jhc-phone{ transform:scale(.9); }
  }
  @media (prefers-reduced-motion:reduce){
    .jhc-cta{ display:none; }
  }
`;
