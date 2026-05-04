import { Section, SectionLink } from "./Section";

const HOURS_LAST_UPDATED = "May 3, 2026";
const HOURS_LAST_UPDATED_ISO = "2026-05-03";

export function Hero() {
  return (
    <Section
      id="home"
      eyebrow="From Saigon to Cypress"
      eyebrowClassName="text-xs md:text-sm"
      title={
        <>
          Phở 99 &amp; Grill
          <br />
          under new ownership.
        </>
      }
      description={
        <div className="space-y-3">
          <p>
            <span className="font-medium">Current hours</span>{" "}
            <span className="text-bg/75">
              (updated{" "}
              <time dateTime={HOURS_LAST_UPDATED_ISO}>{HOURS_LAST_UPDATED}</time>
              )
            </span>
          </p>
          <p>
            <span className="inline-block rounded-none bg-accent px-1.5 py-0.5 text-bg leading-snug">
              Open daily, 9:30 AM–8:30 PM.
            </span>
          </p>
          <p>
            Early closures and private events are announced online in advance.
          </p>
        </div>
      }
      image="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=2400&q=80"
      imageAlt="A steaming bowl of Vietnamese pho with herbs and lime"
      priority
    >
      <SectionLink href="#signature">view menu</SectionLink>
      <SectionLink href="#order">order online</SectionLink>
    </Section>
  );
}
