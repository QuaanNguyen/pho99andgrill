import {
  MENU_CATEGORIES,
  type MenuCategoryId,
  type MenuItem,
} from "@/app/_lib/menu";
import { MenuCard } from "./MenuCard";

type MenuGridProps = {
  items: MenuItem[];
};

export function MenuGrid({ items }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <p className="py-24 text-center text-sm lowercase tracking-[0.25em] text-link">
        no dishes match your search.
      </p>
    );
  }

  const groups = new Map<MenuCategoryId, MenuItem[]>();
  for (const item of items) {
    const bucket = groups.get(item.category) ?? [];
    bucket.push(item);
    groups.set(item.category, bucket);
  }

  return (
    <div className="space-y-20 md:space-y-24">
      {MENU_CATEGORIES.map((category) => {
        const groupItems = groups.get(category.id);
        if (!groupItems || groupItems.length === 0) return null;
        return (
          <section key={category.id} aria-labelledby={`group-${category.id}`}>
            <header className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.4em] text-link">
                {category.vietnamese}
              </p>
              <h2
                id={`group-${category.id}`}
                className="mt-2 font-display text-4xl text-text md:text-5xl"
              >
                {category.label}
              </h2>
            </header>

            <ul className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:divide-x md:divide-border/50">
              {groupItems.map((item, i) => (
                <li
                  key={item.code}
                  className={i % 2 === 1 ? "md:pl-12" : "md:pr-12"}
                >
                  <MenuCard item={item} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
