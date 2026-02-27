"use client";

import { motion } from "framer-motion";
import { Heart, Star, Repeat2, Layers } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { setPreselectedTopicExternal } from "@/lib/inquiry-context";

const benefits = [
  {
    icon: Heart,
    title: "Pokažite strankam, da vam je mar",
    description:
      "Personalizirana sporočila in opomniki gradijo zaupanje ter profesionalen odnos z vsako stranko.",
  },
  {
    icon: Star,
    title: "Boljša izkušnja za stranke",
    description:
      "Stranke prejmejo pravočasne, prilagojene opomike – pred terminom in po njem. Brez vašega dodatnega dela.",
  },
  {
    icon: Repeat2,
    title: "Večja zvestoba in ponovni obiski",
    description:
      "Redna, skrbna komunikacija zmanjša pozabljanje terminov in povečuje število strank, ki se vračajo.",
  },
  {
    icon: Layers,
    title: "Ni potrebna menjava sistema",
    description:
      "Preprosto dodamo naše pametno sporočanje k vašemu obstoječemu sistemu. Brez prekinitev, brez učenja od začetka.",
  },
];

export default function IntegrationSection() {
  const handleClick = () => {
    setPreselectedTopicExternal("integration");
    const el = document.querySelector("#povprasevanje");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#povprasevanje";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Že imate sistem za rezervacije?
          </span>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dodajte pametno sporočanje{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              k obstoječemu sistemu
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Če že uporabljate Fresho, Booksy, Google Calendar ali lastno
            rešitev — to ni ovira. Naš sistem pametnega sporočanja se
            integrira v vaš obstoječi sistem naročanja in strankam doda
            tisto, kar jim pogosto manjka: skrbno, personalizirano
            komunikacijo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="mb-4">
                <GradientIcon icon={benefit.icon} variant="gradient" className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Integracija je enostavna
            </h3>
            <p className="text-gray-600 max-w-xl">
              Povejte nam, kateri sistem že uporabljate, in pripravimo
              prilagojeno integracijo. Stranke bodo opazile razliko – vi pa
              ne boste spremenili obstoječega načina dela.
            </p>
          </div>
          <button
            onClick={handleClick}
            className="flex-shrink-0 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Pošlji povpraševanje za integracijo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
