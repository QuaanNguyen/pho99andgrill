"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  /** 0 = image scrolls with the page, 1 = image stays put. ~0.3 is the Avalaun feel. */
  intensity?: number;
};

export function ParallaxImage({ src, alt, priority, intensity = 0.35 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const section = wrapper.parentElement;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh || rect.top > vh * 2) return;

      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      const translate = -centerOffset * intensity;
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
  }, [intensity]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-[30%] -z-20 h-[160%] w-full will-change-transform"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
