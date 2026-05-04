import { Section, SectionLink } from "./Section";

export function JoinTeam() {
  return (
    <Section
      id="team"
      eyebrow="join the team"
      title="we're hiring cooks, hosts, and grill leads."
      description="If you love taking care of people, working with your hands, and learning something every shift — there's a spot for you on the line. Tell us a little about yourself and let's grab a bowl together."
      image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Restaurant team working together in a busy kitchen"
      overlay="bg-dark/65"
    >
      <SectionLink href="mailto:jobs@pho99grill.com">apply today</SectionLink>
    </Section>
  );
}
