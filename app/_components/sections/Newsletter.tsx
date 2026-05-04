"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="newsletter"
      className="relative flex min-h-[70vh] w-full items-center bg-cream py-24"
    >
      <div className="mx-auto w-full max-w-2xl px-6 text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-link">
          stay in the bowl
        </p>
        <h2 className="font-display text-4xl leading-tight text-text md:text-6xl">
          don&rsquo;t miss a delicious bite.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-text/75">
          Pop-up dinners, new menu drops, and the occasional broth recipe — once a month,
          never more.
        </p>

        {submitted ? (
          <p className="mt-10 font-display text-2xl text-accent">
            thank you — see you soon.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              className="flex-1 border border-border/70 bg-bg px-4 py-3 text-sm text-text placeholder:text-link/70 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="border border-border bg-text px-6 py-3 text-sm lowercase tracking-wide text-bg transition-colors duration-300 hover:bg-accent hover:border-accent [transition-timing-function:var(--ease-uchi)]"
            >
              subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
