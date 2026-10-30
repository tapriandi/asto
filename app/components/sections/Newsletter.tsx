"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/app/components/primitives/Reveal";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="border-t border-line bg-ink-deep py-[var(--spacing-section)]">
      <div className="container-edge">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="label">( _Newsletter )</span>
              <p className="display-md mt-6 max-w-[20ch] font-display">
                Occasional notes on design, code and shipping.
              </p>
            </div>

            {/* ponytail: no backend yet — swap for a real endpoint when one exists. */}
            <form
              className="flex w-full max-w-md items-center gap-4 border-b border-line pb-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label htmlFor="newsletter-email" className="label sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={sent ? "Thanks — you're on the list." : "your@email.com"}
                disabled={sent}
                className="w-full bg-transparent py-2 text-lg outline-none placeholder:text-muted disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={sent}
                className="label whitespace-nowrap text-bone transition-opacity hover:opacity-70 disabled:opacity-40"
                data-cursor="hover"
              >
                {sent ? "Done" : "Subscribe →"}
              </button>
            </form>
          </div>

          <Link
            href="/contact"
            className="mt-16 inline-flex items-center gap-4 text-4xl tracking-tight md:text-6xl"
            data-cursor="hover"
          >
            <span className="line-hover">Start a project</span>
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
