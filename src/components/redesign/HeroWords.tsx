"use client";

import type { CSSProperties } from "react";

// Floating text layer for funkcije heroes that read better with words than
// emojis (CRM → imena strank, AI → personalizirani pozdravi). Reuses the same
// deterministic drift system as HeroEmojis, but renders gradient-colored text.

type Particle = {
  dir: "x" | "xRev" | "y";
  top: number; // %
  left: number; // %
  size: number; // px
  dur: number; // s
  delay: number; // s
  rot: number; // deg
  drift: number; // vw/vh cross-axis drift
  op: number;
};

// Text needs a smaller font + gentler rotation than emojis to stay readable.
const PARTICLES: Particle[] = [
  { dir: "x", top: 16, left: 0, size: 26, dur: 21, delay: 0, rot: 10, drift: 6, op: 0.95 },
  { dir: "xRev", top: 30, left: 0, size: 20, dur: 26, delay: 1, rot: -8, drift: -5, op: 0.85 },
  { dir: "x", top: 46, left: 0, size: 30, dur: 24, delay: 2.5, rot: 6, drift: -7, op: 1 },
  { dir: "y", top: 0, left: 18, size: 22, dur: 23, delay: 0.5, rot: 8, drift: 8, op: 0.9 },
  { dir: "xRev", top: 62, left: 0, size: 27, dur: 28, delay: 1.5, rot: -10, drift: 6, op: 0.95 },
  { dir: "x", top: 74, left: 0, size: 19, dur: 20, delay: 3, rot: 8, drift: 5, op: 0.8 },
  { dir: "y", top: 0, left: 72, size: 28, dur: 27, delay: 2, rot: -6, drift: -9, op: 0.95 },
  { dir: "xRev", top: 22, left: 0, size: 23, dur: 25, delay: 3.5, rot: 9, drift: -4, op: 0.9 },
  { dir: "x", top: 56, left: 0, size: 21, dur: 22, delay: 4, rot: -8, drift: 7, op: 0.85 },
  { dir: "y", top: 0, left: 44, size: 20, dur: 29, delay: 1, rot: 6, drift: 6, op: 0.85 },
  { dir: "xRev", top: 84, left: 0, size: 24, dur: 23, delay: 0.8, rot: -9, drift: -6, op: 0.9 },
  { dir: "x", top: 36, left: 0, size: 18, dur: 30, delay: 4.5, rot: 7, drift: -5, op: 0.78 },
];

const dirClass: Record<Particle["dir"], string> = {
  x: "heroWord--x",
  xRev: "heroWord--xRev",
  y: "heroWord--y",
};

export function HeroWords({ words }: { words: string[] }) {
  return (
    <div className="heroWord-layer" aria-hidden="true">
      {PARTICLES.map((p, i) => {
        const style = {
          top: `${p.top}%`,
          left: `${p.left}%`,
          fontSize: `${p.size}px`,
          animationDuration: `${p.dur}s`,
          animationDelay: `${p.delay}s`,
          "--rot": `${p.rot}deg`,
          "--drift": `${p.drift}${p.dir === "y" ? "vw" : "vh"}`,
          "--op": p.op,
        } as CSSProperties;
        return (
          <span
            key={i}
            className={`heroWord ${dirClass[p.dir]}`}
            style={style}
          >
            {words[i % words.length]}
          </span>
        );
      })}
    </div>
  );
}
