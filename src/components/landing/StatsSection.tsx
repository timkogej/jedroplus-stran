"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const stats = [
  { value: 50, suffix: "%", label: "Manj časa za administracijo" },
  { value: 30, suffix: "%", label: "Več potrjenih terminov" },
  { value: 50, suffix: "+", label: "Zadovoljnih podjetij" },
  { value: 24, suffix: "/7", label: "Delovanje AI funkcij" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-blue-50 to-secondary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
