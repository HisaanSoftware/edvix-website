interface PageIntroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
}

export function PageIntro({ eyebrow, title, subtitle, description }: PageIntroProps) {
  return (
    <section className="relative min-h-[56vh] flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[oklch(0.09_0.01_260)]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10 left-0 right-0"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10 top-0 bottom-0"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-28">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60 mb-8">
          <span className="w-10 h-px bg-white/30" />
          {eyebrow}
        </span>
        <h1 className="text-white text-[clamp(2.2rem,7vw,7rem)] font-display leading-[0.92] tracking-tight">
          {title}
          <br />
          <span className="text-white/45">{subtitle}</span>
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

