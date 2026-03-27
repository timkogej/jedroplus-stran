"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { BackgroundLines } from "@/components/ui/animated-svg-background";
import { useInquiry } from "@/lib/inquiry-context";

const benefits = [
  "Manj pozabljenih terminov – pametni opomniki skrbijo za vsak korak",
  "Luksuzna izkušnja za stranke – personalizirani follow-up brez ročnega dela",
  "Polnejši urnik – sistem Izgubljenih strank samodejno povrne neaktivne stranke",
  "AI asistenti 24/7 – Asistent+, Receptionist+ in Chatbot+ vedno na voljo",
];

export default function HeroSection() {
  const { setPreselectedTopic } = useInquiry();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInquiryClick = () => {
    setPreselectedTopic("jedroplus_app");
    scrollToSection("#povprasevanje");
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <BackgroundLines
        className="min-h-screen pt-24 sm:pt-44 lg:pt-36 flex flex-col items-center"
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
        >
          Vse kar vaše podjetje potrebuje,{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
            na enem mestu
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl"
        >
          Jedro+ je aplikacija, ki združuje vse, kar vaše storitveno podjetje potrebuje
          za uspešno delovanje — z naprednimi AI funkcijami, ki zmanjšujejo ročno delo
          in vsakemu naročilu dodajo profesionalno noto.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.button
            onClick={handleInquiryClick}
            className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.28 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Pošlji povpraševanje
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#funkcije")}
            className="border-2 border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Oglej si funkcije
          </motion.button>
        </motion.div>

        {/* Benefits list */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="grid sm:grid-cols-2 gap-3 mb-10 text-left w-full max-w-2xl"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex items-start gap-2.5 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
            >
              <GradientIcon icon={Check} variant="solid" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm leading-snug">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        </div>
      </BackgroundLines>
    </section>
  );
}
