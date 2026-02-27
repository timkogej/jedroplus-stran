"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Odkar imamo Jedro+, stranke dobijo opomnik pred terminom z vsemi navodili — kdaj priti, kaj prinesti, kako se pripraviti. Prej sem to pisala ročno. Zdaj se zgodi samo. In stranke to resnično opazijo.",
    person: "Nina Kovač",
  },
  {
    quote:
      "No-show je bil naš največji problem. Po prvih dveh mesecih z Jedro+ sem preštela: skoraj nobenega ni bilo. Opomniki so preprosto delali. Urnik je bil zapolnjen, jaz pa sem se prvič resnično sprostila med delom.",
    person: "Tina Hribar",
  },
  {
    quote:
      "Pričakovala sem, da bo aplikacija zapletena za nastaviti. A v dveh urah je bilo vse pripravljeno — urnik, storitve, opomniki. Sporočila zvene, kot da jih pišem sama. Stranke so me celo vprašale, kdaj sem dobila asistentko.",
    person: "Maja Vidmar",
  },
  {
    quote:
      "Pri nas delamo štirje in vsak ima svoj urnik. Prej je bilo usklajevanje kaos — SMS-i, listki, klici. Zdaj je vse na enem mestu, vsak vidi svoj dan, stranke pa dobijo potrditev v minutah.",
    person: "Luka Zupan",
  },
  {
    quote:
      "Follow-up po tretmaju je bil vedno tisti korak, ki sem ga preskočila — preprosto ni bilo časa. Z Jedro+ se zgodi sam, stranka pa dobi navodila preden sploh pride domov. Vračajo se pogosteje in to čutim.",
    person: "Sara Koren",
  },
  {
    quote:
      "Imel sem seznam strank, ki niso prišle že pol leta. Z Lost Leads sistemom smo jim poslali sporočilo — brez mojega pisanja. Tretjina se je naročila nazaj. To je prava vrednost, ki jo aplikacija prinese.",
    person: "Marko Petek",
  },
];

const ITEMS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

function GradientStar({ className }: { className?: string }) {
  const gradientId = useId();
  return (
    <Star
      className={className}
      stroke={`url(#${gradientId})`}
      fill={`url(#${gradientId})`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B4FE9" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
      </defs>
    </Star>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (newPage: number) => {
    if (newPage === page) return;
    setDir(newPage > page ? 1 : -1);
    setPage(newPage);
  };

  const visible = testimonials.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kaj pravijo{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              naše stranke
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resnični komentarji podjetij, ki so avtomatizirala termine,
            komunikacijo in vsakodnevne procese z Jedro+.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden pb-4">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t) => (
                <div
                  key={t.person}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-lg flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <GradientStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                    <span className="text-base font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent shrink-0">
                      {t.person.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {t.person}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => go(Math.max(0, page - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Nazaj"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === page
                  ? "bg-gradient-to-r from-primary to-secondary scale-125"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Stran ${i + 1}`}
            />
          ))}

          <button
            onClick={() => go(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Naprej"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
