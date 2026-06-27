"use client";

import type { CSSProperties } from "react";

// Floating emoji layer for the panoga hero. Emojis drift across the white
// hero from every side (left↔right and bottom→top) on infinite loops, so the
// section feels alive without an image. Fully deterministic = no hydration
// mismatch and reduced-motion is handled in CSS.

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

// 12 particles — enough to feel lively, few enough to stay tasteful.
const PARTICLES: Particle[] = [
  { dir: "x", top: 16, left: 0, size: 46, dur: 19, delay: 0, rot: 38, drift: 6, op: 0.9 },
  { dir: "xRev", top: 30, left: 0, size: 34, dur: 24, delay: 1, rot: -30, drift: -5, op: 0.8 },
  { dir: "x", top: 46, left: 0, size: 56, dur: 22, delay: 2.5, rot: 22, drift: -7, op: 0.95 },
  { dir: "y", top: 0, left: 18, size: 40, dur: 21, delay: 0.5, rot: 28, drift: 8, op: 0.85 },
  { dir: "xRev", top: 62, left: 0, size: 48, dur: 26, delay: 1.5, rot: -40, drift: 6, op: 0.9 },
  { dir: "x", top: 74, left: 0, size: 32, dur: 18, delay: 3, rot: 30, drift: 5, op: 0.75 },
  { dir: "y", top: 0, left: 72, size: 52, dur: 25, delay: 2, rot: -24, drift: -9, op: 0.9 },
  { dir: "xRev", top: 22, left: 0, size: 42, dur: 23, delay: 3.5, rot: 34, drift: -4, op: 0.85 },
  { dir: "x", top: 56, left: 0, size: 38, dur: 20, delay: 4, rot: -28, drift: 7, op: 0.8 },
  { dir: "y", top: 0, left: 44, size: 36, dur: 27, delay: 1, rot: 20, drift: 6, op: 0.8 },
  { dir: "xRev", top: 84, left: 0, size: 44, dur: 21, delay: 0.8, rot: -34, drift: -6, op: 0.85 },
  { dir: "x", top: 36, left: 0, size: 30, dur: 28, delay: 4.5, rot: 26, drift: -5, op: 0.7 },
];

const dirClass: Record<Particle["dir"], string> = {
  x: "heroEmoji--x",
  xRev: "heroEmoji--xRev",
  y: "heroEmoji--y",
};

export function HeroEmojis({ emojis }: { emojis: string[] }) {
  return (
    <div className="heroEmoji-layer" aria-hidden="true">
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
            className={`heroEmoji ${dirClass[p.dir]}`}
            style={style}
          >
            {emojis[i % emojis.length]}
          </span>
        );
      })}
    </div>
  );
}
