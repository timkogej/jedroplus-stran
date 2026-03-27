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
  LucideIcon,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const features: { icon: LucideIcon; title: string; description: string; gradient?: boolean; comingSoon?: boolean }[] = [
  {
    icon: Bell,
    title: "Personalizirani opomniki pred terminom",
    description: "Prilagojeni e-mail/SMS opomniki v vašem tonu, ob pravem času.",
  },
  {
    icon: MessageSquare,
    title: "Personalizirani opomniki po terminu",
    description: "Zahvala, navodila po storitvi in povabilo k ponovnemu obisku.",
  },
  {
    icon: CalendarDays,
    title: "Koledar terminov",
    description: "Pregleden koledarski pogled, hitro dodajanje, prestavljanje in preklic.",
  },
  {
    icon: Users,
    title: "Baza strank (CRM)",
    description: "Kontakti, zgodovina obiskov, opombe in preference strank na enem mestu.",
  },
  {
    icon: Clock,
    title: "Baza terminov",
    description: "Vsak termin ima zgodovino, status in povezavo s storitvijo ter izvajalcem.",
  },
  {
    icon: Link,
    title: "Spletno naročanje",
    description: "Deljiva povezava za hitro naročanje, kjerkoli se stranka nahaja.",
  },
  {
    icon: Package,
    title: "Baza storitev in osebja",
    description: "Urejene storitve, trajanja, cene in razporedi izvajalcev.",
  },
  {
    icon: TrendingUp,
    title: "Izgubljene stranke",
    description: "Seznam neaktivnih strank + kampanje za ponovni obisk. Zapolnite luknje v urniku.",
  },
  {
    icon: ChartLine,
    title: "Analitika",
    description: "Pregled ključnih številk: termini, zasedenost, odpovedi/no-show in trendi.",
  },
  {
    icon: Sparkles,
    title: "Asistent+",
    description: "Pomoč pri besedilih opomnikov, komunikaciji in hitrih odgovorih.",
    gradient: true,
  },
  {
    icon: Headphones,
    title: "Receptionist+",
    description: "AI pomoč pri sprejemu strank, razbremenitev telefona in standardizirana komunikacija.",
    gradient: true,
    comingSoon: true,
  },
  {
    icon: Bot,
    title: "Chatbot+",
    description: "Chatbot na spletni strani za pogosta vprašanja in usmerjanje k naročanju.",
    gradient: true,
  },
];

// Duplicate for seamless infinite loop
const duplicated = [...features, ...features];

export default function FeaturesSection() {
  return (
    <section
      id="funkcije"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
      <style>{`
        @keyframes features-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .features-track {
          animation: features-scroll 38s linear infinite;
        }
        .features-track:hover {
          animation-play-state: paused;
        }
        .features-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
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
      </div>

      {/* Infinite auto-scroll strip (full-width, outside max-w container) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="features-mask overflow-hidden"
      >
        <div className="features-track flex gap-6 w-max py-4 px-6">
          {duplicated.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default group border border-gray-100/50"
            >
              <div className="mb-4 transition-transform duration-200 group-hover:scale-110 inline-block">
                <GradientIcon icon={feature.icon} variant="gradient" className="w-7 h-7" />
              </div>

              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3
                  className={`text-lg font-bold leading-tight ${
                    feature.gradient
                      ? "bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent"
                      : "text-gray-900 group-hover:text-primary transition-colors duration-200"
                  }`}
                >
                  {feature.title}
                </h3>
                {feature.comingSoon && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary whitespace-nowrap">
                    Prihaja kmalu
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-sm text-gray-400 mt-4 sm:hidden">
        Premika se samodejno →
      </p>
    </section>
  );
}
