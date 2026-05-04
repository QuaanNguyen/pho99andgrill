"use client";

import { useEffect, useState } from "react";

export type ScrollState = {
  hidden: boolean;
};

type Options = {
  /** px scrolled before the bar may hide at all. */
  minScroll?: number;
  /** ignored scroll movements smaller than this (px). */
  delta?: number;
};

/**
 * Returns whether the header should be hidden, based on scroll direction.
 *
 * Behaviour:
 *  - At/near the top of the page: always shown.
 *  - Scrolling **down** past `minScroll`: hide.
 *  - Scrolling **up** by more than `delta`: show.
 *  - Otherwise: keep the current state (no flicker on tiny jitter).
 */
export function useScrollDirection({
  minScroll = 120,
  delta = 6,
}: Options = {}): ScrollState {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const diff = y - lastY;

      if (Math.abs(diff) < delta) return;

      if (y <= minScroll) {
        setHidden(false);
      } else if (diff > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minScroll, delta]);

  return { hidden };
}
