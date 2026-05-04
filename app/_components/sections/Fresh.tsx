import { Section, SectionLink } from "./Section";

export function Fresh() {
  return (
    <Section
      id="fresh"
      eyebrow="fresh, daily"
      title="herbs in the morning, broth on by sunrise."
      description="Thai basil, sawtooth, mint, and bean sprouts arrive from a small grower up the road three times a week. Nothing on the table sits longer than a day. Our broth gets the slow lane; our garnish gets the fast one."
      image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Fresh herbs and vegetables on a wooden surface"
      overlay="bg-dark/55"
    >
      <SectionLink href="#fresh">our sources</SectionLink>
    </Section>
  );
}
