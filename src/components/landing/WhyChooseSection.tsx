"use client";

import { motion } from "framer-motion";
import { Zap, Package, TrendingUp, Sparkles, Settings, MessageSquare } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const reasons = [
  {
    icon: Zap,
    title: "Enostavna uporaba",
    description: "Narejeno za podjetnike. Brez kompliciranja",
  },
  {
    icon: Package,
    title: "Vse povezano",
    description:
      "Koledar, baze, opomniki, booking in analitika delujejo skupaj",
  },
  {
    icon: TrendingUp,
    title: "Več zasedenosti",
    description: "Opomniki + follow-up + Lost Leads zmanjšajo prazne termine",
  },
  {
    icon: Sparkles,
    title: "AI in avtomatizacija",
    description: "Manj ročnega pisanja, več konsistentne komunikacije",
  },
  {
    icon: Settings,
    title: "Skalabilno",
    description: "Dodate lokacije, uporabnike in dodatne funkcije",
  },
  {
    icon: MessageSquare,
    title: "Profesionalen vtis brez dodatnega dela",
    description:
      "Personalizirana komunikacija, ki jo stranke opazijo in cenijo.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
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
            Zakaj podjetja zaupajo{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jedro+
            </span>
            ?
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-colors duration-300"
            >
              <div className="mb-4">
                <GradientIcon
                  icon={reason.icon}
                  variant="gradient"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                50%
              </div>
              <p className="text-white/90 text-lg">
                Manj časa za administracijo
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                30%
              </div>
              <p className="text-white/90 text-lg">Več potrjenih terminov</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
