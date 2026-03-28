"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/lib/industries-data";
import {
  Navigation,
  Footer,
  WhyChooseSection,
  TestimonialsSection,
  FAQSection,
  FreeDemoSection,
} from "@/components/landing";
import Image from "next/image";
import {
  Scissors,
  Stethoscope,
  Sparkles,
  Dumbbell,
  Car,
  MessageCircle,
  Monitor,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ImageIcon,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/* ── Icon map ─────────────────────────────────────────────────────── */
const industryIconMap: Record<string, LucideIcon> = {
  saloni: Scissors,
  klinike: Stethoscope,
  wellness: Sparkles,
  fitnes: Dumbbell,
  servisi: Car,
  svetovanje: MessageCircle,
  agencije: Monitor,
  ostalo: Briefcase,
};

/* Industries that get an image placeholder */
const withImageIds = new Set(["saloni", "klinike", "wellness", "fitnes", "servisi"]);

/* Unified brand gradient for all industries */
const ACCENT_GRADIENT = "from-primary via-blue-500 to-secondary";
const ACCENT_BG = "bg-primary/10";
const ACCENT_TEXT = "text-primary";

/* ── Industry image (with placeholder fallback) ─────────────────── */
const industryImageNames: Record<string, string> = {
  saloni:   "jedro-bar",
  klinike:  "jedro-zob",
  wellness: "jedro-mas",
  fitnes:   "jedro-fit",
  servisi:  "jedro-meh",
};

function IndustryImage({ id }: { id: string }) {
  const name = industryImageNames[id];
  // Try .jpg, fallback to placeholder via onError
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
      <Image
        src={`/images/industries/${name}.webp`}
        alt={name}
        fill
        className="object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) parent.setAttribute("data-missing", "1");
        }}
      />
      {/* Fallback overlay (shown via CSS when data-missing is set) */}
      <div className="industry-img-fallback absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-2xl">
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
          <ImageIcon className="w-6 h-6 text-gray-300" />
        </div>
        <p className="text-xs font-medium text-gray-400">Prostor za sliko panoge</p>
      </div>
    </div>
  );
}

