"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "AI Smart Assessment",
    description: "We analyze the student's academic level and learning style to find the exact starting point.",
  },
  {
    number: "02",
    title: "Personalized Roadmap",
    description: "A customized study plan is created for smooth, stress-free progress.",
  },
  {
    number: "03",
    title: "Individual Mentoring",
    description: "Expert teachers guide students one-on-one to ensure strong concept clarity.",
  },
  {
    number: "04",
    title: "Confidence Building",
    description: "We support students emotionally to overcome fear, anxiety, and self-doubt.",
  },
  {
    number: "05",
    title: "Transparent Tracking",
    description: "Parents receive clear updates on each stage of the learning journey.",
    points: ["Regular progress updates", "Detailed reports", "Mentor feedback"],
  },
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const firstRowSteps = steps.slice(0, 3);
  const secondRowSteps = steps.slice(3);

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
    <section id="how-it-works" ref={sectionRef} className="relative py-12 lg:py-14 bg-[oklch(0.09_0.01_260)] text-white">
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/45 mb-6">
            <span className="w-10 h-px bg-white/20" />
            Success Roadmap
          </span>

          <h2
            className={`text-3xl md:text-4xl lg:text-[72px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our 5-Step
            <br />
            <span className="text-white/40">Success Roadmap.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          {firstRowSteps.map((step, index) => (
            <article
              key={step.number}
              className={`bg-black border border-white/20 p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-display text-[#a8ecd2]">{step.number}</span>
                <span className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-3">{step.title}</h3>
              <p className="text-white/65 leading-relaxed">{step.description}</p>
              {Array.isArray(step.points) ? (
                <ul className="list-disc list-inside text-white/60 mt-4 space-y-1">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-2 lg:mt-3 grid gap-4 lg:gap-5 lg:grid-cols-2 lg:max-w-[66.666%] lg:mx-auto">
          {secondRowSteps.map((step, index) => (
            <article
              key={step.number}
              className={`bg-black border border-white/20 p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + firstRowSteps.length) * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-display text-[#a8ecd2]">{step.number}</span>
                <span className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-3">{step.title}</h3>
              <p className="text-white/65 leading-relaxed">{step.description}</p>
              {Array.isArray(step.points) ? (
                <ul className="list-disc list-inside text-white/60 mt-4 space-y-1">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
