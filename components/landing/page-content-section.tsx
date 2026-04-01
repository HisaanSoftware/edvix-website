type ContentItem = {
  title: string;
  description: string;
};

interface PageContentSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ContentItem[];
}

export function PageContentSection({ eyebrow, title, description, items }: PageContentSectionProps) {
  return (
    <section className="relative py-10 lg:py-12 overflow-hidden bg-[oklch(0.09_0.01_260)] text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px bg-white/10 left-0 right-0" style={{ top: `${12.5 * (i + 1)}%` }} />
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="absolute w-px bg-white/10 top-0 bottom-0" style={{ left: `${8.33 * (i + 1)}%` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/55 mb-5">
            <span className="w-10 h-px bg-white/30" />
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[64px] font-display leading-[0.92] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-white/65 text-base md:text-lg max-w-3xl leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {items.map((item) => (
            <article key={item.title} className="bg-black border border-white/15 p-6 lg:p-7">
              <h3 className="text-xl font-display mb-3">{item.title}</h3>
              <p className="text-white/65 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

