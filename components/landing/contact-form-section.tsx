"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  grade: string;
  message: string;
};

const DEFAULT_WHATSAPP_NUMBER = "97470662277";

export function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const whatsappNumber =
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "") ||
    DEFAULT_WHATSAPP_NUMBER;

  const onChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines = [
      "Hello Edvix Team,",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      formData.grade ? `Grade/Program: ${formData.grade}` : "",
      "",
      "Message:",
      formData.message,
    ].filter(Boolean);

    const text = lines.join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.assign(url);
  };

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0.01_260)] via-black to-black" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px bg-white/10 left-0 right-0" style={{ top: `${12.5 * (i + 1)}%` }} />
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="absolute w-px bg-white/10 top-0 bottom-0" style={{ left: `${8.33 * (i + 1)}%` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 border border-white/15 bg-black/70 p-6 lg:p-8">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/55 mb-6">
              <span className="w-10 h-px bg-white/25" />
              Contact Details
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight leading-[0.95] text-white mb-4">
              Let&apos;s talk
              <br />
              <span className="text-white/50">about your child&apos;s journey.</span>
            </h2>

            <p className="text-white/65 leading-relaxed mb-8">
              Fill the form and tap send. We will open WhatsApp with your message ready to deliver to our team.
            </p>

            <div className="space-y-4 text-white/75">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-[#a8ecd2]" />
                <span className="text-sm font-mono">+{whatsappNumber}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-[#a8ecd2]" />
                <span className="text-sm">support@edvix.ai</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#a8ecd2]" />
                <span className="text-sm">Doha, Qatar</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border border-white/15 bg-black/70 p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    className="h-11 border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    className="h-11 border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    placeholder="+974..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    className="h-11 border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-white/80">Grade / Program</Label>
                  <Input
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => onChange("grade", e.target.value)}
                    className="h-11 border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    placeholder="Grade 8 / AI Upskilling"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  className="min-h-32 border-white/20 bg-black/40 text-white placeholder:text-white/40"
                  placeholder="Tell us what support you need..."
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-xs md:text-sm text-white/45 font-mono">
                  Send opens WhatsApp with your pre-filled message.
                </p>
                <Button type="submit" className="rounded-full px-7 h-11 bg-white text-black hover:bg-white/90">
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

