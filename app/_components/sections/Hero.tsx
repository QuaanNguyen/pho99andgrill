import { Section, SectionLink } from "./Section";

const HOURS_LAST_UPDATED = "May 5, 2026";
const HOURS_LAST_UPDATED_ISO = "2026-05-05";

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
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="inline-block w-fit rounded-none bg-accent px-1.5 py-0.5 text-bg leading-snug">
              Mon–Tue 10:00 AM–9:00 PM.
            </span>
            <span className="inline-block w-fit rounded-none bg-accent px-1.5 py-0.5 text-bg leading-snug">
              Wed closed.
            </span>
            <span className="inline-block w-fit rounded-none bg-accent px-1.5 py-0.5 text-bg leading-snug">
              Thu–Sun 10:00 AM–9:00 PM.
            </span>
          </div>
          <p>
            Early closures and private events are announced online in advance.
          </p>
        </div>
      }
      image="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=2400&q=80"
      imageAlt="A steaming bowl of Vietnamese pho with herbs and lime"
      priority
    >
      <SectionLink href="/menu">view menu</SectionLink>
    </Section>
  );
}
