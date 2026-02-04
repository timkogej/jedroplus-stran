"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scissors,
  Stethoscope,
  Sparkles,
  Dumbbell,
  Car,
  MessageCircle,
  Monitor,
  Briefcase,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const industries = [
  {
    icon: Scissors,
    title: "Kozmetični, frizerski in barber saloni",
  },
  {
    icon: Stethoscope,
    title: "Zobne, estetske in medicinske klinike",
  },
  {
    icon: Sparkles,
    title: "Masažni in wellness studii, fizioterapija",
  },
  {
    icon: Dumbbell,
    title: "Fitnesi, osebni trenerji, joga/pilates",
  },
  {
    icon: Car,
    title: "Avtoservisi, vulkanizerji, čistilni servisi",
  },
  {
    icon: MessageCircle,
    title: "Svetovalne, coaching in terapevtske storitve",
  },
  {
    icon: Monitor,
    title: "IT in poslovne storitve, agencije",
  },
  {
    icon: Briefcase,
    title: "Ostala storitvena podjetja",
  },
];

export default function TargetAudienceSection() {
  return (
    <section id="za-koga" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Za koga je{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jedro+
            </span>
            ?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jedro+ je za vsa storitvena podjetja, ki delajo s strankami in
            termini – kjerkoli je pomembno naročanje, opomniki, evidenca in
            ponovni obiski.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                <GradientIcon
                  icon={industry.icon}
                  variant="gradient"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Poglej vse panoge
          </Link>
        </div>
      </div>
    </section>
  );
}
