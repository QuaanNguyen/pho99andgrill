import type { ReactNode } from "react";

type Props = {
  label?: string;
  caption?: ReactNode;
};

export function SectionBreak({ label, caption }: Props) {
  return (
    <div
      role="separator"
      aria-hidden={label || caption ? undefined : true}
      aria-label={[label, typeof caption === "string" ? caption : undefined].filter(Boolean).join(". ") || undefined}
      className="bg-bg"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-6 py-12 md:gap-6 md:py-16">
        <div className="flex w-full items-center gap-6">
          <span className="h-px flex-1 bg-border/60" />
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-link">
            <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-accent" />
            {label ?? "phở 99"}
            <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-accent" />
          </span>
          <span className="h-px flex-1 bg-border/60" />
        </div>
        {caption != null ? (
          <p className="max-w-xl text-center font-sans text-sm leading-relaxed tracking-normal text-link normal-case md:text-base md:leading-relaxed">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
