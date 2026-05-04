import { Section, SectionLink } from "./Section";

export function Story() {
  return (
    <Section
      id="story"
      eyebrow="our story"
      title="three generations, one pot of broth."
      description="What started as Bà Ngoại's Sunday phở pot is now a kitchen of our own. We still toast the spices by hand, char the onions over open flame, and let the broth go for the better part of a day before the first bowl is ever poured."
      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Warm restaurant kitchen with chefs working"
      overlay="bg-dark/65"
    >
      <SectionLink href="#story">read our story</SectionLink>
    </Section>
  );
}
