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
    id: "contact",
    label: "contact",
    body: (
      <div className="space-y-4 text-sm text-text/80">
        <p>
          <a href="tel:+13614273744" className="hover:text-accent">
            (361) 427-3744
          </a>
        </p>
        <p>
          <a href="mailto:hello@pho99grill.com" className="hover:text-accent">
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
      <div className="flex flex-col gap-3 text-sm text-text/80">
        <a
          href="#"
          className="rounded-none border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:border-accent hover:bg-accent hover:text-bg"
        >
          order pickup
        </a>
        <a
          href="#"
          className="rounded-none border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:border-accent hover:bg-accent hover:text-bg"
        >
          order delivery
        </a>
      </div>
    ),
  },
  {
    id: "locations",
    label: "locations",
    body: (
      <div className="space-y-5 text-sm text-text/80">
        <address className="not-italic leading-relaxed">
          6073 Highway 6 N
          <br />
          Houston, TX 77084
        </address>
        <p>
          <a href="tel:+13614273744" className="hover:text-accent">
            (361) 427-3744
          </a>
        </p>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-link">
            hours
          </p>
          <ul className="mt-2 space-y-1">
            <li>mon – fri · 9:30a – 8:30p</li>
            <li>sat · 9:30a – 8:30p</li>
            <li>sun · 9:30a – 8:30p</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "social",
    label: "social media",
    body: (
      <div className="flex flex-col gap-3 text-sm text-text/80">
        {[
          { label: "instagram", href: "https://instagram.com/pho99grill" },
          { label: "facebook", href: "https://facebook.com/pho99grill" },
          { label: "tiktok", href: "https://tiktok.com/@pho99grill" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-none border border-border px-5 py-2 lowercase tracking-wide text-text transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:border-accent hover:bg-accent hover:text-bg"
          >
            {link.label}
          </a>
        ))}
      </div>
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

        <nav aria-label="Drawer" className="flex h-[calc(100%-70px)] flex-col overflow-y-auto px-6 py-3 md:h-[calc(100%-115px)] md:py-6">
          {SECTIONS.map((section) => {
            const isOpen = expanded === section.id;
            return (
              <div key={section.id} className="border-b border-border/40 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${section.id}`}
                  className="flex w-full items-center justify-between py-3 text-left font-display text-2xl text-text transition-colors hover:text-accent md:py-5 md:text-3xl"
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
                  className="pb-4 md:pb-6"
                >
                  {section.body}
                </div>
              </div>
            );
          })}

          <p className="mt-auto pt-4 text-[11px] lowercase tracking-[0.25em] text-link md:pt-8 md:text-xs">
            phở 99 &amp; grill — est. 2026
          </p>
        </nav>
      </aside>
    </>
  );
}
