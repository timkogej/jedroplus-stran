"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Check } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const card1Features = [
  "Dinamična vsebina (ime, datum, storitev)",
  "Ton prilagojen tipu storitve",
  "Navodila specifična za vsako storitev",
  "Različni opomniki za različne tipe strank",
];

const card2Features = [
  "Branding in dizajn po meri",
  "Prilagodljiv ton komunikacije",
  "Individualna konfiguracija za vsako podjetje",
  "Fleksibilni workflow glede na panogo",
];

interface PersonalizationSectionProps {
  detailed?: boolean;
}

export default function PersonalizationSection({
  detailed = false,
}: PersonalizationSectionProps) {
  return (
    <section id="personalizacija" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Personalizacija{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              na vseh nivojih
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jedro+ z uporabo AI ustvari personalizirana sporočila (e-mail in
            SMS) v vašem tonu. Opomniki in follow-upi vključujejo navodila pred
            in po storitvi ter gradijo profesionalen odnos s strankami.
          </p>
          {detailed && (
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Sistem upošteva storitev, izvajalca, lokacijo in zgodovino
              stranke, zato so sporočila vedno relevantna in uporabna.
            </p>
          )}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Personalizirani opomniki */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <GradientIcon icon={MessageSquare} variant="gradient" className="w-8 h-8" />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Personalizirani opomniki za vsako stranko
            </h3>

            <div className="text-gray-600 leading-relaxed mb-6 space-y-3">
              <p>Vsak opomnik in follow-up se prilagodi glede na:</p>
              <ul className="space-y-2 ml-4">
                <li>
                  <strong className="text-gray-800">Stranko:</strong> uporabi
                  ime, pretekle termine, preference
                </li>
                <li>
                  <strong className="text-gray-800">Termin:</strong> čas,
                  lokacija, izvajalec storitve
                </li>
                <li>
                  <strong className="text-gray-800">Storitev:</strong>{" "}
                  navodila pred terminom in priporočila po storitvi
                </li>
              </ul>
              <p className="pt-2">
                Rezultat? Stranka čuti, da je sporočilo napisano posebej za njo
                – ne generično obvestilo.
              </p>
            </div>

            <ul className="space-y-3">
              {card1Features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Personalizacija aplikacije */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <GradientIcon icon={Settings} variant="gradient" className="w-8 h-8" />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Aplikacija prilagojena vašemu podjetju
            </h3>

            <div className="text-gray-600 leading-relaxed mb-6 space-y-3">
              <p>Ni platforma, ki jo uporabljate – je sistem, ki dela z vami.</p>
              <ul className="space-y-2 ml-4">
                <li>
                  <strong className="text-gray-800">Spletno naročanje:</strong>{" "}
                  vaša barvna shema, logotip, ton komunikacije
                </li>
                <li>
                  <strong className="text-gray-800">Chatbot:</strong> prilagojen
                  vašim storitvam in pogostim vprašanjem
                </li>
                <li>
                  <strong className="text-gray-800">
                    Komunikacijski stil:
                  </strong>{" "}
                  formalen, prijateljski ali profesionalen – kot vi želite
                </li>
                <li>
                  <strong className="text-gray-800">
                    Termini in storitve:
                  </strong>{" "}
                  prilagojeno vašemu načinu dela
                </li>
              </ul>
              <p className="pt-2">
                Ne prilagajate se sistemu – sistem se prilagaja vam.
              </p>
            </div>

            <ul className="space-y-3">
              {card2Features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <GradientIcon icon={Check} variant="solid" className="w-4 h-4" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
