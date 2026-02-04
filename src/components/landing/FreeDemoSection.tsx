"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FreeDemoModal from "@/components/landing/FreeDemoModal";

interface FreeDemoSectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  bullets?: string[];
  modalTitle?: string;
  modalDescription?: string;
}

export default function FreeDemoSection({
  title,
  subtitle,
  ctaLabel = "Rezerviraj brezplačno predstavitev",
  bullets,
  modalTitle,
  modalDescription,
}: FreeDemoSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-white p-8 lg:p-10 shadow-xl border border-gray-100"
        >
          <div className="absolute -top-24 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase">
                Brezplačna predstavitev
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {title}
                </span>
              </h3>
              <p className="text-lg text-gray-600 mt-3">{subtitle}</p>
              {bullets && bullets.length > 0 && (
                <ul className="mt-5 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {ctaLabel}
              </button>
              <p className="text-xs text-gray-500 sm:text-left lg:text-center">
                Brez obveznosti · 15 minut v živo
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <FreeDemoModal
        open={isOpen}
        onOpenChange={setIsOpen}
        title={modalTitle}
        description={modalDescription}
      />
    </section>
  );
}
