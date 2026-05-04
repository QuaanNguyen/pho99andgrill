import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { NavRoot } from "./_components/NavRoot";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pho 99 Grill — Slow-simmered phở and flame-grilled Vietnamese classics",
  description:
    "Pho 99 Grill is a family-run Vietnamese kitchen serving 24-hour broth phở, flame-grilled meats, and fresh herb-forward classics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-bg text-text antialiased">
        <NavRoot />
        {children}
      </body>
    </html>
  );
}
