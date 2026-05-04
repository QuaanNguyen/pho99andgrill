import { Section, SectionLink } from "./Section";

export function Story() {
  return (
    <Section
      id="story"
      eyebrow="our story"
      eyebrowClassName="text-xs md:text-sm"
      title="saigon, in cypress."
      description="For over 60 years our family called Saigon home — where the phở vendor at dawn and the grilled meats on the corner were recipes passed between generations without ever being written down. Our chef and owner spent more than a decade running a kitchen in Vietnam before we brought everything we knew to Houston."
      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Warm restaurant kitchen with chefs working"
      overlay="bg-dark/65"
    >
      <SectionLink href="#story">read our story</SectionLink>
    </Section>
  );
}
