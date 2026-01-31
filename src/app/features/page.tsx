import Link from "next/link";
import { featuresData } from "@/lib/features-data";
import {
  Navigation,
  Footer,
  PersonalizationSection,
  AISection,
  FreeDemoSection,
  TestimonialsSection,
  MidPageCTASection,
} from "@/components/landing";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Funkcije Jedro+
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Izberi funkcijo, ki te zanima, in poglej, kako Jedro+ izboljša
              delo s strankami, termini in komunikacijo.
            </p>
            <div className="mt-8">
              <Link
                href="/#povprasevanje"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Pošlji povpraševanje
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature) => (
              <Dialog key={feature.id}>
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.shortDescription}
                  </p>
                  <div className="mt-auto">
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        Poglej več
                      </button>
                    </DialogTrigger>
                  </div>
                </div>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{feature.title}</DialogTitle>
                    <DialogDescription>{feature.intro}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Ključne prednosti
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        Za koga je najbolj uporabno:
                      </span>{" "}
                      {feature.audience}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/#povprasevanje"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Pošlji povpraševanje
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <FreeDemoSection
        title="Brezplačna predstavitev funkcij Jedro+"
        subtitle="V živo vam pokažemo, kako Jedro+ v praksi avtomatizira vaše vsakodnevne procese."
        bullets={[
          "Pametni opomniki in avtomatska komunikacija",
          "Koledar terminov in upravljanje storitev",
          "CRM in zgodovina obiskov strank",
          "Lost Leads za ponovno aktivacijo strank",
          "AI funkcije za hitrejše odzive",
        ]}
        ctaLabel="Rezerviraj brezplačno predstavitev"
      />

      <PersonalizationSection detailed />
      <AISection />
      <TestimonialsSection />
      <MidPageCTASection
        title="Preizkusi app"
        subtitle="Oglej si, kako hitro lahko začnete delati z Jedro+."
        primaryLabel="Odpri aplikacijo"
        primaryHref="https://app.jedroplus.com"
        secondaryLabel="Pošlji povpraševanje"
        secondaryHref="/#povprasevanje"
      />
      <Footer />
    </main>
  );
}
