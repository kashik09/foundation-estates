export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={`mb-3 text-xs tracking-widest uppercase ${
            light ? "text-cream/60" : "text-charcoal/50"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-cream/80" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
