"use client";

import Link from "next/link";
import { industries } from "@/lib/industries-data";
import {
  Navigation,
  Footer,
  WhyChooseSection,
  TestimonialsSection,
  FAQSection,
  FreeDemoSection,
} from "@/components/landing";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Scissors,
  Stethoscope,
  Sparkles,
  Dumbbell,
  Car,
  MessageCircle,
  Monitor,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const industryIconMap: Record<string, LucideIcon> = {
  saloni: Scissors,
  klinike: Stethoscope,
  wellness: Sparkles,
  fitnes: Dumbbell,
  servisi: Car,
  svetovanje: MessageCircle,
  agencije: Monitor,
  ostalo: Briefcase,
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Panoge
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jedro+ je narejen za storitvena podjetja vseh velikosti. Spodaj je
            izbor panog, kjer se sistem najbolj izkaže.
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
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industryIconMap[industry.id];
              return (
              <Dialog key={industry.id}>
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  {Icon && (
                    <div className="mb-4">
                      <GradientIcon icon={Icon} variant="gradient" className="w-7 h-7" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{industry.intro}</p>
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
                    <DialogTitle>{industry.title}</DialogTitle>
                    <DialogDescription>{industry.intro}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Ključne prednosti
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {industry.benefits.map((benefit) => (
                          <li key={benefit}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        Primer uporabe:
                      </span>{" "}
                      {industry.scenario}
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
              );
            })}
          </div>
        </div>
      </section>
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <FreeDemoSection
        title="Brezplačna predstavitev za vašo panogo"
        subtitle="V 15 minutah pripravimo demo, prilagojen vaši dejavnosti, in pokažemo avtomatizacije, ki prihranijo čas."
        ctaLabel="Rezerviraj brezplačno predstavitev"
      />
      <Footer />
    </main>
  );
}
