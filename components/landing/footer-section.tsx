"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

type FooterLink = {
  name: string;
  href: string;
  badge?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
  AIZA: [
    { name: "AI.ZA Assistant", href: "/tools" },
    { name: "What AI.ZA Can Do", href: "/tools" },
    { name: "Talk to AI.ZA", href: "/contact" },
    { name: "Book Free Demo", href: "/contact",  },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Trust & Safety", href: "/trust" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  const whatsappNumber =
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "97470662277").replace(/\D/g, "") || "97470662277";

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px] overflow-hidden">
        <Image
          src="/images/footer.png"
          alt="Bioluminescent landscape"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[center_62%]"
        />
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle dark vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content — black background, white text */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <a href="/" className="inline-flex items-center mb-5">
                <Image
                  src="/logo.png"
                  alt="Edvix logo"
                  width={146}
                  height={54}
                  className=" w-auto"
                />
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                We are Qatar&apos;s first AI-powered hybrid learning platform where advanced technology meets friendly human
            mentoring to make learning simple, clear, and affordable.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-white text-black rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-medium text-white mb-6">Contact</h3>
              <ul className="space-y-4 mb-6">
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2 group break-all sm:break-normal"
                  >
                    <Phone className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    +{whatsappNumber}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@edvix.ai"
                    className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    support@edvix.ai
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/40 inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white/50" />
                    Doha, Qatar
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-white/10 flex flex-col md:flex-row items-center md:items-center justify-between gap-3">
          <p className="text-sm text-white/30">
            &copy; 2026 Edvix. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
}
