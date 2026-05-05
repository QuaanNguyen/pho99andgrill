export function AboutPlaceholderStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="mx-auto max-w-[1280px] border-t border-border/30 px-6 py-14 md:px-10 md:py-20"
    >
      <h2
        id="about-story-heading"
        className="font-display text-3xl tracking-tight text-text md:text-4xl"
      >
        Placeholder story block
      </h2>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-text/85 md:columns-2 md:gap-10">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </section>
  );
}
