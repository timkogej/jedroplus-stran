"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MidPageCTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function MidPageCTASection({
  title = "Preizkusi Jedro+ še danes",
  subtitle = "Prijava traja manj kot minuto. Sistem začne delati takoj.",
  primaryLabel = "Odpri aplikacijo",
  primaryHref = "https://app.jedroplus.com",
  secondaryLabel = "Pokliči za vprašanja",
  secondaryHref = "tel:068663410",
}: MidPageCTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
