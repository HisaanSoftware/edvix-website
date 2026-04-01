export default function AboutPage() {
  const pillars = [
    {
      title: "Student-First Personalization",
      description:
        "Every learner receives a roadmap based on their level, pace, and skill gaps so learning feels clear and achievable.",
    },
    {
      title: "AI + Human Mentoring",
      description:
        "We combine intelligent assessment with compassionate tutor guidance to deliver both precision and emotional support.",
    },
    {
      title: "Mental Wellbeing Focus",
      description:
        "Our approach reduces pressure and helps students build confidence, consistency, and a healthier relationship with study.",
    },
    {
      title: "Transparent Parent Visibility",
      description:
        "Parents stay informed through structured reports, feedback loops, and progress updates from mentors.",
    },
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 md:pt-32 pb-14 md:pb-18">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60 mb-6">
            <span className="w-10 h-px bg-white/30" />
            About Edvix
          </span>
          <h1 className="text-[clamp(2.1rem,7vw,6.6rem)] font-display tracking-tight leading-[0.92]">
            Redefining education
            <br />
            <span className="text-white/45">with intelligence and care.</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-white/65 max-w-3xl leading-relaxed">
            Edvix is built to return confidence and joy to learning. We help students grow with personalized academic support,
            one-to-one mentoring, and measurable progress families can trust.
          </p>
        </div>
      </section>

      <section className="relative py-10 lg:py-12 bg-[oklch(0.09_0.01_260)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-[58px] font-display leading-[0.94] tracking-tight mb-5">
              Our Mission
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              To return the joy of childhood to every student by replacing academic stress with personalized AI guidance
              and friendly human mentorship.
            </p>
          </div>
          <div className="lg:col-span-7 border border-white/15 bg-black/50 p-6 lg:p-8">
            <h3 className="text-2xl md:text-3xl font-display mb-4">Our Vision</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              To create a world where a child&apos;s potential is never limited by a rigid system, but empowered by technology
              that understands them.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-12 bg-[oklch(0.09_0.01_260)] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/55 mb-4">
              <span className="w-10 h-px bg-white/25" />
              Why Families Choose Edvix
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[56px] font-display leading-[0.94] tracking-tight">
              The pillars behind our learning model.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="bg-black border border-white/15 p-6 lg:p-7">
                <h3 className="text-xl font-display mb-3">{pillar.title}</h3>
                <p className="text-white/65 leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-8 lg:py-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/60 text-sm md:text-base">
            Want to know how this works for your child?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full h-11 px-6 bg-white text-black hover:bg-white/90 transition-colors text-sm md:text-base"
          >
            Talk to Edvix Team
          </a>
        </div>
      </section>
    </main>
  );
}

