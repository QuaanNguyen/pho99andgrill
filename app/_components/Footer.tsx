import { BrandLogo } from "@/app/_components/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-dark text-bg/80">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="flex justify-center md:col-span-2">
          <BrandLogo alt="Pho 99 & Grill" className="h-[132px] w-auto md:h-[164px]" />
        </div>

        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-0 md:contents">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">visit</p>
            <address className="mt-4 not-italic text-sm leading-relaxed">
              6073 Highway 6 N
              <br />
              Houston, TX 77084
            </address>
            <p className="mt-4 text-sm">
              <a href="tel:+13614273744" className="hover:text-accent">
                (361) 427-3744
              </a>
            </p>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">hours</p>
            <ul className="mt-4 space-y-1 text-sm">
              <li>mon – tue · 10a – 9p</li>
              <li>wed · closed</li>
              <li>thu – sun · 10a – 9p</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-bg/50">find us</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6073+Highway+6+N%2C+Houston%2C+TX+77084"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open directions to Pho 99 & Grill in Google Maps"
            className="mt-4 block overflow-hidden rounded-sm border border-bg/15 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <iframe
              title="Map to Pho 99 & Grill, 6073 Highway 6 N, Houston, TX 77084"
              src="https://maps.google.com/maps?q=6073+Highway+6+N,+Houston,+TX+77084&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none h-64 w-full border-0 md:h-80"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs lowercase tracking-[0.25em] text-bg/50 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} pho 99 &amp; grill</p>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61572076649842"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
