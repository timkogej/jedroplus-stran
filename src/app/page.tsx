"use client";

import { useState } from "react";
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  FreeDemoSection,
  PersonalizationSection,
  PackagesSection,
  TargetAudienceSection,
  HowItWorksSection,
  WhyChooseSection,
  TestimonialsSection,
  FAQSection,
  InquiryForm,
  Footer,
} from "@/components/landing";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FreeDemoSection
        title="Brezplačna predstavitev Jedro+"
        subtitle="V 15 minutah vam pokažemo, kako Jedro+ uredi termine, opomnike, stranke in AI funkcije v praksi."
        ctaLabel="Rezerviraj brezplačno predstavitev"
      />
      <PersonalizationSection />
      <PackagesSection onSelectPackage={setSelectedPackage} />
      <TargetAudienceSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection limit={5} />
      <InquiryForm
        selectedPackage={selectedPackage}
        onClearPackage={() => setSelectedPackage(null)}
      />
      <Footer />
    </main>
  );
}
