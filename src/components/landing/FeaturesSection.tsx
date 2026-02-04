"use client";

import { motion } from "framer-motion";
import {
  Bell,
  MessageSquare,
  CalendarDays,
  Users,
  Clock,
  Link,
  Package,
  TrendingUp,
  ChartLine,
  Sparkles,
  Headphones,
  Bot,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const features = [
  {
    icon: Bell,
    title: "Personalizirani opomniki pred terminom",
    description:
      "Prilagojeni e-mail/SMS opomniki v vašem tonu, ob pravem času.",
  },
  {
    icon: MessageSquare,
    title: "Personalizirani opomniki po terminu",
    description:
      "Zahvala, navodila po storitvi in povabilo k ponovnemu obisku.",
  },
  {
    icon: CalendarDays,
    title: "Koledar terminov",
    description:
      "Pregleden koledarski pogled, hitro dodajanje, prestavljanje in preklic.",
  },
  {
    icon: Users,
    title: "Baza strank (CRM)",
    description:
      "Kontakti, zgodovina obiskov, opombe in preference strank na enem mestu.",
  },
  {
    icon: Clock,
    title: "Baza terminov",
    description:
      "Vsak termin ima zgodovino, status in povezavo s storitvijo ter izvajalcem.",
  },
  {
    icon: Link,
    title: "Booking link / spletno naročanje",
    description:
      "Deljiva povezava za hitro naročanje, kjerkoli se stranka nahaja.",
  },
  {
    icon: Package,
    title: "Baza storitev in osebja",
    description:
      "Urejene storitve, trajanja, cene in razporedi izvajalcev.",
  },
  {
    icon: TrendingUp,
    title: "Lost Leads (neaktivne stranke)",
    description:
      "Seznam neaktivnih strank + kampanje za ponovni obisk. Zapolnite luknje v urniku.",
  },
  {
    icon: ChartLine,
    title: "Analitika",
    description:
      "Pregled ključnih številk: termini, zasedenost, odpovedi/no-show in trendi.",
  },
  {
    icon: Sparkles,
    title: "Asistent+ (AI)",
    description:
      "Pomoč pri besedilih opomnikov, komunikaciji in hitrih odgovorih.",
  },
  {
    icon: Headphones,
    title: "Receptionist+ (Premium)",
    description:
      "AI pomoč pri sprejemu strank, razbremenitev telefona in standardizirana komunikacija.",
  },
  {
    icon: Bot,
    title: "Chatbot+ (Premium)",
    description:
      "Chatbot na spletni strani za pogosta vprašanja in usmerjanje k naročanju.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="funkcije"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
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
            Funkcije, ki jih storitvena podjetja{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              res potrebujejo
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jedro+ je zgrajen za učinkovitost. Vse je povezano: koledar →
            stranka → storitev → osebje → opomniki → analitika.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <GradientIcon
                  icon={feature.icon}
                  variant="gradient"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
