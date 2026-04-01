import { PageIntro } from "@/components/landing/page-intro";
import { PageContentSection } from "@/components/landing/page-content-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function LearningNetworkPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageIntro
        eyebrow="Learning Network"
        title="Connected tutors"
        subtitle="for every learner."
        description="Our learning network blends trusted mentors, structured sessions, and real-time tracking across online and city-based classrooms."
      />
      <PageContentSection
        eyebrow="Network Strength"
        title="Reliable support in every class."
        description="Edvix combines people, process, and technology to deliver consistent learning outcomes."
        items={[
          {
            title: "Verified Mentors",
            description: "Students are matched with qualified tutors based on subject, grade, and learning style.",
          },
          {
            title: "Flexible Delivery",
            description: "Attend classes online or through supported local hubs without losing learning continuity.",
          },
          {
            title: "Progress Analytics",
            description: "Track attendance, assessments, and performance trends with easy parent dashboards.",
          },
          {
            title: "Fast Coordination",
            description: "Scheduling, support, and follow-ups are managed through one coordinated platform.",
          },
        ]}
      />
      <InfrastructureSection />
      <MetricsSection />
      <CtaSection />
    </main>
  );
}

