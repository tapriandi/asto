"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const whatsapp = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent("Halo AstoDigi, saya ingin diskusi website untuk bisnis saya.")}`;

  return (
    <section className="border-t border-line py-[var(--spacing-section)]">
      <div className="site-shell">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end">
            <div>
              <span className="label">( LET&apos;S TALK )</span>
              <h2 className="display-lg mt-5 max-w-[11ch]">Mari buat bisnis Anda terlihat.</h2>
            </div>
            <div className="md:text-right">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="display-md line-hover" data-cursor="hover">
                Diskusi via WhatsApp ↗
              </a>
              <p className="label mt-4 max-w-[30rem] md:ml-auto">
                Nomor WhatsApp masih placeholder. Ganti `site.brand.whatsapp` sebelum rilis.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            className="mt-20 flex max-w-[38rem] items-center gap-5 border-b border-line pb-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (email) setSent(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={sent}
              placeholder={sent ? "Email tercatat di perangkat ini." : "Email untuk follow-up"}
              className="w-full bg-transparent py-2 text-lg outline-none placeholder:text-muted"
            />
            <button type="submit" disabled={sent} className="label whitespace-nowrap text-bone disabled:opacity-40">
              {sent ? "Done" : "Send →"}
            </button>
          </form>
        </Reveal>

        <Link href="/works" className="mt-16 inline-flex items-center gap-4 text-2xl line-hover" data-cursor="hover">
          Lihat project concepts ↗
        </Link>
      </div>
    </section>
  );
}
