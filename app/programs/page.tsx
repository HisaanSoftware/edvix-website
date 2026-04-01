import { PageIntro } from "@/components/landing/page-intro";
import { PageContentSection } from "@/components/landing/page-content-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function ProgramsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageIntro
        eyebrow="Programs"
        title="Focused programs"
        subtitle="for every student."
        description="From grades 1-12 academic mastery to AI upskilling tracks, our programs are structured for clear, measurable progress."
      />
      <PageContentSection
        eyebrow="Program Tracks"
        title="Choose the right path for your goal."
        description="Each track is personalized with mentor support, weekly targets, and progress reviews."
        items={[
          {
            title: "School Support (Grades 1-12)",
            description: "Concept-by-concept tutoring aligned to curriculum, exams, and homework routines.",
          },
          {
            title: "Exam Preparation",
            description: "Focused preparation plans with mock tests, revision loops, and score-improvement strategy.",
          },
          {
            title: "AI Upskilling",
            description: "Practical AI and digital skills programs for teens, university learners, and professionals.",
          },
          {
            title: "Confidence Coaching",
            description: "Mentor-led routines that improve discipline, communication, and student self-belief.",
          },
        ]}
      />
      <CtaSection />
    </main>
  );
}

