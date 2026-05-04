import { BrandLogo } from "@/app/_components/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-dark text-bg/80">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <BrandLogo alt="Pho 99 & Grill" className="h-[72px] w-auto md:h-[84px]" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bg/70">
            From Saigon to Cypress — the recipes our family cooked in Vietnam,
            now poured and grilled the way they&apos;re supposed to taste.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">visit</p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            6073 Highway 6 N, Houston, TX 77084
            <br />
            Houston, TX 77084
          </address>
          <p className="mt-4 text-sm">
            <a href="tel:+13614273744" className="hover:text-accent">
              (361) 427-3744
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">hours</p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>mon – fri · 9:30a – 8:30p</li>
            <li>sat · 9:30a – 8:30p</li>
            <li>sun · 9:30a – 8:30p</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs lowercase tracking-[0.25em] text-bg/50 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} pho 99 &amp; grill</p>
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
