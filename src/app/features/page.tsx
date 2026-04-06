"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { featuresData } from "@/lib/features-data";
import {
  Navigation,
  Footer,
  PersonalizationSection,
  AISection,
  FreeDemoSection,
  TestimonialsSection,
  MidPageCTASection,
  IntegrationSection,
} from "@/components/landing";
import {
  Bell,
  MessageSquare,
  CalendarDays,
  Users,
  Clock,
  Link as LinkIcon,
  Package,
  TrendingUp,
  ChartLine,
  Sparkles,
  Headphones,
  Bot,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  LayoutGrid,
  MessageCircle,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const featureIconMap: Record<string, LucideIcon> = {
  "opomniki-pred": Bell,
  "opomniki-po": MessageSquare,
  "koledar": CalendarDays,
  "crm": Users,
  "baza-terminov": Clock,
  "booking-link": LinkIcon,
  "baza-storitev-osebja": Package,
  "lost-leads": TrendingUp,
  "analitika": ChartLine,
  "asistent-plus": Sparkles,
  "receptionist-plus": Headphones,
  "chatbot-plus": Bot,
};

const comingSoonIds = new Set(["receptionist-plus"]);

const categories = [
  {
    id: "upravljanje",
    label: "Upravljanje",
    icon: LayoutGrid,
    featureIds: ["koledar", "baza-terminov", "crm", "booking-link", "baza-storitev-osebja"],
  },
  {
    id: "komunikacija",
    label: "Komunikacija",
    icon: MessageCircle,
    featureIds: ["opomniki-pred", "opomniki-po", "lost-leads", "analitika"],
  },
  {
    id: "ai",
    label: "AI+",
    icon: Cpu,
    featureIds: ["asistent-plus", "receptionist-plus", "chatbot-plus"],
  },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("upravljanje");
  const [selectedId, setSelectedId] = useState("koledar");
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const filteredFeatures = currentCategory.featureIds
    .map((id) => featuresData.find((f) => f.id === id))
    .filter(Boolean) as typeof featuresData;

  const selectedFeature =
    featuresData.find((f) => f.id === selectedId) ?? filteredFeatures[0];

  // When category changes, auto-select first feature
  // Only depend on activeCategory — categories is a constant so featureIds
  // reference changes every render, which would cause infinite re-renders
  useEffect(() => {
    const cat = categories.find((c) => c.id === activeCategory)!;
    setSelectedId(cat.featureIds[0]);
    setExpandedMobileId(null);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/40 to-cyan-50/40">
        {/* Static blobs — no JS animation, GPU-friendly */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              12 funkcij v enem orodju
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Funkcije{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Jedro+
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Izberi funkcijo in poglej, kako Jedro+ izboljša delo s strankami,
              termini in komunikacijo.
            </p>
            <Link
              href="https://app.jedroplus.com/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-7 py-3.5 rounded-2xl font-semibold shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Preizkusi brezplačno
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Interactive Feature Explorer ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl gap-1">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 focus:outline-none"
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white rounded-xl shadow-md" />
                    )}
                    <span className="relative flex items-center gap-2">
                      <CatIcon
                        className={`w-4 h-4 transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`transition-colors duration-200 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {cat.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ── DESKTOP: Split panel ────────────────────────────── */}
          <div className="hidden md:grid md:grid-cols-5 gap-8 items-start">
            {/* Left: feature list */}
            <div className="md:col-span-2">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2"
              >
                {filteredFeatures.map((feature, i) => {
                  const Icon = featureIconMap[feature.id];
                  const isSelected = selectedId === feature.id;
                  const isCS = comingSoonIds.has(feature.id);
                  return (
                    <motion.button
                      key={feature.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25, ease: "easeOut" }}
                      onClick={() => setSelectedId(feature.id)}
                      className={`relative w-full text-left rounded-2xl px-4 py-4 transition-all duration-200 group focus:outline-none ${
                        isSelected
                          ? "bg-gradient-to-r from-primary/8 to-secondary/8 border border-primary/20 shadow-sm"
                          : "bg-gray-50 border border-transparent hover:bg-gray-100 hover:border-gray-200"
                      }`}
                    >
                      {/* Left accent bar — CSS transition, no layoutId to avoid cross-list glitch */}
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-gradient-to-b from-primary to-secondary transition-all duration-200 ${
                          isSelected ? "h-8 opacity-100" : "h-0 opacity-0"
                        }`}
                      />
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                          {Icon && (
                            <GradientIcon icon={Icon} variant="gradient" className="w-5 h-5" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-sm font-semibold leading-snug transition-colors duration-150 ${
                                isSelected ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                              }`}
                            >
                              {feature.title}
                            </span>
                            {isCS && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                                Prihaja kmalu
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-all duration-150 ${
                            isSelected ? "text-primary" : "text-gray-300 group-hover:text-gray-400"
                          }`}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: detail panel */}
            <div className="md:col-span-3 sticky top-28">
              <AnimatePresence mode="wait" initial={false}>
                {selectedFeature && (
                  <motion.div
                    key={selectedFeature.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-purple-50/20 to-cyan-50/20 shadow-xl p-8"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/6 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/6 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative">
                      {/* Icon + title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0">
                          {featureIconMap[selectedFeature.id] && (
                            <GradientIcon
                              icon={featureIconMap[selectedFeature.id]}
                              variant="gradient"
                              className="w-7 h-7"
                            />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                              {selectedFeature.title}
                            </h2>
                            {comingSoonIds.has(selectedFeature.id) && (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 text-primary">
                                Prihaja kmalu
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 font-medium">
                            {selectedFeature.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent mb-6" />

                      {/* Intro */}
                      <p className="text-gray-700 leading-relaxed mb-8 text-base">
                        {selectedFeature.intro}
                      </p>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                          Ključne prednosti
                        </h3>
                        <ul className="space-y-3">
                          {selectedFeature.benefits.map((benefit, i) => (
                            <motion.li
                              key={benefit}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.2, ease: "easeOut" }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Audience */}
                      <div className="rounded-2xl bg-primary/5 border border-primary/10 px-5 py-4 mb-8">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">
                            Za koga:{" "}
                          </span>
                          {selectedFeature.audience}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        href="https://app.jedroplus.com/signup"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                      >
                        Preizkusi brezplačno
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── MOBILE: Accordion ───────────────────────────────── */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                {filteredFeatures.map((feature, i) => {
                  const Icon = featureIconMap[feature.id];
                  const isExpanded = expandedMobileId === feature.id;
                  const isCS = comingSoonIds.has(feature.id);
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                        isExpanded
                          ? "border-primary/30 bg-gradient-to-br from-white via-purple-50/30 to-cyan-50/20 shadow-md"
                          : "border-gray-100 bg-gray-50"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setExpandedMobileId(isExpanded ? null : feature.id)
                        }
                        className="w-full text-left flex items-center gap-3 px-5 py-4 focus:outline-none"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                          {Icon && (
                            <GradientIcon
                              icon={Icon}
                              variant="gradient"
                              className="w-5 h-5"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-gray-900 leading-snug">
                              {feature.title}
                            </span>
                            {isCS && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                                Prihaja kmalu
                              </span>
                            )}
                          </div>
                          {!isExpanded && (
                            <p className="text-xs text-gray-500 mt-0.5 leading-snug truncate">
                              {feature.shortDescription}
                            </p>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronRight
                            className={`w-5 h-5 ${
                              isExpanded ? "text-primary" : "text-gray-400"
                            }`}
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 border-t border-gray-100">
                              <div className="h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent mb-5 mt-5" />
                              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                                {feature.intro}
                              </p>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                Ključne prednosti
                              </h4>
                              <ul className="space-y-2.5 mb-5">
                                {feature.benefits.map((benefit, bi) => (
                                  <motion.li
                                    key={benefit}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: bi * 0.06 }}
                                    className="flex items-start gap-2.5"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">
                                      {benefit}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                              <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 mb-5">
                                <p className="text-xs text-gray-700 leading-relaxed">
                                  <span className="font-semibold text-gray-900">
                                    Za koga:{" "}
                                  </span>
                                  {feature.audience}
                                </p>
                              </div>
                              <Link
                                href="https://app.jedroplus.com/signup"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md"
                              >
                                Preizkusi brezplačno
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Rest of the page (unchanged) ────────────────────────── */}
      <FreeDemoSection
        title="Brezplačna predstavitev funkcij Jedro+"
        subtitle="V živo vam pokažemo, kako Jedro+ v praksi avtomatizira vaše vsakodnevne procese."
        bullets={[
          "Pametni opomniki in avtomatska komunikacija",
          "Koledar terminov in upravljanje storitev",
          "CRM in zgodovina obiskov strank",
          "Izgubljene stranke za ponovno aktivacijo strank",
          "AI funkcije za hitrejše odzive",
        ]}
        ctaLabel="Rezerviraj brezplačno predstavitev"
      />

      <PersonalizationSection detailed />
      <AISection />
      <IntegrationSection />
      <TestimonialsSection />
      <MidPageCTASection
        title="Preizkusi app"
        subtitle="Oglej si, kako hitro lahko začnete delati z Jedro+."
        primaryLabel="Odpri aplikacijo"
        primaryHref="https://app.jedroplus.com"
        secondaryLabel="Pošlji povpraševanje"
        secondaryHref="/#povprasevanje"
      />
      <Footer />
    </main>
  );
}
