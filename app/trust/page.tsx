import { PageIntro } from "@/components/landing/page-intro";
import { PageContentSection } from "@/components/landing/page-content-section";
import { SecuritySection } from "@/components/landing/security-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function TrustPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageIntro
        eyebrow="Trust & Safety"
        title="Built for student"
        subtitle="safety and confidence."
        description="Edvix protects every learning interaction with verified tutors, privacy-first systems, and transparent parent visibility."
      />
      <PageContentSection
        eyebrow="Safety Principles"
        title="How we protect learning."
        description="Trust is not a promise. It is built through daily systems, accountability, and visibility."
        items={[
          {
            title: "Verified Educators",
            description: "All mentors go through screening and profile verification before teaching students.",
          },
          {
            title: "Data Privacy",
            description: "Student records and communication are protected through secure, access-controlled workflows.",
          },
          {
            title: "Parent Transparency",
            description: "Families can review attendance, class summaries, and measurable progress at any time.",
          },
          {
            title: "Safe Communication",
            description: "Support interactions follow monitored, professional channels with clear accountability.",
          },
        ]}
      />
      <SecuritySection />
      <CtaSection />
    </main>
  );
}

