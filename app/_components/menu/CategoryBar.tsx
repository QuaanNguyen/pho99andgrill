"use client";

import { MENU_CATEGORIES, type MenuCategoryId } from "@/app/_lib/menu";
import { useScrollDirection } from "@/app/_lib/useScrollDirection";

export type ActiveCategory = MenuCategoryId | "all";

type CategoryBarProps = {
  active: ActiveCategory;
  onChange: (id: ActiveCategory) => void;
  query: string;
  onQueryChange: (value: string) => void;
};

const TABS: { id: ActiveCategory; label: string }[] = [
  { id: "all", label: "All" },
  ...MENU_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
];

export function CategoryBar({
  active,
  onChange,
  query,
  onQueryChange,
}: CategoryBarProps) {
  const { hidden } = useScrollDirection();

  return (
    <div
      data-header-hidden={hidden}
      className="
        sticky z-30 -mx-6 border-y border-border/60 bg-bg/95 backdrop-blur md:-mx-10
        transition-[top] duration-500 [transition-timing-function:var(--ease-uchi)]
        top-[70px] md:top-[96px]
        data-[header-hidden=true]:top-0 data-[header-hidden=true]:md:top-0
      "
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-8 md:py-5">
          <nav
            role="tablist"
            aria-label="Menu categories"
            className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0"
          >
            <ul className="flex w-max items-center gap-1 md:w-auto md:flex-wrap md:gap-2">
              {TABS.map((tab) => {
                const selected = tab.id === active;
                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => onChange(tab.id)}
                      className={[
                        "whitespace-nowrap border px-4 py-2 text-xs lowercase tracking-[0.2em] transition-colors duration-300",
                        "[transition-timing-function:var(--ease-uchi)]",
                        selected
                          ? "border-accent bg-accent text-bg"
                          : "border-border/60 text-text hover:border-accent hover:text-accent",
                      ].join(" ")}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <label className="relative block w-full md:w-72 md:shrink-0">
            <span className="sr-only">Search menu</span>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="search menu..."
              className="w-full border border-border/60 bg-transparent px-4 py-2 text-sm lowercase tracking-wide text-text placeholder:text-link/70 focus:border-accent focus:outline-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
