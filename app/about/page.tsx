import type { Metadata } from "next";
import { AboutPageHero } from "../_components/about/AboutPageHero";
import { AboutPlaceholderBand } from "../_components/about/AboutPlaceholderBand";
import { AboutPlaceholderStory } from "../_components/about/AboutPlaceholderStory";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "About Us — Pho 99 & Grill",
  description:
    "Placeholder about page for Pho 99 & Grill — family-run Vietnamese kitchen in Cypress, TX.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg pt-[70px] md:pt-[96px]">
      <AboutPageHero />
      <AboutPlaceholderStory />
      <AboutPlaceholderBand />
      <Footer />
    </main>
  );
}
