import Image from "next/image";
import type { MenuItem, MenuTag } from "@/app/_lib/menu";

const TAG_STYLE: Record<MenuTag, string> = {
  Spicy: "border-accent text-accent",
  Popular: "border-accent text-accent",
  Vegetarian: "border-link text-link",
};

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex gap-5">
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden border border-border/40 md:w-28">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 768px) 7rem, 6rem"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-link">
            {item.code}
          </span>
          <span className="h-px flex-1 bg-border/40" aria-hidden="true" />
          <span className="font-display text-lg text-text">
            {formatPrice(item.price)}
          </span>
        </div>

        <h3 className="mt-1 font-display text-2xl leading-tight text-text">
          {item.english}
        </h3>
        <p className="mt-0.5 text-sm italic text-link">{item.vietnamese}</p>

        {item.description ? (
          <p className="mt-2 text-sm leading-relaxed text-text/75">
            {item.description}
          </p>
        ) : null}

        {item.tags && item.tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className={`border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] ${TAG_STYLE[tag]}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
