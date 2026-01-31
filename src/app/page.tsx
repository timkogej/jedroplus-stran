"use client";

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
import { InquiryProvider } from "@/lib/inquiry-context";

export default function Home() {
  return (
    <InquiryProvider>
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
        <PackagesSection />
        <TargetAudienceSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection limit={5} />
        <InquiryForm />
        <Footer />
      </main>
    </InquiryProvider>
  );
}
