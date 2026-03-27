"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, Footer } from "@/components/landing";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Stranke so nam na prvem mestu. Nudimo podporo 24/7 in z veseljem
            odgovorimo na vsako vprašanje.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.p
              className="text-gray-600 mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              Pišite nam ali nas pokličite – odgovorimo hitro in jasno.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              E-mail:{" "}
              <a
                href="mailto:info@jedroplus.com"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                info@jedroplus.com
              </a>
            </motion.p>
            <motion.p
              className="text-gray-600 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              Telefon:{" "}
              <a
                href="tel:068663410"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                068663410
              </a>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              <Link
                href="mailto:info@jedroplus.com"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Pošlji e-mail
              </Link>
              <Link
                href="tel:068663410"
                className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Pokliči
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
