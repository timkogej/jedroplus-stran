'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function TypewriterEffect({
  words,
  className = '',
  interval = 3000,
}: TypewriterEffectProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track first render so the initial word appears immediately (no fade-in flicker)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          // First word appears instantly — subsequent words slide in/out
          initial={mounted ? { opacity: 0, y: 18 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.42, ease: 'easeInOut' }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
