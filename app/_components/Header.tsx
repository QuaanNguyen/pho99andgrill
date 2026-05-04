"use client";

import Link from "next/link";
import { useNav } from "@/app/_lib/nav-context";
import { useScrollDirection } from "@/app/_lib/useScrollDirection";

export function Header() {
  const { hidden } = useScrollDirection();
  const { open, openPanel } = useNav();

  const offscreen = hidden && !openPanel;

  return (
    <header
      data-hidden={offscreen}
      className="
        fixed top-0 left-0 z-50 w-full
        bg-bg border-b border-border/80 shadow-[0_1px_0_0_rgba(195,147,103,0.15)]
        transition-transform duration-500 [transition-timing-function:var(--ease-uchi)]
        data-[hidden=true]:-translate-y-full data-[hidden=false]:translate-y-0
      "
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 md:h-[96px] md:px-10">
        <Link
          href="/"
          aria-label="Pho 99 Grill — home"
          className="font-display leading-none"
        >
          <span className="block text-3xl tracking-tight text-text md:text-4xl">
            phở<span className="ml-1 text-accent">99</span>
          </span>
          <span className="mt-1 hidden text-[11px] uppercase tracking-[0.32em] text-link md:block">
            grill
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8 text-sm lowercase tracking-wide text-text">
            <li>
              <button
                type="button"
                onClick={() => open("menus")}
                aria-controls="side-nav"
                aria-expanded={openPanel === "menus"}
                className="hover:text-accent transition-colors"
              >
                locations + menus
              </button>
            </li>
            <li>
              <Link href="#events" className="hover:text-accent transition-colors">
                catering + events
              </Link>
            </li>
            <li>
              <Link href="#newsletter" className="hover:text-accent transition-colors">
                gift cards
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => open("order")}
                aria-controls="side-nav"
                aria-expanded={openPanel === "order"}
                className="hover:text-accent transition-colors"
              >
                order online
              </button>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => open("reservations")}
            aria-controls="side-nav"
            aria-expanded={openPanel === "reservations"}
            className="border border-border px-6 py-2 text-sm lowercase tracking-wide text-text transition-colors duration-300 hover:bg-dark hover:text-bg [transition-timing-function:var(--ease-uchi)]"
          >
            reservations
          </button>
        </nav>

        <button
          type="button"
          onClick={() => open("menus")}
          aria-controls="side-nav"
          aria-expanded={openPanel !== null}
          aria-label="open menu"
          className="lg:hidden -mr-1 inline-flex h-10 w-10 items-center justify-center"
        >
          <span className="sr-only">open menu</span>
          <span className="relative block h-3 w-6">
            <span className="absolute left-0 top-0 h-px w-full bg-text" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-text" />
            <span className="absolute bottom-0 left-0 h-px w-full bg-text" />
          </span>
        </button>
      </div>
    </header>
  );
}
