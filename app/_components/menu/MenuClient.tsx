"use client";

import { useMemo, useState } from "react";
import {
  MENU_ITEMS,
  normalizeForSearch,
  type MenuItem,
} from "@/app/_lib/menu";
import { CategoryBar, type ActiveCategory } from "./CategoryBar";
import { MenuGrid } from "./MenuGrid";

function matchesQuery(item: MenuItem, normalizedQuery: string): boolean {
  if (!normalizedQuery) return true;
  const haystack = normalizeForSearch(
    `${item.code} ${item.english} ${item.vietnamese} ${item.description ?? ""}`,
  );
  return haystack.includes(normalizedQuery);
}

export function MenuClient() {
  const [active, setActive] = useState<ActiveCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = normalizeForSearch(query.trim());
    return MENU_ITEMS.filter(
      (item) =>
        (active === "all" || item.category === active) &&
        matchesQuery(item, normalized),
    );
  }, [active, query]);

  return (
    <>
      <CategoryBar
        active={active}
        onChange={setActive}
        query={query}
        onQueryChange={setQuery}
      />

      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <MenuGrid items={filtered} />
      </div>
    </>
  );
}
