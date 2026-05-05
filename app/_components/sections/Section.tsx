import { withHref } from "@/app/_lib/base-path";
import { ParallaxImage } from "../ParallaxImage";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  imageAlt?: string;
  overlay?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
  priority?: boolean;
};

export function Section({
  id,
  eyebrow,
  eyebrowClassName,
  title,
  description,
  image,
  imageAlt = "",
  overlay = "bg-dark/55",
  align = "center",
  children,
  priority = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden text-bg"
    >
      <ParallaxImage src={image} alt={imageAlt} priority={priority} />
      <div className={`absolute inset-0 -z-10 ${overlay}`} />

      <div
        className={[
          "mx-auto w-full max-w-3xl px-6 py-32 md:py-40",
          align === "center" ? "text-center" : "text-left",
        ].join(" ")}
      >
        {eyebrow ? (
          <p
            className={[
              "mb-6 uppercase tracking-[0.4em] text-bg/80",
              eyebrowClassName ?? "text-[11px]",
            ].join(" ")}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          {title}
        </h2>
        {description ? (
          <div className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bg/85 md:text-lg">
            {description}
          </div>
        ) : null}
        {children ? (
          <div
            className={[
              "mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm lowercase tracking-[0.25em]",
              align === "center" ? "justify-center" : "justify-start",
            ].join(" ")}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={withHref(href)}
      className="inline-flex items-center gap-2 rounded-none border border-bg/70 bg-transparent px-6 py-2 transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:border-accent hover:bg-accent hover:text-bg"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
