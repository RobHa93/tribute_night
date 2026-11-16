const PageHero = ({ title, image, imageAlt, imagePosition = 'center', children }) => (
  // Auf breiten Bildschirmen höher, sonst bleibt von einem 3:2-Foto nur ein schmaler Streifen sichtbar
  <header className="relative isolate flex min-h-[22rem] items-end overflow-hidden pt-16 md:min-h-[28rem] lg:min-h-[min(33rem,58svh)]">
    <img
      src={image}
      alt={imageAlt}
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      style={{ objectPosition: imagePosition }}
    />
    {/* Unten und links dunkel für den Text, oben rechts bleibt das Foto sichtbar */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-hall via-hall/45 to-hall/10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-hall/60 to-transparent" />
    <div className="container-content pb-10 md:pb-14 lg:pb-20">
      <h1 className="heading-page">{title}</h1>
      {children && <p className="mt-4 max-w-2xl text-lg text-ink-muted md:text-xl">{children}</p>}
    </div>
  </header>
);

export default PageHero;
