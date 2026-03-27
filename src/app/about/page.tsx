'use client';

import { Navigation, Footer } from "@/components/landing";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Jasnost",
    description:
      "Uporabniška izkušnja je preprosta, brez skritih korakov in z jasnim pregledom.",
  },
  {
    title: "Zanesljivost",
    description:
      "Jedro+ je stabilna osnova za vsakodnevno delo s strankami in termini.",
  },
  {
    title: "Partnerstvo",
    description:
      "Ne prodajamo samo programske opreme – pomagamo izboljšati poslovanje.",
  },
  {
    title: "Napredek",
    description:
      "Vedno iščemo načine, kako storitve narediti hitrejše, pametnejše in bolj povezane.",
  },
];

const storyParagraphs = [
  "Jedro+ obstaja, ker storitvena podjetja prepogosto izgubljajo čas na ročne opomnike, neusklajene koledarje in nepregledne evidence. To so naloge, ki jih lahko avtomatizacija reši hitro in zanesljivo.",
  "Naš cilj je, da ekipa dela manj administracije in več kakovostnih storitev. Zato gradimo sistem, ki poveže termine, stranke, personalizirane opomnike in AI pomočnike v eno jedro.",
  "Želimo postaviti nov standard na področju opomnikov in delovanja storitvenih podjetij. Verjamemo, da mora biti komunikacija s strankami personalizirana, pravočasna in profesionalna – brez dodatnega ročnega dela. S tem podjetjem pomagamo, da se osredotočijo na to, kar znajo najbolje: kakovostne storitve za svoje stranke.",
];

// Word-by-word reveal for the hero title
function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

// Clip-path wipe reveal for paragraphs
function WipeReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      animate={
        isInView
          ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
          : {}
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
}

// Slide from a direction with fade
function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const offsets = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 3D-tilt stagger for value cards
function ValueCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 20, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 800 }}
      className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const subtitleRef = useRef(null);
  const subtitleInView = useInView(subtitleRef, { once: true, margin: "-80px" });

  const valTitleRef = useRef(null);
  const valTitleInView = useInView(valTitleRef, { once: true, margin: "-80px" });

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <WordReveal
            text="O nas"
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          />
          <motion.p
            ref={subtitleRef}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Jedro+ je slovensko podjetje, ustvarjeno za storitvena podjetja, ki
            želijo več reda, manj administracije in boljšo komunikacijo s
            strankami.
          </motion.p>
        </div>
      </section>

      {/* Story paragraphs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600">
          {storyParagraphs.map((p, i) => (
            <WipeReveal key={i} delay={i * 0.08}>
              {p}
            </WipeReveal>
          ))}
        </div>
      </section>

      {/* Misija & Vizija */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <SlideIn direction="left">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]">
              <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Misija</h2>
                <p className="text-gray-600">
                  Pomagati storitvenim podjetjem avtomatizirati termine, opomnike in
                  komunikacijo, da se lahko osredotočijo na kakovost storitev.
                </p>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.1}>
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]">
              <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Vizija</h2>
                <p className="text-gray-600">
                  Postati najbolj zaupanja vredna platforma za naročanje in
                  komunikacijo v storitvenih podjetjih po Sloveniji in širše.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            ref={valTitleRef}
            className="text-3xl font-bold text-gray-900 text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={valTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Naše{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              vrednote
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
