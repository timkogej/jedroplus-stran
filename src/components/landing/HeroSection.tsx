"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import CalendarPreview from "./CalendarPreview";
import { useInquiry } from "@/lib/inquiry-context";

const benefits = [
  "Manj pozabljenih terminov in odpovedi – pametni opomniki skrbijo za vsak korak",
  "Luksuzna izkušnja za stranke – personalizirani follow-up z navodili, brez ročnega dela",
  "Polnejši urnik – Lost Leads sistem samodejno povrne neaktivne stranke",
  "AI asistenti 24/7 – Asistent+, Receptionist+ in Chatbot+ poskrbijo za stranke, ko ste zasedeni",
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
    <section
      id="hero"
      className="relative min-h-screen pt-20 lg:pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            >
              Za vsa moderna storitvena podjetja
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              JedroPlus – vse kar vaše storitveno podjetje potrebuje,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                na enem mestu
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
              Jedro+ je aplikacija, ki združuje vse, kar vaše storitveno podjetje
              potrebuje za uspešno delovanje. Vključuje napredne AI funkcije, ki
              zmanjšujejo ročno delo, dvigujejo raven komunikacije in vsakemu
              naročilu dodajo profesionalno, osebno noto.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <GradientIcon
                    icon={Check}
                    variant="solid"
                    className="w-4 h-4 mt-0.5"
                  />
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleInquiryClick}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Pošlji povpraševanje
              </button>
              <button
                onClick={() => scrollToSection("#funkcije")}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                Oglej si funkcije
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Calendar Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-2"
          >
            <CalendarPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
