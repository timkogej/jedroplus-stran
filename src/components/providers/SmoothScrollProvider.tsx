'use client';

import { ReactNode } from 'react';

// CSS scroll-behavior: smooth is already active via globals.css.
// Lenis is intentionally not used here — it creates a separate RAF loop
// that conflicts with Framer Motion's useScroll and causes jitter.
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
