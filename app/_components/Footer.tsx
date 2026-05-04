export function Footer() {
  return (
    <footer className="bg-dark text-bg/80">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-4xl text-bg">
            phở<span className="ml-1 text-accent">99</span>{" "}
            <span className="text-2xl tracking-[0.3em] text-bg/60">grill</span>
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bg/70">
            A small family kitchen serving 24-hour broth phở, charcoal-grilled meats,
            and herb-forward Vietnamese plates.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">visit</p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            123 Lantern Street
            <br />
            Suite 99
            <br />
            Your City, ST 00000
          </address>
          <p className="mt-4 text-sm">
            <a href="tel:+15555555555" className="hover:text-accent">
              (555) 555-5555
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">hours</p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>tue – fri · 11a – 9p</li>
            <li>sat · 10a – 10p</li>
            <li>sun brunch · 10a – 3p</li>
            <li>mon · closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs lowercase tracking-[0.25em] text-bg/50 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} pho 99 grill</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-accent">
                instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                press
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
