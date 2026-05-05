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

function tabIconDataUrl(): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#AD473B"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const metadata: Metadata = {
  title: "Pho 99 & Grill",
  description:
    "Pho 99 & Grill is a family-run Vietnamese kitchen in Cypress, TX, cooking the same phở and grilled meats our chef served for over a decade in Saigon.",
  icons: {
    icon: [{ url: tabIconDataUrl(), type: "image/svg+xml" }],
  },
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
