"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const AIZAFeatures = [
  "Suggest personalized learning paths",
  "Help book demo classes instantly",
  "Answer admission and course queries",
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-12 lg:py-14 overflow-hidden">
      <div
        className={`absolute bottom-0 right-0 w-[56%] h-[86%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src="/images/stair.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-left-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-8 lg:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            AI.ZA - Your 24/7 Virtual Assistant
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-[72px] font-display tracking-tight leading-[0.92]">
            Technology enhances
            <br />
            <span className="text-muted-foreground">human connection <br/>transforms lives.</span>
          </h2>
        </div>

        <div
          className={`max-w-[55%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            AIZA is Edvix&apos;s smart virtual assistant designed to support students and parents anytime.
          </p>

          <h3 className="text-xl font-display mb-3">What AIZA Can Do:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            {AIZAFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-8">Talk to AIZA</Button>
            <Button variant="outline" className="rounded-full px-8">
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
