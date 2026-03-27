'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation, Footer, IntegrationSection } from '@/components/landing';
import { PricingToggle } from '@/components/pricing/PricingToggle';
import { PricingCard } from '@/components/pricing/PricingCard';

const pricingPlans = [
  {
    name: 'Jedro Plus',
    description: 'Za podjetja, ki želijo urediti termine, stranke in komunikacijo na enem mestu.',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      'baza strank in terminov',
      'baza storitev in osebja',
      'personalizirani opomniki pred in po terminu',
      'email pošiljanje',
      'celotna analitika',
      'Spletno Naročanje',
      'različni dizajni spletnega naročanja',
      'Asistent+',
    ],
    ctaText: 'Preizkusi brezplačno',
  },
  {
    name: 'Jedro Pro',
    description: 'Za podjetja, ki želijo z AI avtomatizirati komunikacijo in povečati zasedenost.',
    monthlyPrice: 39,
    yearlyPrice: 31,
    features: [
      'vse iz Jedro Plus',
      'Chatbot+',
      'Izgubljene stranke',
      'SMS pošiljanje (150 SMS/mesec)',
      'email pošiljanje',
      'dodatni dizajni spletnega naročanja',
    ],
    isPopular: true,
    ctaText: 'Začni zdaj',
  },
  {
    name: 'Jedro Premium',
    description: 'Za podjetja, ki želijo največ avtomatizacije in naprednih AI funkcij.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    comingSoon: true,
    features: [
      'vse iz Jedro Pro',
      'Receptionist+',
      'SMS pošiljanje (250 SMS/mesec)',
      'Email pošiljanje (višja kvota)',
      'premium dizajn spletnega naročanja',
      'premium chatbot dizajn',
    ],
    ctaText: 'Kontaktiraj nas',
  },
];

