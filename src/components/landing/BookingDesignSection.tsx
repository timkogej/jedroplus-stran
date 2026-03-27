"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";

const benefits = [
  "Desetine profesionalnih dizajnov — za salone, klinike, fitness centre in vse vmes",
  "Prilagojeno vašim barvam in logotipu, brez programiranja",
  "Optimizirano za mobilne naprave — stranke naročajo s telefona",
  "Lep vmesnik pomeni več dokončanih naročil in manj odpuščenih košaric",
  "Deluje z vašo obstoječo stranjo ali kot samostojna stran",
];

export default function BookingDesignSection() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rezervacije, ki{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                razbijejo rutino
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ponujamo ogromno profesionalnih dizajnov za spletno naročanje —
              vsak skrbno oblikovan, da vašim strankam zagotovi izkušnjo, ki jo
              bodo rade ponovile.
            </p>
          </motion.div>

          {/* Simple bullet list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4 max-w-2xl mx-auto mb-14"
          >
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-gray-700 text-base leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Monthly designs — inline pill style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#C4BFFF] via-[#A8C8F8] to-[#B8EFEC] max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left rounded-2xl px-8 py-6 bg-white">
              <Sparkles className="w-7 h-7 flex-shrink-0 text-[#A8C8F8]" />
              <p className="text-gray-700 text-base leading-relaxed">
                <span className="font-semibold text-gray-900">Vsak mesec novi dizajni.</span>{" "}
                Naša ekipa redno dodaja sveže predloge — vaše naročanje ostaja
                sodobno in privlačno brez vašega truda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive gallery — white background */}
      <ImmersiveScrollGallery
        contentNode={
          <>
            Vaše stranke rezervirajo{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              v stilu.
            </span>{" "}
            Vsak dizajn je skrbno oblikovan, da odraža profesionalnost vašega podjetja in ustvari{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              izkušnjo, ki jo stranke ne pozabijo.
            </span>
          </>
        }
      />
    </>
  );
}
