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
      <SectionBreak label="our story" />
      <Story />
      <SectionBreak label="the signature bowl" />
      <Signature />
      <SectionBreak label="fresh, daily" />
      <Fresh />
      <SectionBreak label="catering + events" />
      <Events />
      <SectionBreak label="join the team" />
      <JoinTeam />
      <Newsletter />
      <Footer />
    </main>
  );
}
