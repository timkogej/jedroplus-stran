"use client";

import { motion } from "framer-motion";
import { UserPlus, Upload, CalendarDays, Brain } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Ustvarite račun",
    description:
      "Registrirajte se v nekaj sekundah in začnite z osnovno konfiguracijo vašega podjetja.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Uvoz ali vnos strank",
    description:
      "Uvozimo obstoječo bazo ali začnete z vnosom v aplikaciji",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Termini + opomniki + booking",
    description:
      "Koledar, baze in obveščanje začnejo delovati kot ena celota",
  },
  {
    number: "04",
    icon: Brain,
    title: "Rast: Lost Leads + AI",
    description:
      "Sistem pomaga polniti urnik in izboljševati komunikacijo ter rezultate",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="kako-deluje"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kako Jedro+{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              deluje v praksi
            </span>
            ?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-4 z-10">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 pt-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                    <GradientIcon
                      icon={step.icon}
                      variant="gradient"
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium">
            Preprosto, hitro, učinkovito. Od postavitve do polne uporabe v nekaj
            minutah.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
