"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Self-contained rotating word. React owns the text node (rendered via
 * children), so navigation/Fast-Refresh unmounts never hit the
 * "removeChild → NotFoundError" crash that direct textContent mutation caused.
 * The CSS `is-swap` animation is retriggered per word via a reflow in an effect
 * that runs *after* React has committed the new text.
 */
export function Rotor({
  words,
  id,
  className = "rotor grad-text",
  intervalMs = 2300,
}: {
  words: string[];
  id?: string;
  className?: string;
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const swapped = useRef(false);

  useEffect(() => {
    if (words.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = window.setInterval(() => {
      swapped.current = true;
      setI((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [words, intervalMs]);

  // Retrigger the swap animation on each word change (skip the initial render).
  useEffect(() => {
    if (!swapped.current) return;
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-swap");
    void el.offsetWidth;
    el.classList.add("is-swap");
  }, [i]);

  return (
    <span ref={ref} id={id} className={className}>
      {words[i]}
    </span>
  );
}
