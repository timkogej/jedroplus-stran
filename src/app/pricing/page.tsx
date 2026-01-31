import Link from "next/link";
import { Navigation, Footer } from "@/components/landing";

const plans = [
  {
    name: "Jedro Plus",
    price: "19 € / mesec",
    description: "Osnovni paket za urejene termine in komunikacijo.",
    features: [
      "baza strank",
      "baza terminov",
      "baza storitev in osebja",
      "personalizirani opomniki pred in po terminu",
      "email pošiljanje",
      "celotna analitika",
      "booking link",
      "različni booking linki",
    ],
  },
  {
    name: "Jedro Pro",
    price: "39 € / mesec",
    description: "Napredne AI funkcije in Lost Leads za več zasedenosti.",
    features: [
      "vse iz Jedro Plus",
      "različni booking linki",
      "Asistent+",
      "Lost Leads sistem",
      "sms pošiljanje",
      "email pošiljanje",
    ],
    popular: true,
  },
  {
    name: "Jedro Premium",
    price: "99 € / mesec",
    description: "Največ avtomatizacije in AI funkcij.",
    features: [
      "vse iz Jedro Pro",
      "različni booking linki",
      "Receptionist+",
      "Chatbot+",
      "SMS pošiljanje (višja kvota)",
      "Email pošiljanje (višja kvota)",
    ],
  },
  {
    name: "Enterprise",
    price: "po dogovoru",
    description: "Prilagoditve funkcij in AI po meri podjetja.",
    features: [
      "Custom AI funkcije prilagojene podjetju",
      "Premium booking page",
      "Različni booking linki",
      "…",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Paketi & cenik
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Izberi paket, ki najbolje podpira tvojo rast. Vsi paketi so
            zasnovani za storitvena podjetja, ki želijo manj administracije in
            več potrjenih terminov.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  plan.popular
                    ? "border-primary ring-4 ring-primary/10"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-6">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      Najbolj priljubljen
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                {plan.name === "Enterprise" ? (
                  <Link
                    href="mailto:info@jedroplus.com"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Pošlji povpraševanje
                  </Link>
                ) : (
                  <Link
                    href="/prihaja-kmalu"
                    className="inline-flex items-center justify-center w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Izberi paket
                  </Link>
                )}
                {plan.name === "Enterprise" && (
                  <p className="text-xs text-gray-500 mt-4">
                    Za Enterprise pripravimo ponudbo po meri.
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Nadgradnje, ko jih potrebuješ
            </h2>
            <p className="text-gray-600">
              Jedro+ je zasnovan tako, da začneš z osnovo in postopoma dodajaš
              napredne funkcije. Če imaš več poslovalnic, več zaposlenih ali
              želiš več komunikacije prek SMS-a – to urediš z dodatnimi
              možnostmi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dodatne možnosti
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dodatne možnosti – prilagodi Jedro+ svoji rasti. Ko ekipa ali
              poslovanje zraste, Jedro+ brez težav nadgradiš z dodatnimi
              uporabniki, lokacijami ali večjim obsegom obveščanja.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dodatni uporabnik
              </h3>
              <p className="text-gray-700 font-medium mb-2">7 € / mesec</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dodatna lokacija
              </h3>
              <p className="text-gray-700 font-medium mb-2">10 € / mesec</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chatbot add-on (če ni v paketu)
              </h3>
              <p className="text-gray-700 font-medium mb-2">19 € / mesec</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Receptionist add-on (če ni v paketu)
              </h3>
              <p className="text-gray-700 font-medium mb-2">29 € / mesec</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Asistent add-on (če ni v paketu)
              </h3>
              <p className="text-gray-700 font-medium mb-2">15 € / mesec</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dodatni SMS
              </h3>
              <p className="text-gray-700 font-medium mb-2">0,06 € / sporočilo</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#povprasevanje"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Pošlji povpraševanje
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dodatne storitve (po meri)
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dodatne storitve – ko želiš še več avtomatizacije in profesionalen
              nastop. Po dogovoru uredimo napredne rešitve za komunikacijo in
              spletno prisotnost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email agent (personaliziran e-mail bot)
              </h3>
              <p>
                Sortira e-maile, označi pomembne, predlaga odgovore in pomaga
                pri tipičnih vprašanjih.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Izdelava spletne strani po meri
              </h3>
              <p>
                Modern design, jasni CTA gumbi, povezava na booking in osnovna
                SEO struktura.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#povprasevanje"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Pošlji povpraševanje
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
