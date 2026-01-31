import { Navigation, Footer, FAQSection } from "@/components/landing";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-12 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            FAQ
          </h1>
          <p className="text-lg text-gray-600">
            Tukaj najdeš odgovore na najpogostejša vprašanja o Jedro+.
          </p>
        </div>
      </section>
      <FAQSection
        title="Pogosta vprašanja"
        description="Če ne najdeš odgovora, nam piši ali pokliči."
        sectionId="faq-list"
      />
      <Footer />
    </main>
  );
}
