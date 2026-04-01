import { PageIntro } from "@/components/landing/page-intro";
import { PageContentSection } from "@/components/landing/page-content-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function ToolsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageIntro
        eyebrow="AIZA Assistant"
        title="Your 24/7 virtual"
        subtitle="learning companion."
        description="AIZA supports students and parents anytime with instant guidance, follow-ups, and smart recommendations."
      />
      <PageContentSection
        eyebrow="AIZA Capabilities"
        title="What AIZA helps you do faster."
        description="AIZA reduces response time and makes routine support simple for families."
        items={[
          {
            title: "Instant Query Support",
            description: "Get quick answers on admissions, subjects, fees, and class schedules.",
          },
          {
            title: "Demo Class Booking",
            description: "Book and confirm demo sessions in minutes without manual back-and-forth.",
          },
          {
            title: "Learning Suggestions",
            description: "Receive personalized recommendations based on grade, goals, and performance trends.",
          },
          {
            title: "Parent Assistance",
            description: "Access progress summaries and next-step guidance at any time of day.",
          },
        ]}
      />
      <DevelopersSection />
      <CtaSection />
    </main>
  );
}

