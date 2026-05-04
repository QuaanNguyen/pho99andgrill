"use client";

import { useState } from "react";
import { useNav, type NavPanel } from "@/app/_lib/nav-context";

type Section = {
  id: Exclude<NavPanel, null>;
  label: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    id: "reservations",
    label: "reservations",
    body: (
      <div className="space-y-4 text-sm text-text/80">
        <p>
          Reservations open 30 days out. Walk-ins welcome at the bar, and we hold a few
          counter seats for same-day tries.
        </p>
        <a
          href="#"
          className="inline-block border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 hover:bg-dark hover:text-bg [transition-timing-function:var(--ease-uchi)]"
        >
          book a table
        </a>
        <p className="text-xs text-link">
          Parties of 7+ — please email{" "}
          <a className="underline" href="mailto:hello@pho99grill.com">
            hello@pho99grill.com
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "order",
    label: "order online",
    body: (
      <div className="space-y-4 text-sm text-text/80">
        <p>Pickup ready in about 20 minutes. Delivery via our partners.</p>
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 hover:bg-dark hover:text-bg [transition-timing-function:var(--ease-uchi)]"
          >
            order pickup
          </a>
          <a
            href="#"
            className="border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 hover:bg-dark hover:text-bg [transition-timing-function:var(--ease-uchi)]"
          >
            order delivery
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "menus",
    label: "locations + menus",
    body: (
      <ul className="divide-y divide-border/40">
        {[
          { city: "downtown", href: "#" },
          { city: "eastside", href: "#" },
          { city: "north suburb", href: "#" },
        ].map((loc) => (
          <li key={loc.city} className="flex items-baseline justify-between py-4">
            <span className="font-display text-2xl text-text">{loc.city}</span>
            <a
              href={loc.href}
              className="text-xs lowercase tracking-[0.25em] text-link underline-offset-4 hover:underline"
            >
              menu
            </a>
          </li>
        ))}
      </ul>
    ),
  },
];

export function SideNav() {
  const { openPanel, close } = useNav();
  const [active, setActive] = useState<NavPanel>(null);

  const expanded = active ?? openPanel;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={close}
        className={[
          "fixed inset-0 z-40 bg-dark/40 backdrop-blur-sm",
          "transition-opacity duration-500 [transition-timing-function:var(--ease-uchi)]",
          openPanel ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />
      <aside
        id="side-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={openPanel === null}
        className={[
          "fixed right-0 top-0 z-50 h-full w-full max-w-md",
          "bg-bg shadow-2xl shadow-dark/20",
          "border-l border-border/60",
          "transition-transform duration-500 [transition-timing-function:var(--ease-uchi)]",
          openPanel ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-[70px] items-center justify-between border-b border-border/40 px-6 md:h-[115px]">
          <span className="font-display text-2xl text-text">menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="close menu"
            className="inline-flex h-10 w-10 items-center justify-center text-2xl text-text"
          >
            <span className="sr-only">close</span>
            ×
          </button>
        </div>

        <nav aria-label="Drawer" className="flex h-[calc(100%-70px)] flex-col overflow-y-auto px-6 py-6 md:h-[calc(100%-115px)]">
          {SECTIONS.map((section) => {
            const isOpen = expanded === section.id;
            return (
              <div key={section.id} className="border-b border-border/40 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${section.id}`}
                  className="flex w-full items-center justify-between py-5 text-left font-display text-3xl text-text transition-colors hover:text-accent"
                >
                  <span className="lowercase">{section.label}</span>
                  <span
                    aria-hidden="true"
                    className={[
                      "text-link transition-transform duration-300",
                      "[transition-timing-function:var(--ease-uchi)]",
                      isOpen ? "rotate-90" : "rotate-0",
                    ].join(" ")}
                  >
                    ›
                  </span>
                </button>
                <div
                  id={`panel-${section.id}`}
                  hidden={!isOpen}
                  className="pb-6"
                >
                  {section.body}
                </div>
              </div>
            );
          })}

          <p className="mt-auto pt-8 text-xs lowercase tracking-[0.25em] text-link">
            phở 99 grill — est. 2024
          </p>
        </nav>
      </aside>
    </>
  );
}
