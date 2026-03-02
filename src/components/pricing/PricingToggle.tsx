'use client';

import { motion } from 'framer-motion';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}

export function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <div className="relative flex items-center gap-4">
        {/* Mesečno Label */}
        <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
          Mesečno
        </span>

        {/* Toggle Switch */}
        <button
          onClick={() => onToggle(!isYearly)}
          className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 cursor-pointer transition-all hover:border-white/40"
          aria-label="Preklopi med mesečnim in letnim plačilom"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-50"
            animate={{
              boxShadow: isYearly
                ? '0 0 20px rgba(42, 212, 197, 0.4)'
                : '0 0 20px rgba(109, 94, 247, 0.4)',
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Toggle Knob */}
          <motion.div
            className="relative w-6 h-6 rounded-full shadow-lg"
            animate={{
              x: isYearly ? 32 : 0,
              background: isYearly
                ? 'linear-gradient(135deg, #2AD4C5 0%, #2F80ED 100%)'
                : 'linear-gradient(135deg, #6D5EF7 0%, #2F80ED 100%)',
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        </button>

        {/* Letno Label */}
        <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
          Letno
        </span>

        {/* Prihrani 20% Badge */}
        <motion.div
          className="absolute -top-8 right-0 md:relative md:top-0"
          animate={{
            scale: isYearly ? 1 : 0.9,
            opacity: isYearly ? 1 : 0.6,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-[#2AD4C5] to-[#2F80ED] rounded-full text-xs font-bold text-white shadow-lg"
            animate={{
              boxShadow: isYearly
                ? '0 0 20px rgba(42, 212, 197, 0.5)'
                : '0 0 10px rgba(42, 212, 197, 0.2)',
            }}
          >
            -20%
          </motion.span>
        </motion.div>
      </div>

      {/* Subtext */}
      <motion.p
        className="text-sm text-gray-400 text-center"
        animate={{ opacity: isYearly ? 1 : 0.7 }}
      >
        {isYearly
          ? '✓ Prihranite 20% z letnim plačilom'
          : 'Izberite letno za 20% prihranek'
        }
      </motion.p>
    </div>
  );
}
