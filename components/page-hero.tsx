export function PageHero({ eyebrow, title, emphasis, description }: { eyebrow: string; title: string; emphasis?: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <div className="eyebrow light"><span /> {eyebrow}</div>
        <h1>{title}{emphasis && <><br /><em>{emphasis}</em></>}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}