const addOns = [
  { name: 'Dodatni uporabnik', price: '7 € / mesec' },
  { name: 'Chatbot add-on (če ni v paketu)', price: '19 € / mesec' },
  { name: 'Dodatni SMS', price: '0,06 € / sporočilo' },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Main Pricing Section */}
      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Paketi & cenik
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Brez skritih stroškov. Brez dolgoročnih obveznosti. Prekličite kadarkoli.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2AD4C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14-dnevni brezplačni preizkus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2AD4C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Polni dostop do vseh funkcij med preizkusom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2AD4C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% garancija vračila</span>
            </div>
          </motion.div>

          {/* Pricing Toggle */}
          <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                {...plan}
                comingSoon={'comingSoon' in plan ? plan.comingSoon : false}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </div>

          {/* Enterprise Card */}
          <motion.div
            className="mt-8 relative rounded-2xl p-[2px] bg-gradient-to-r from-[#6D5EF7] via-[#2F80ED] to-[#2AD4C5]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.005 }}
          >
            <div className="rounded-2xl bg-gray-900 p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: info + features */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#6D5EF7]/20 to-[#2AD4C5]/20 border border-[#6D5EF7]/30 text-[#2AD4C5] text-xs font-semibold">
                      Po meri
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Za podjetja, ki želijo rešitev, popolnoma prilagojeno njihovim potrebam in poslovnim procesom.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-white">Po dogovoru</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Custom AI funkcije prilagojene podjetju',
                      'Premium booking page',
                      'Različni booking linki',
                      '…',
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {/* Right: description + CTA */}
                <div className="flex flex-col justify-between h-full gap-8">
                  <p className="text-gray-400 leading-relaxed">
                    Za večje organizacije, franšize in podjetja z visokimi zahtevami.
                    Pripravimo prilagojeno ponudbo z vsemi funkcijami, ki jih potrebujete —
                    brez kompromisov.
                  </p>
                  <div className="flex flex-col gap-3">
                    <motion.a
                      href="mailto:info@jedroplus.com"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6D5EF7]/30 transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Pošlji povpraševanje
                    </motion.a>
                    <p className="text-center text-xs text-gray-500">
                      Za Enterprise pripravimo ponudbo po meri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Teaser */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400 mb-2">Imate vprašanja?</p>
            <Link
              href="/faq"
              className="text-[#2AD4C5] font-medium hover:underline inline-flex items-center gap-2"
            >
              Poglejte pogosta vprašanja
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] bg-clip-text text-transparent">
                Dodatne možnosti
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Prilagodi Jedro+ svoji rasti. Ko ekipa ali poslovanje zraste, Jedro+ brez težav
              nadgradiš z dodatnimi uporabniki, lokacijami ali večjim obsegom obveščanja.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, i) => (
              <motion.div
                key={addon.name}
                className="bg-gray-900 rounded-2xl p-6 border border-white/10 hover:border-[#6D5EF7]/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-[#2AD4C5] font-medium">{addon.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#povprasevanje"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6D5EF7]/30 hover:scale-105 transition-all duration-300"
            >
              Pošlji povpraševanje
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] bg-clip-text text-transparent">
                Dodatne storitve (po meri)
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Ko želiš še več avtomatizacije in profesionalen nastop. Po dogovoru uredimo
              napredne rešitve za komunikacijo in spletno prisotnost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Spletna stran */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 border border-white/10 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-5">
                <span className="inline-block bg-gradient-to-r from-[#6D5EF7]/20 to-[#2AD4C5]/20 border border-[#6D5EF7]/30 text-[#2AD4C5] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Po meri
                </span>
                <h3 className="text-xl font-bold text-white mb-1">Spletna stran po meri</h3>
                <p className="text-sm text-gray-500">Cena po dogovoru</p>
              </div>
              <div className="space-y-3 text-gray-400 text-sm mb-6">
                <p>
                  Zasnujemo in razvijemo profesionalno spletno stran, prilagojeno vašemu podjetju
                  in panogi — od dizajna do delovanja.
                </p>
                <ul className="space-y-2 mt-3">
                  {[
                    'Unikaten dizajn, prilagojen vaši blagovni znamki',
                    'Jasni CTA gumbi in direktna povezava na vaše spletno naročanje',
                    'Mobilno optimizirana, hitra in SEO-pripravljena',
                    'Vključen chatbot ali obrazec za povpraševanje',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#6D5EF7] to-[#2AD4C5] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-gradient-to-r from-[#6D5EF7]/10 to-[#2AD4C5]/10 rounded-2xl border border-[#6D5EF7]/20">
                  <p className="font-semibold text-white text-sm mb-1">Ekskluzivno za naročnike Jedro+</p>
                  <p>
                    Vsem aktivnim naročnikom naše aplikacije nudimo{' '}
                    <span className="font-bold text-[#2AD4C5]">15 % popusta</span>{' '}
                    pri izdelavi spletne strani.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  href="/#povprasevanje"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6D5EF7]/30 hover:scale-105 transition-all duration-300"
                >
                  Pošlji povpraševanje
                </Link>
              </div>
            </motion.div>

            {/* Email agent */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 border border-white/10 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-5">
                <span className="inline-block bg-gradient-to-r from-[#6D5EF7]/20 to-[#2AD4C5]/20 border border-[#6D5EF7]/30 text-[#2AD4C5] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  AI rešitev
                </span>
                <h3 className="text-xl font-bold text-white mb-1">Email agent po meri</h3>
                <p className="text-sm text-gray-500">Cena po dogovoru</p>
              </div>
              <div className="space-y-3 text-gray-400 text-sm mb-6">
                <p>
                  Razvijemo personaliziranega AI email agenta, ki deluje v vašem imenu — razume
                  vaše stranke, vaš ton in vaše procese.
                </p>
                <ul className="space-y-2 mt-3">
                  {[
                    'Samodejno razvrsti in označi dohodne e-maile po prioriteti',
                    'Predlaga ali samostojno pošilja odgovore na pogosta vprašanja strank',
                    'Prepozna namen sporočila: naročanje, odpoved, reklamacija, splošno vprašanje',
                    'Piše v vašem tonu — formalno, prijazno ali sproščeno',
                    'Integracija z vašim obstoječim e-poštnim sistemom (Gmail, Outlook …)',
                    'Deluje 24/7 — tudi ko ste zaprte ali zunaj pisarne',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#6D5EF7] to-[#2AD4C5] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  href="/#povprasevanje"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#6D5EF7] to-[#2AD4C5] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6D5EF7]/30 hover:scale-105 transition-all duration-300"
                >
                  Pošlji povpraševanje
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <IntegrationSection dark />
      <Footer />
    </main>
  );
}
