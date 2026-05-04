import { Section, SectionLink } from "./Section";

export function Events() {
  return (
    <Section
      id="events"
      eyebrow="catering + events"
      eyebrowClassName="text-xs md:text-sm"
      title="dinner for ten — or a hundred."
      description="From a phở bar in your backyard to a full grill spread for the office, we cater up and down the city. Private buyouts of the dining room are available Sunday and Monday evenings."
      image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2400&q=80"
      imageAlt="A long table set for a dinner party with platters of food"
      overlay="bg-dark/60"
    >
      <SectionLink href="#events">catering menu</SectionLink>
      <SectionLink href="mailto:events@pho99grill.com">inquire</SectionLink>
    </Section>
  );
}
