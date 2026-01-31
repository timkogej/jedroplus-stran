"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { GradientIcon } from "@/components/ui/gradient-icon";

interface Package {
  name: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel?: string;
}

const packages: Package[] = [
  {
    name: "Jedro Plus",
    price: "19 € / mesec",
    subtitle: "Za podjetja, ki želijo urejen sistem in jasen pregled",
    description:
      "Koledar, baze in opomniki, ki brez zapletov uredijo vsakdan.",
    features: [
      "Baza strank",
      "Baza terminov",
      "Baza storitev in osebja",
      "Personalizirani opomniki pred in po terminu",
      "Email pošiljanje",
      "Celotna analitika",
      "Booking link",
      "Različni booking linki",
    ],
  },
  {
    name: "Jedro Pro",
    price: "39 € / mesec",
    subtitle: "Za podjetja, ki želijo več zasedenosti in manj praznih terminov",
    description: "Vključuje AI pomočnike, Lost Leads in SMS opomnike.",
    features: [
      "Vse iz Jedro Plus",
      "Različni booking linki",
      "Asistent+",
      "Lost Leads sistem",
      "SMS pošiljanje",
      "Email pošiljanje",
    ],
    popular: true,
  },
  {
    name: "Jedro Premium",
    price: "99 € / mesec",
    subtitle: "Za podjetja, ki želijo maksimalno avtomatizacijo",
    description: "Celoten nabor AI funkcij za rast in komunikacijo.",
    features: [
      "Vse iz Jedro Pro",
      "Različni booking linki",
      "Receptionist+",
      "Chatbot+",
      "SMS pošiljanje (višja kvota)",
      "Email pošiljanje (višja kvota)",
    ],
  },
  {
    name: "Enterprise",
    price: "po dogovoru",
    subtitle: "Za podjetja s posebnimi zahtevami in prilagoditvami",
    description: "Prilagoditve funkcij, AI in booking okolja po meri.",
    features: [
      "Custom AI funkcije prilagojene podjetju",
      "Premium booking page",
      "Različni booking linki",
      "Dodatne zahteve po meri",
    ],
    ctaLabel: "Pošlji povpraševanje",
  },
];

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export default function PackagesSection({
  onSelectPackage,
}: PackagesSectionProps) {
  const handlePackageSelect = (packageName: string) => {
    onSelectPackage(packageName);
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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Paketi Jedro+ – izberi paket glede na to,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              koliko želiš avtomatizirati
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vsi paketi vključujejo: Baze podatkov, Koledar terminov, Spletno
            naročanje, Analitiko
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
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
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  {pkg.price}
                </div>
                <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
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
                  onClick={() => handlePackageSelect(pkg.name)}
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
          ))}
        </div>
      </div>
    </section>
  );
}
