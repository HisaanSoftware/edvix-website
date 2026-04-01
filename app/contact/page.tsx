import { PageIntro } from "@/components/landing/page-intro";
import { ContactFormSection } from "@/components/landing/contact-form-section";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageIntro
        eyebrow="Contact Edvix"
        title="Speak with our"
        subtitle="learning advisors."
        description="Share your details and goals. We will open WhatsApp with your message so you can send it instantly."
      />
      <ContactFormSection />
    </main>
  );
}


