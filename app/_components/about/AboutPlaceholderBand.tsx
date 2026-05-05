export function AboutPlaceholderBand() {
  return (
    <section
      aria-labelledby="about-band-heading"
      className="border-t border-border/40 bg-cream"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-10 md:py-20">
        <h2
          id="about-band-heading"
          className="font-display text-3xl tracking-tight text-text md:text-4xl"
        >
          Placeholder highlight
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-text/85">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit.
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-relaxed text-text/80 md:text-base">
          <li>Lorem ipsum dolor sit amet — placeholder bullet one.</li>
          <li>Consectetur adipiscing elit — placeholder bullet two.</li>
          <li>Sed do eiusmod tempor incididunt — placeholder bullet three.</li>
        </ul>
      </div>
    </section>
  );
}
