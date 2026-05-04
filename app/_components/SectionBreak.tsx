type Props = {
  label?: string;
};

export function SectionBreak({ label }: Props) {
  return (
    <div
      role="separator"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className="bg-bg"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-6 px-6 py-12 md:py-16">
        <span className="h-px flex-1 bg-border/60" />
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-link">
          <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-accent" />
          {label ?? "phở 99"}
          <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-accent" />
        </span>
        <span className="h-px flex-1 bg-border/60" />
      </div>
    </div>
  );
}
