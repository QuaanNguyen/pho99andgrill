import { Footer } from "./_components/Footer";
import { SectionBreak } from "./_components/SectionBreak";
import { Events } from "./_components/sections/Events";
import { Fresh } from "./_components/sections/Fresh";
import { Hero } from "./_components/sections/Hero";
import { JoinTeam } from "./_components/sections/JoinTeam";
import { Newsletter } from "./_components/sections/Newsletter";
import { Signature } from "./_components/sections/Signature";
import { Story } from "./_components/sections/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionBreak
        label="Welcome"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Story />
      <SectionBreak
        label="the signature bowl"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Signature />
      <SectionBreak
        label="fresh, daily"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Fresh />
      <SectionBreak
        label="catering + events"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Events />
      <SectionBreak
        label="join the team"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <JoinTeam />
      <Newsletter />
      <Footer />
    </main>
  );
}
