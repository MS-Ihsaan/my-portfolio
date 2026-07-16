export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14 animate-fade-up">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      )}
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </section>
  );
}
