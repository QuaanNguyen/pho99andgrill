import { Section, SectionLink } from "./Section";

export function Hero() {
  return (
    <Section
      id="home"
      eyebrow="est. 2024 — family kitchen"
      title={
        <>
          slow-simmered phở,
          <br />
          flame-grilled classics.
        </>
      }
      description="Pho 99 Grill is a small family kitchen serving 24-hour bone broth phở, charcoal-grilled meats, and herb-forward Vietnamese plates. Sit down with us, or take it to go."
      image="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=2400&q=80"
      imageAlt="A steaming bowl of Vietnamese pho with herbs and lime"
      priority
    >
      <SectionLink href="#signature">view menu</SectionLink>
      <SectionLink href="#order">order online</SectionLink>
    </Section>
  );
}
