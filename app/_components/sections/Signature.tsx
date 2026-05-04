import { Section, SectionLink } from "./Section";

export function Signature() {
  return (
    <Section
      id="signature"
      eyebrow="the signature bowl"
      title={
        <>
          <span className="italic">phở đặc biệt</span>
        </>
      }
      description="Our house bowl: 24-hour broth, hand-pulled rice noodles, brisket, rare eye of round, tendon, and meatball, finished tableside with thai basil, lime, and a charred chili nuoc cham. The dish we open the kitchen for every morning."
      image="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Close-up of a special bowl of pho with multiple toppings"
      overlay="bg-dark/45"
    >
      <SectionLink href="#order">order a bowl</SectionLink>
      <SectionLink href="#signature">see the menu</SectionLink>
    </Section>
  );
}
