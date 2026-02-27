"use client";

import { useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const features: { icon: LucideIcon; title: string; description: string }[] = [
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
    title: "Spletno naročanje",
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  };

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

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full w-10 h-10 items-center justify-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200 hidden sm:flex"
            aria-label="Nazaj"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Cards */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex gap-6 overflow-x-auto scrollbar-hide pt-8 pb-6 snap-x snap-mandatory"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                data-card="true"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2, type: "spring", stiffness: 300 } }}
                className="snap-start flex-none w-[82vw] sm:w-[45%] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default group"
              >
                <div className="mb-4 transition-transform duration-200 group-hover:scale-110 inline-block">
                  <GradientIcon
                    icon={feature.icon}
                    variant="gradient"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full w-10 h-10 items-center justify-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200 hidden sm:flex"
            aria-label="Naprej"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-sm text-gray-400 mt-3 sm:hidden">
          Povleci za več funkcij →
        </p>
      </div>
    </section>
  );
}
