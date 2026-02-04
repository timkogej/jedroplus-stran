"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Users, Heart } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const benefits = [
  {
    icon: Clock,
    title: "Več potrjenih terminov",
    description:
      "Opomniki zmanjšajo pozabljanje in odpovedi.",
  },
  {
    icon: Calendar,
    title: "Več ponovnih obiskov",
    description:
      "Po terminu stranka dobi personalizirano zahvalo, povabilo k ponovnemu obisku ali oceni ter avtomatsko poslana navodila po storitvi.",
  },
  {
    icon: Users,
    title: "Manj administracije",
    description:
      "Koledar, baze, urniki, storitve in osebje delujejo kot ena celota.",
  },
  {
    icon: Heart,
    title: "Več prihodkov iz obstoječih strank",
    description:
      "Lost Leads prepozna neaktivne stranke in pomaga zapolniti urnik.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
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
            Zakaj podjetja preklopijo na{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jedro+
            </span>
            ?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Storitvena podjetja izgubljajo čas in prihodke zaradi razdrobljenih
            evidenc, pozabljanja strank, ročnega obveščanja in neizkoriščenih
            podatkov. Jedro+ to reši – sistem je narejen za realno uporabo v
            salonih, klinikah, servisih in vseh podjetjih, ki delajo s termini.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-5">
                <GradientIcon
                  icon={benefit.icon}
                  variant="gradient"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
