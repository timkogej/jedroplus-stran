'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedPrice } from './AnimatedPrice';

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isYearly: boolean;
  isPopular?: boolean;
  comingSoon?: boolean;
  ctaText?: string;
  index: number;
}

export function PricingCard({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  isYearly,
  isPopular,
  comingSoon,
  ctaText = 'Začni zdaj',
  index,
}: PricingCardProps) {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <motion.div
      className={`relative rounded-2xl ${
        isPopular
          ? 'bg-gradient-to-b from-[#6D5EF7] via-[#2F80ED] to-[#2AD4C5] p-[2px]'
          : 'bg-white/10 p-[1px]'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Badges */}
      {(isPopular || comingSoon) && (
        <motion.div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${comingSoon && isPopular ? 'flex-col items-center' : ''}`}
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          {isPopular && (
            <span className="px-4 py-1.5 bg-gradient-to-r from-[#6D5EF7] to-[#2F80ED] rounded-full text-sm font-semibold text-white shadow-lg whitespace-nowrap">
              ⭐ Najbolj priljubljen
            </span>
          )}
          {comingSoon && (
            <span className="px-4 py-1.5 bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] rounded-full text-sm font-semibold text-white shadow-lg whitespace-nowrap">
              🚀 Prihaja kmalu
            </span>
          )}
        </motion.div>
      )}

      {/* Card Content */}
      <div className={`h-full rounded-2xl bg-gray-900 p-8 ${isPopular ? 'pt-10' : ''}`}>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          {comingSoon ? (
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">?? €</span>
                <span className="text-gray-400 text-sm ml-1">/mesec</span>
              </div>
              <p className="text-sm text-[#2AD4C5] mt-2">Cena bo kmalu objavljena</p>
            </div>
          ) : (
            <>
              <AnimatedPrice
                price={currentPrice}
                originalPrice={monthlyPrice}
                showOriginal={isYearly}
              />
              {isYearly && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-[#2AD4C5] mt-2"
                >
                  Plačano letno: €{yearlyPrice * 12}/leto
                </motion.p>
              )}
            </>
          )}
        </div>

        {/* CTA Button */}
        <motion.button
          className={`w-full py-4 rounded-xl font-semibold mb-8 transition-all ${
            isPopular
              ? 'bg-gradient-to-r from-[#6D5EF7] to-[#2F80ED] text-white shadow-lg shadow-[#6D5EF7]/30 hover:shadow-[#6D5EF7]/50'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaText}
        </motion.button>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
