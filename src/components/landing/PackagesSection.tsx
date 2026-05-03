"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { useInquiry } from "@/lib/inquiry-context";

interface Package {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlySaving?: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel?: string;
}

const packages: Package[] = [
  {
    name: "Jedro Plus",
    monthlyPrice: "19 €",
    yearlyPrice: "16 €",
    yearlySaving: "38 €",
    subtitle: "Za podjetja, ki želijo urejen sistem in jasen pregled",
    description:
      "Koledar, baze in opomniki, ki brez zapletov uredijo vsakdan.",
    features: [
      "Baza strank in terminov",
      "Baza storitev in osebja",
      "Personalizirani opomniki pred in po terminu",
      "Email pošiljanje (500 email/mesec)",
      "Komunikacija",
      "Celotna analitika",
      "Spletno naročanje",
      "Različni dizajni spletnega naročanja",
    ],
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "35 €",
    yearlyPrice: "29 €",
    yearlySaving: "20%",
    subtitle: "Za podjetja, ki želijo več zasedenosti in manj praznih terminov",
    description: "Vključuje obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije.",
    features: [
      "Vse iz Jedro Plus",
      "Obveščanje izgubljenih strank",
      "SMS pošiljanje (200 sms/mesec)",
      "Email pošiljanje (2000 email/mesec)",
      "Dodatni dizajni spletnega naročanja",
    ],
    popular: true,
  },
  {
    name: "Jedro Premium",
    monthlyPrice: "99 €",
    yearlyPrice: "83 €",
    yearlySaving: "192 €",
    subtitle: "Za podjetja, ki želijo maksimalno avtomatizacijo",
    description: "Celoten nabor AI funkcij za rast in komunikacijo.",
    features: [
      "Vse iz Jedro Pro",
      "Premium AI funkcije",
      "Najvišja email kvota",
      "Najvišja SMS kvota",
      "Premium dizajn spletnega naročanja",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "po dogovoru",
    yearlyPrice: "po dogovoru",
    subtitle: "Za podjetja s posebnimi zahtevami in prilagoditvami",
    description: "Prilagodimo custom dizajne, custom funkcije in celoten sistem vašemu poslovanju.",
    features: [
      "Custom AI funkcije (chatbot, asistent, receptionist in več)",
      "Custom booking dizajni z obdelavo slik in naprednimi elementi",
      "Avtomatizacije poslovnih procesov po meri",
      "Neomejena email in SMS kvota",
      "Dedicirani manager in prioritetna podpora",
    ],
    ctaLabel: "Pošlji povpraševanje",
  },
];

export default function PackagesSection() {
  const { setPreselectedTopic } = useInquiry();
  const [isYearly, setIsYearly] = useState(false);

  const handlePackageSelect = () => {
    setPreselectedTopic("enterprise");
    const element = document.querySelector("#povprasevanje");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="paketi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Izberi paket glede na to,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              koliko želiš avtomatizirati
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vsi paketi vključujejo: Baze podatkov, Koledar terminov, Spletno
            naročanje, Analitiko
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              !isYearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Mesečno
          </span>

          {/* Toggle pill */}
          <button
            onClick={() => setIsYearly((prev) => !prev)}
            aria-label="Preklopi med mesečnim in letnim obračunom"
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              isYearly
                ? "bg-gradient-to-r from-primary to-secondary"
                : "bg-gray-200"
            }`}
          >
            {/* Sliding circle */}
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
              style={{ left: isYearly ? "calc(100% - 1.5rem)" : "0.25rem" }}
            />
          </button>

          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                isYearly ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Letno
            </span>
            {/* Savings badge — animate in/out */}
            <AnimatePresence>
              {isYearly && (
                <motion.span
                  key="savings-badge"
                  initial={{ opacity: 0, scale: 0.7, x: -6 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.7, x: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white px-2.5 py-1 rounded-full"
                >
                  2 meseca brezplačno
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const displayPrice = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
            const priceSuffix =
              pkg.monthlyPrice === "po dogovoru" ? "" : " / mesec";

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  pkg.popular
                    ? "border-2 border-primary ring-4 ring-primary/10"
                    : "border border-gray-100"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 right-6">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      Najbolj priljubljen
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>

                  {/* Animated price */}
                  <div className="h-10 overflow-hidden relative mb-1">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={`${pkg.name}-${isYearly ? "yearly" : "monthly"}`}
                        initial={{ y: isYearly ? 24 : -24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: isYearly ? -24 : 24, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-10"
                      >
                        {displayPrice}
                        <span className="text-base font-medium">
                          {priceSuffix}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Yearly savings / billing note */}
                  <div className="h-5">
                    <AnimatePresence>
                      {isYearly && pkg.yearlySaving && (
                        <motion.p
                          key={`${pkg.name}-saving`}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-green-600 font-medium"
                        >
                          Prihranite {pkg.yearlySaving} na leto
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="text-gray-600 text-sm mt-2">{pkg.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 pb-6 border-b border-gray-100">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <GradientIcon
                        icon={Check}
                        variant="solid"
                        className="w-4 h-4 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {pkg.name === "Enterprise" ? (
                  <button
                    onClick={() => handlePackageSelect()}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {pkg.ctaLabel ?? "Izberi paket"}
                  </button>
                ) : (
                  <Link
                    href="/prihaja-kmalu"
                    className={`inline-flex items-center justify-center w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {pkg.ctaLabel ?? "Izberi paket"}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