/* ── Sidebar tab list (desktop) ─────────────────────────────────── */
function SidebarTabs({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative space-y-1">
      {industries.map((industry) => {
        const Icon = industryIconMap[industry.id];
        const isActive = activeId === industry.id;
        return (
          <button
            key={industry.id}
            onClick={() => onSelect(industry.id)}
            className={`relative flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-2xl focus:outline-none group transition-all duration-150 ${
              isActive
                ? "bg-white shadow-md border border-gray-200/80"
                : "hover:bg-gray-100"
            }`}
          >
            {/* Accent bar */}
            <span
              className={`absolute left-0 inset-y-0 my-auto w-[3px] h-8 rounded-r-full bg-gradient-to-b transition-opacity duration-150 ${ACCENT_GRADIENT} ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150 ${
                isActive
                  ? `${ACCENT_BG} ${ACCENT_TEXT}`
                  : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
              }`}
            >
              {Icon && <Icon className="w-[18px] h-[18px]" />}
            </div>

            <p
              className={`flex-1 text-sm font-semibold leading-snug truncate transition-colors duration-100 ${
                isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"
              }`}
            >
              {industry.title}
            </p>

            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-all duration-150 ${
                isActive
                  ? `${ACCENT_TEXT} opacity-100`
                  : "text-gray-300 opacity-0 group-hover:opacity-60"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

/* ── Detail panel (desktop) ─────────────────────────────────────── */
const EASE_SMOOTH = [0.22, 1, 0.36, 1] as [number, number, number, number];

const detailVariants = {
  enter: { opacity: 0, y: 8, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: EASE_SMOOTH } },
  exit: { opacity: 0, y: -4, scale: 0.995, transition: { duration: 0.12, ease: "easeIn" as const } },
};

function IndustryDetail({ industry }: { industry: (typeof industries)[0] }) {
  const Icon = industryIconMap[industry.id];
  const hasImage = withImageIds.has(industry.id);

  return (
    <motion.div
      key={industry.id}
      variants={detailVariants}
      initial="enter"
      animate="visible"
      exit="exit"
      className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl shadow-gray-200/50"
    >
      {/* Top color strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${ACCENT_GRADIENT}`} />

      {/* Subtle brand-color bg blobs */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${ACCENT_BG} ${ACCENT_TEXT}`}>
            {Icon && <Icon className="w-7 h-7" />}
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">{industry.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{industry.intro}</p>
          </div>
        </div>

        <div className={`h-px bg-gradient-to-r ${ACCENT_GRADIENT} opacity-20 mb-6`} />

        {/* Body */}
        <div className={`grid gap-6 ${hasImage ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {/* Left column: image + scenario */}
          {hasImage && (
            <div className="space-y-4">
              <IndustryImage id={industry.id} />
              <div className="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primer uporabe</p>
                <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{industry.scenario}&rdquo;</p>
              </div>
            </div>
          )}

          {/* Right column: benefits + (no-image) scenario + CTA */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Ključne prednosti</p>
              <ul className="space-y-3">
                {industry.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${ACCENT_BG}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${ACCENT_TEXT}`} />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!hasImage && (
              <div className="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primer uporabe</p>
                <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{industry.scenario}&rdquo;</p>
              </div>
            )}

            <Link
              href="/#povprasevanje"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300 self-start mt-auto"
            >
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile accordion card ─────────────────────────────────────── */
function MobileIndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = industryIconMap[industry.id];
  const hasImage = withImageIds.has(industry.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
        open ? "border-gray-200 bg-white shadow-lg" : "border-gray-100 bg-white shadow-sm"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left focus:outline-none"
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
            open ? `${ACCENT_BG} ${ACCENT_TEXT}` : "bg-gray-100 text-gray-400"
          }`}
        >
          {Icon && <Icon className="w-5 h-5" />}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-snug">{industry.title}</p>
          {!open && (
            <p className="text-xs text-gray-500 mt-0.5 truncate">{industry.intro}</p>
          )}
        </div>

        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.22, ease: "easeInOut" }}>
          <ChevronRight className={`w-5 h-5 transition-colors duration-200 ${open ? "text-primary" : "text-gray-300"}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-4 border-t border-gray-100">
              <div className={`h-px bg-gradient-to-r ${ACCENT_GRADIENT} opacity-30 mt-3`} />

              <p className="text-sm text-gray-600 leading-relaxed">{industry.intro}</p>

              {hasImage && <IndustryImage id={industry.id} />}

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Ključne prednosti</p>
                <ul className="space-y-2.5">
                  {industry.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${ACCENT_TEXT}`} />
                      <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Primer uporabe</p>
                <p className="text-xs text-gray-600 leading-relaxed italic">&ldquo;{industry.scenario}&rdquo;</p>
              </div>

              <Link
                href="/#povprasevanje"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md"
              >
                Pošlji povpraševanje
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function IndustriesPage() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/40 to-cyan-50/40">
        {/* Static blobs — no JS animation, GPU-friendly */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Prilagojeno vaši panogi
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Jedro+ za vsako{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                storitveno panogo
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Jedro+ je narejen za storitvena podjetja vseh velikosti. Spodaj je
              izbor panog, kjer se sistem najbolj izkaže.
            </p>

            <Link
              href="/#povprasevanje"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-7 py-3.5 rounded-2xl font-semibold shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES EXPLORER ─────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Izberite vašo panogo
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kliknite na panogo in si oglejte, kako Jedro+ reši konkretne izzive vašega področja.
            </p>
          </motion.div>

          {/* ── DESKTOP ─────────────────────────────────────────── */}
          <div className="hidden md:grid md:grid-cols-[300px_1fr] gap-8 items-start">
            {/* Sidebar */}
            <div className="sticky top-24">
              <div className="bg-gray-50/80 rounded-3xl p-3 border border-gray-100 shadow-sm">
                <SidebarTabs activeId={activeId} onSelect={setActiveId} />
              </div>
            </div>

            {/* Detail */}
            <div>
              <AnimatePresence mode="wait" initial={false}>
                <IndustryDetail key={activeId} industry={activeIndustry} />
              </AnimatePresence>
            </div>
          </div>

          {/* ── MOBILE ──────────────────────────────────────────── */}
          <div className="md:hidden space-y-3">
            {industries.map((industry, i) => (
              <MobileIndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-10 text-center text-white shadow-2xl shadow-primary/30"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Vaša panoga ni na seznamu?</h3>
              <p className="text-white/80 mb-7 max-w-xl mx-auto">
                Jedro+ je prilagodljiv za vse storitvene dejavnosti. Kontaktirajte nas in skupaj poiščemo najboljšo rešitev.
              </p>
              <Link
                href="/#povprasevanje"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Pošlji povpraševanje
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <FreeDemoSection
        title="Brezplačna predstavitev za vašo panogo"
        subtitle="V 15 minutah pripravimo demo, prilagojen vaši dejavnosti, in pokažemo avtomatizacije, ki prihranijo čas."
        ctaLabel="Rezerviraj brezplačno predstavitev"
      />
      <Footer />
    </main>
  );
}
