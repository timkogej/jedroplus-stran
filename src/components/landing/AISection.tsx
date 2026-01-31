"use client";

import { motion } from "framer-motion";
import { Bot, Headphones, MessageSquare, Check } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

export default function AISection() {
  return (
    <section
      id="ai"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              funkcije
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI funkcije so narejene tako, da prihranijo čas pri komunikaciji in
            pomagajo povečati število naročil. AI pomaga tudi pri ustvarjanju
            visoko kakovostnih, personaliziranih opomnikov.
          </p>
        </motion.div>

        {/* AI Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Asistent+ Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                <GradientIcon icon={Bot} variant="gradient" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                  Asistent+
                </h3>
                <p className="text-gray-600">AI asistent za vsakodnevno delo</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Pomaga pri vnosu terminov, odgovarja na vprašanja o strankah,
              storitvah in urnikih ter podpira vsakodnevno delo ekipe.
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 mb-6 border-l-4 border-primary">
              <p className="text-gray-700 italic text-sm">
                &quot;Uporabi kontekst vaših terminov in storitev, da predlaga
                najboljši odgovor ali naslednji korak&quot;
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Predlogi besedil opomnikov",
                "Pomoč pri operativnih nalogah",
                "Hitri odgovori na vprašanja",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-medium">AI deluje 24/7</span>
            </div>
          </motion.div>

          {/* Chatbot+ Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                <GradientIcon
                  icon={MessageSquare}
                  variant="gradient"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    Chatbot+
                  </h3>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Premium
                  </span>
                </div>
                <p className="text-gray-600">AI chatbot za spletno stran</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Odgovarja na vprašanja, vodi obiskovalce in omogoča rezervacijo
              termina neposredno na spletni strani.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Odgovori 24/7",
                "Usmerja do booking linka",
                "Razbremeni telefon in e-pošto",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-medium">
                Vedno pripravljen na vprašanja
              </span>
            </div>
          </motion.div>

          {/* Receptionist+ Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                <GradientIcon
                  icon={Headphones}
                  variant="gradient"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    Receptionist+
                  </h3>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Premium
                  </span>
                </div>
                <p className="text-gray-600">AI receptionist za sprejem</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Odgovarja na klice, pomaga pri naročanju terminov in pokrije
              najpogostejša telefonska vprašanja.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Usmerja stranke do prave storitve",
                "Ponuja proste termine",
                "Zmanjša zamujene klice",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-medium">
                Pomoč tudi izven delovnega časa
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
