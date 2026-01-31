import Link from "next/link";
import { Navigation, Footer } from "@/components/landing";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Kontakt
          </h1>
          <p className="text-lg text-gray-600">
            Stranke so nam na prvem mestu. Nudimo podporo 24/7 in z veseljem
            odgovorimo na vsako vprašanje.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl text-center">
            <p className="text-gray-600 mb-6">
              Pišite nam ali nas pokličite – odgovorimo hitro in jasno.
            </p>
            <p className="text-gray-600 mb-4">
              E-mail:{" "}
              <a
                href="mailto:info@jedroplus.com"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                info@jedroplus.com
              </a>
            </p>
            <p className="text-gray-600 mb-8">
              Telefon:{" "}
              <a
                href="tel:068663410"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                068663410
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
