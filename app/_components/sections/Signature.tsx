"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { withAssetPath } from "@/app/_lib/base-path";
import { SectionLink } from "./Section";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
};

const slides: Slide[] = [
  {
    src: withAssetPath("/food/pho-dac-biet.jpg"),
    alt: "Close-up of a special bowl of pho with multiple toppings",
    eyebrow: "the signature bowl",
    title: <span className="italic">phở đặc biệt</span>,
    description:
      "Our house bowl: 24-hour broth, hand-pulled rice noodles, brisket, rare eye of round, tendon, and meatball, finished tableside with thai basil, lime, and a charred chili nuoc cham. The dish we open the kitchen for every morning.",
  },
  {
    src: withAssetPath("/food/bo-ne-dac-biet.jpg"),
    alt: "Sizzling cast-iron plate of bò né with steak, egg, and pâté",
    eyebrow: "from the grill",
    title: <span className="italic">bò né đặc biệt</span>,
    description:
      "[placeholder] Sizzling cast-iron plate: garlic-marinated steak, runny egg, house pâté, jambon, and a meatball, served with toasted baguette to scoop every last drop.",
  },
  {
    src: withAssetPath("/food/com-chien.jpg"),
    alt: "Plate of Vietnamese fried rice",
    eyebrow: "from the wok",
    title: <span className="italic">cơm chiên</span>,
    description:
      "[placeholder] Wok-fried jasmine rice with chinese sausage, shrimp, egg, and scallion — fast heat, no compromise. A late-shift staff favorite.",
  },
];

const AUTO_ADVANCE_MS = 10_000;
const PARALLAX_INTENSITY = 0.35;

export function Signature() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    restartTimer();
    const onVisibility = () => {
      if (document.visibilityState === "visible") restartTimer();
      else if (timerRef.current) clearInterval(timerRef.current);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [restartTimer]);

  useEffect(() => {
    const wrapper = parallaxRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      const translate = -centerOffset * PARALLAX_INTENSITY;
      wrapper.style.transform = `translate3d(0, ${translate}px, 0)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const onUserNavigate = (action: () => void) => () => {
    action();
    restartTimer();
  };

  const current = slides[index];

  return (
    <section
      ref={sectionRef}
      id="signature"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden text-bg"
    >
      <div
        ref={parallaxRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[30%] -z-20 h-[160%] w-full will-change-transform"
      >
        <div
          className="flex h-full w-full transition-transform duration-700 [transition-timing-function:var(--ease-uchi)]"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {slides.map((s, i) => (
            <div key={s.src} className="relative h-full w-full shrink-0">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-dark/45" />

      <button
        type="button"
        onClick={onUserNavigate(goPrev)}
        aria-label="previous dish"
        className="group absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-bg/90 transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg/60 md:flex md:left-8 md:h-12 md:w-12"
      >
        <svg
          aria-hidden
          className="h-7 w-7 md:h-8 md:w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onUserNavigate(goNext)}
        aria-label="next dish"
        className="group absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-bg/90 transition-colors duration-300 [transition-timing-function:var(--ease-uchi)] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg/60 md:flex md:right-8 md:h-12 md:w-12"
      >
        <svg
          aria-hidden
          className="h-7 w-7 md:h-8 md:w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="mx-auto w-full max-w-3xl px-6 py-32 text-center md:py-40">
        <p
          key={`eyebrow-${index}`}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-bg/80 md:text-sm"
        >
          {current.eyebrow}
        </p>
        <h2
          key={`title-${index}`}
          className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          {current.title}
        </h2>
        <div
          key={`desc-${index}`}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bg/85 md:text-lg"
        >
          {current.description}
        </div>

        <ol
          aria-label="carousel progress"
          className="mt-10 flex items-center justify-center"
        >
          {slides.map((s, i) => (
            <li key={s.src} className="flex items-center">
              <button
                type="button"
                onClick={onUserNavigate(() => goTo(i))}
                aria-label={`show slide ${i + 1} of ${slides.length}`}
                aria-current={i === index ? "true" : undefined}
                className={[
                  "h-2 w-2 rounded-full transition-colors duration-300 [transition-timing-function:var(--ease-uchi)]",
                  i === index
                    ? "bg-accent"
                    : "bg-bg/50 hover:bg-bg/80",
                ].join(" ")}
              />
              {i < slides.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="mx-2 h-px w-8 bg-bg/40 md:w-12"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm lowercase tracking-[0.25em]">
          <SectionLink href="/menu">see the menu</SectionLink>
        </div>
      </div>
    </section>
  );
}
