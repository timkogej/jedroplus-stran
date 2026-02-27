"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import CalendarPreview from "./CalendarPreview";
import { useInquiry } from "@/lib/inquiry-context";
import { GradientBlob } from "@/components/animations/GradientBlob";

const benefits = [
  "Manj pozabljenih terminov in odpovedi – pametni opomniki skrbijo za vsak korak",
  "Luksuzna izkušnja za stranke – personalizirani follow-up z navodili, brez ročnega dela",
  "Polnejši urnik – Lost Leads sistem samodejno povrne neaktivne stranke",
  "AI asistenti 24/7 – Asistent+, Receptionist+ in Chatbot+ poskrbijo za stranke, ko ste zasedeni",
];

export default function HeroSection() {
  const { setPreselectedTopic } = useInquiry();
  const containerRef = useRef(null);

  // Only fade out on scroll — no y movement (avoids scroll jank)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-20 lg:pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
      {/* CSS-animated blobs — compositor thread only */}
      <GradientBlob className="w-[480px] h-[480px] -top-40 -right-40" />
      <GradientBlob
        className="w-[380px] h-[380px] top-1/2 -left-40"
        colors={["#4ECDC4", "#3B82F6", "#5B4FE9"]}
        alt
      />

      {/* Fade out section on scroll (opacity only — no layout shift) */}
      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="order-1 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
              whileHover={{ scale: 1.04 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Za vsa moderna storitvena podjetja
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
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
              transition={{ duration: 0.55, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8"
            >
              Jedro+ je aplikacija, ki združuje vse, kar vaše storitveno podjetje
              potrebuje za uspešno delovanje. Vključuje napredne AI funkcije, ki
              zmanjšujejo ročno delo, dvigujejo raven komunikacije in vsakemu
              naročilu dodajo profesionalno, osebno noto.
            </motion.p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex items-start gap-3"
                >
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4 mt-0.5" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleInquiryClick}
                className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* Gradient sweep on hover */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.28 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Pošlji povpraševanje
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#funkcije")}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Oglej si funkcije
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.82 + i * 0.07, type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                <span className="text-gray-800 font-semibold">50+</span> zadovoljnih podjetij
              </p>
            </motion.div>
          </div>

          {/* Right Column - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-2 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-3xl blur-2xl" />
            <div className="relative">
              <CalendarPreview />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — pure CSS animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDuration: "1.4s" }} />
        </div>
      </motion.div>
    </section>
  );
}
