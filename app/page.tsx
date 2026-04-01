import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      {/* <MetricsSection /> */}
      {/* <SecuritySection /> */}
      <DevelopersSection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </main>
  );
}
