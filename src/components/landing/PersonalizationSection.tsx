"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, ArrowRight, Check, Quote } from "lucide-react";
import Link from "next/link";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { WordRotate } from "@/components/ui/word-rotate";

const cards = [
  {
    icon: MessageSquare,
    title: "Personalizirani opomniki",
    desc: "Vsako sporočilo vsebuje ime stranke, točen termin in navodila za njeno specifično storitev. Stranka čuti, da je sporočilo napisano posebej zanjo.",
  },
  {
    icon: Settings,
    title: "Aplikacija po vaši meri",
    desc: "Barvna shema, ton komunikacije, chatbot — vse prilagojeno vašemu podjetju. Ne prilagajate se sistemu, sistem se prilagaja vam.",
  },
];

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

const rotatingPhrases = [
  "Boljša izkušnja za stranke",
  "Več zaupanja z vsakim sporočilom",
  "Vaš glas v vsaki komunikaciji",
];

interface PersonalizationSectionProps {
  detailed?: boolean;
  phoneImage?: string;
}

export default function PersonalizationSection({
  detailed = false,
}: PersonalizationSectionProps) {
  return (
    <section id="personalizacija" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Personalizacija{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              na vseh nivojih
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jedro+ z AI ustvari sporočila v vašem tonu — opomniki, follow-upi
            in navodila, ki gradijo pravi odnos s strankami.
          </p>
          {detailed && (
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Sistem upošteva storitev, izvajalca, lokacijo in zgodovino
              stranke, zato so sporočila vedno relevantna in uporabna.
            </p>
          )}
        </motion.div>

        {detailed ? (
          /* ── DETAILED (features page): original full layout ── */
          <>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
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

              {/* Card 2 */}
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
                      <strong className="text-gray-800">Komunikacijski stil:</strong>{" "}
                      formalen, prijateljski ali profesionalen – kot vi želite
                    </li>
                    <li>
                      <strong className="text-gray-800">Termini in storitve:</strong>{" "}
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

            {/* Nobeno sporočilo ni enako */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white to-secondary/8 border border-primary/10 rounded-3xl" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                      Nobeno sporočilo{" "}
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ni enako.
                      </span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Ko Ana pride na manikuro in Maja na barvanje las — vsaka od njiju prejme povsem drugačno sporočilo. Različno ime, drugačna storitev, specifična navodila. Nič šablonskega — le prava, osebna komunikacija.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Prav to je tisto, kar stranke opazijo in čutijo. Jedro+ ne pošilja generičnih obvestil — vsako sporočilo nosi karakter vašega podjetja in iskreno skrb za posamezno stranko. Zaupanje se ne gradi z oglasi, ampak z malenkostmi, ki jih stranka prejme ob pravem času.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Pristnost, ki jo stranke opazijo",
                        desc: "Sporočilo, ki se začne z imenom stranke in vsebuje točen termin, zveni kot napis od človeka — ne od sistema.",
                      },
                      {
                        label: "Zaupanje se gradi z vsakim sporočilom",
                        desc: "Redna, relevantna komunikacija utrjuje odnos. Stranka čuti, da ste pozorni nanjo, ne le na terminski seznam.",
                      },
                      {
                        label: "Vaš glas, v vsakem opomnik",
                        desc: "AI piše v tonu, ki ste mu ga določili vi — formalno, prijazno ali sproščeno. Vedno dosledno, vedno vaše.",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-gray-100 shadow-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary mt-2 shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary/30 shrink-0 mt-1" />
                  <p className="text-gray-500 italic text-base leading-relaxed max-w-2xl">
                    &ldquo;Stranke ne vedo, da stoji za sporočilom sistem — čutijo le, da ste pozorni. In to je točno to, kar zgradi zvestobo.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          /* ── COMPACT (main page): cards + iPhone + rotating text ── */
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: cards + rotating text + CTA */}
            <div className="flex flex-col gap-5">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-3">
                    <GradientIcon icon={card.icon} variant="gradient" className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-3 pt-2"
              >
                <WordRotate
                  words={rotatingPhrases}
                  duration={2800}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                />
                <div>
                  <Link
                    href="/features#personalizacija"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Poglej si več
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: iOS 26 iMessage bubbles */}
            <div className="relative flex justify-center items-center h-[520px]">
              {/* Ambient glow */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-3xl" />

              <div className="relative w-full max-w-[340px] flex flex-col">
                {/* Timestamp */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-center text-[11px] text-gray-400 font-medium mb-5 tracking-wide"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
                >
                  Danes, 14:23
                </motion.p>

                {/* Bubble 1 — right (blue) — follow-up po beljenju zob */}
                <motion.div
                  initial={{ opacity: 0, x: 36, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.52, delay: 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex justify-end"
                  style={{ zIndex: 10, position: "relative" }}
                >
                  <div
                    className="max-w-[82%] text-white text-[14px] leading-[1.45]"
                    style={{
                      padding: "10px 14px",
                      background: "linear-gradient(145deg, #1A8FFF 0%, #006EE5 100%)",
                      borderRadius: "20px 20px 5px 20px",
                      boxShadow: "0 6px 20px rgba(0, 110, 229, 0.38), 0 1px 4px rgba(0,0,0,0.12)",
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Pozdravljeni Ana! 😊 Ker ste imeli danes beljenje zob, priporočamo, da naslednje 24 ur ne uživate temnih napitkov in hrane — kave, rdečega vina ali borovnic. Vaš nasmeh bo zasijal! ✨
                  </div>
                </motion.div>

                {/* Bubble 2 — left (gray) — opomnik za striženje */}
                <motion.div
                  initial={{ opacity: 0, x: -36, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.52, delay: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex justify-start"
                  style={{ zIndex: 20, position: "relative", marginTop: "-10px" }}
                >
                  <div
                    className="max-w-[82%] text-[14px] leading-[1.45]"
                    style={{
                      padding: "10px 14px",
                      background: "#E5E5EA",
                      color: "#1C1C1E",
                      borderRadius: "20px 20px 20px 5px",
                      boxShadow: "0 3px 12px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)",
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Spoštovani Luka! ✂️ Jutri ob 14:30 vas čaka termin za striženje. Prosimo, oglasite se 5 minut pred terminom. Lepo se imejte!
                  </div>
                </motion.div>

                {/* Bubble 3 — right (blue) — zahvala za zaupanje */}
                <motion.div
                  initial={{ opacity: 0, x: 36, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.52, delay: 0.38, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex justify-end"
                  style={{ zIndex: 30, position: "relative", marginTop: "-10px" }}
                >
                  <div
                    className="max-w-[82%] text-white text-[14px] leading-[1.45]"
                    style={{
                      padding: "10px 14px",
                      background: "linear-gradient(145deg, #1A8FFF 0%, #006EE5 100%)",
                      borderRadius: "20px 20px 5px 20px",
                      boxShadow: "0 6px 20px rgba(0, 110, 229, 0.38), 0 1px 4px rgba(0,0,0,0.12)",
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                    }}
                  >
                    Hvala, Sara, za vaše zaupanje! 💙 Bilo nam je v veselje skrbeti za vas. Vaše mnenje nam ogromno pomeni — se vidimo kmalu! 🌟
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
