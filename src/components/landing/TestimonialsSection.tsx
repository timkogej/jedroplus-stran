"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Personalizirani opomniki z navodili pred in po posegih so pacientom zelo jasni, administracije pa je precej manj.",
    business: "Zobozdravstvena ambulanta",
    person: "dr. Nina Kovač",
    role: "zobozdravnica",
  },
  {
    quote:
      "Sporočila so prilagojena in vizualno lepa, organizacija terminov pa končno pregledna.",
    business: "Kozmetični salon",
    person: "Tina Hribar",
    role: "lastnica",
  },
  {
    quote:
      "Stranke pohvalijo opomnike in profesionalen ton komunikacije – občutek je, da smo vedno korak pred njimi.",
    business: "Kozmetični salon",
    person: "Maja Vidmar",
    role: "vodja salona",
  },
  {
    quote:
      "Koledar je jasen, urniki ekipe so usklajeni, no-show pa je opazno manj.",
    business: "Frizerski salon",
    person: "Luka Zupan",
    role: "frizer",
  },
  {
    quote:
      "Follow-up po tretmaju z navodili je odličen – stranke se vračajo pogosteje.",
    business: "Masažni salon",
    person: "Sara Koren",
    role: "terapevtka",
  },
  {
    quote:
      "Asistent+ nam je poenostavil komunikacijo in interno organizacijo. Delo je manj kaotično.",
    business: "Storitveno podjetje",
    person: "Marko Petek",
    role: "direktor",
  },
];

function GradientStar({ className }: { className?: string }) {
  const gradientId = useId();
  return (
    <Star
      className={className}
      stroke={`url(#${gradientId})`}
      fill={`url(#${gradientId})`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B4FE9" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
      </defs>
    </Star>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mnenja podjetij
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resnični komentarji podjetij, ki so avtomatizirala termine,
            komunikacijo in vsakodnevne procese.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.person}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <GradientStar key={starIndex} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="text-sm font-semibold text-gray-900">
                  {testimonial.business}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.person} • {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
