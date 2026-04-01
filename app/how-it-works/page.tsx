export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "AI Smart Assessment",
      description:
        "We evaluate current academic level, learning style, and concept gaps to identify the right starting point.",
    },
    {
      number: "02",
      title: "Personalized Roadmap",
      description:
        "A custom weekly plan is created for each student with clear goals, pace, and measurable outcomes.",
    },
    {
      number: "03",
      title: "1-to-1 Expert Mentoring",
      description:
        "Students receive focused sessions with dedicated mentors who adapt teaching to each learner's progress.",
    },
    {
      number: "04",
      title: "Confidence Building",
      description:
        "We reduce learning stress with supportive routines that help students gain clarity, discipline, and confidence.",
    },
    {
      number: "05",
      title: "Transparent Parent Tracking",
      description:
        "Parents receive regular updates, reports, and feedback so progress remains visible at every stage.",
    },
  ];

  const highlights = [
    "Reduced academic pressure with better learning flow",
    "Visible weekly progress with actionable mentor feedback",
    "Adaptive roadmap based on real student performance",
    "A balanced model of AI precision plus human care",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[oklch(0.09_0.01_260)]" />
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={`h-${i}`} className="absolute h-px bg-white/10 left-0 right-0" style={{ top: `${12.5 * (i + 1)}%` }} />
          ))}
          {[...Array(12)].map((_, i) => (
            <div key={`v-${i}`} className="absolute w-px bg-white/10 top-0 bottom-0" style={{ left: `${8.33 * (i + 1)}%` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 pb-14 md:pt-10 md:pb-20">
          

          <div className="grid lg:grid-cols-12 gap-8 items-end mt-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/55 mb-6">
                <span className="w-10 h-px bg-white/25" />
                How It Works
              </span>
              <h1 className="text-[clamp(2rem,7vw,6.4rem)] font-display tracking-tight leading-[0.92]">
                A stress-free
                <br />
                <span className="text-white/50">learning journey.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base md:text-lg text-white/65 leading-relaxed">
                Edvix follows a clear five-step framework that helps students grow consistently while parents stay fully informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
              {steps.map((step) => (
                <article key={step.number} className="bg-[oklch(0.09_0.01_260)] border border-white/15 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-display text-[#a8ecd2]">{step.number}</span>
                    <span className="h-px flex-1 bg-white/20" />
                  </div>
                  <h2 className="text-2xl font-display mb-3">{step.title}</h2>
                  <p className="text-white/65 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>

            <aside className="lg:col-span-4 bg-[oklch(0.09_0.01_260)] border border-white/15 p-6 lg:p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/50 mb-5">
                <span className="w-8 h-px bg-white/25" />
                Outcomes
              </span>
              <h3 className="text-3xl font-display tracking-tight mb-5">
                Why this model works.
              </h3>
              <ul className="space-y-4 text-white/70">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#a8ecd2] shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full h-11 px-6 bg-white text-black hover:bg-white/90 transition-colors"
              >
                Book Free Counseling
              </a>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/35">© 2026 Edvix. All rights reserved.</p>
          <a href="/contact" className="text-sm text-white/55 hover:text-white transition-colors">
            Need help? Talk to our team
          </a>
        </div>
      </footer>
    </main>
  );
}
