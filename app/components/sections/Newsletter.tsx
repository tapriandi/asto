"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const whatsapp = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent("Halo Astodigi, saya ingin diskusi website untuk bisnis saya.")}`;

  return (
    <section className="border-t border-line py-[var(--section-gap)]" id="kontak">
      <div className="site-shell">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end">
            <div>
              <span className="label">( MULAI )</span>
              <h2 className="display-section mt-5 max-w-[16ch]">Siap mulai dari halaman yang paling penting?</h2>
            </div>
            <div className="md:text-right">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="display-lead line-hover" data-cursor="hover">
                Diskusi via WhatsApp ↗
              </a>
              <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-muted-2 md:ml-auto">
                Kami balas dengan arah pengerjaan, daftar kebutuhan, dan estimasi durasi. Diskusi awal tidak dikenakan biaya.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-20 max-w-[46ch] text-sm leading-relaxed text-muted-2">
            Belum siap sekarang? Tinggalkan email — kami kirim panduan singkat menyiapkan website bisnis.
          </p>
          <form
            className="mt-5 flex max-w-[38rem] items-center gap-5 border-b border-line pb-3"
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
              placeholder={sent ? "Terima kasih — email tercatat." : "Email Anda"}
              className="w-full bg-transparent py-2 text-lg outline-none placeholder:text-muted"
            />
            <button type="submit" disabled={sent} className="label whitespace-nowrap text-fg disabled:opacity-40">
              {sent ? "Terkirim" : "Kirim →"}
            </button>
          </form>
        </Reveal>

        <Link href="/works" className="mt-16 inline-flex items-center gap-4 text-2xl line-hover" data-cursor="hover">
          Lihat Demo Concept ↗
        </Link>
      </div>
    </section>
  );
}
