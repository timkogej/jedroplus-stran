'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedPriceProps {
  price: number;
  originalPrice?: number;
  showOriginal?: boolean;
}

export function AnimatedPrice({ price, originalPrice, showOriginal }: AnimatedPriceProps) {
  const spring = useSpring(price, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    spring.set(price);
  }, [price, spring]);

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="text-xl text-gray-400">€</span>
        <motion.span className="text-5xl font-bold text-white">{display}</motion.span>
        <span className="text-gray-400">/mesec</span>
      </div>

      {/* Originalna cena prečrtana */}
      {showOriginal && originalPrice && originalPrice !== price && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mt-1"
        >
          <span className="text-gray-500 line-through">€{originalPrice}</span>
          <span className="text-[#2AD4C5] text-sm font-semibold">-20%</span>
        </motion.div>
      )}
    </div>
  );
}
