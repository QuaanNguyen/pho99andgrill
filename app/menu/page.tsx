import type { Metadata } from "next";
import { Footer } from "../_components/Footer";
import { MenuClient } from "../_components/menu/MenuClient";

export const metadata: Metadata = {
  title: "Menu — Pho 99 & Grill",
  description:
    "Slow-simmered phở, vermicelli bowls, sizzling bò né, bánh mì, broken rice, and more — the full Pho 99 & Grill menu.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-bg pt-[70px] md:pt-[96px]">
      <header className="mx-auto max-w-[1280px] px-6 pt-16 pb-10 text-center md:px-10 md:pt-24 md:pb-14">
        <p className="text-[11px] uppercase tracking-[0.4em] text-link">
          our kitchen
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight text-text md:text-7xl">
          the menu
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text/80 md:text-lg">
          Slow-simmered phở, flame-grilled meats, and the small Vietnamese
          classics our family has cooked for decades.
        </p>
      </header>

      <MenuClient />

      <Footer />
    </main>
  );
}
