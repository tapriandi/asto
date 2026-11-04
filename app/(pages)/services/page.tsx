import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Layanan — Website, E-commerce & Aplikasi Web",
  description: "Layanan Astodigi: website bisnis, e-commerce, aplikasi web, aplikasi mobile, maintenance, interactive 3D, dan produk digital.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell">
        <Reveal>
          <span className="label">( _03 ) Services</span>
          <h1 className="display-section mt-6 max-w-[13ch]">Website yang bekerja untuk bisnis Anda.</h1>
        </Reveal>
        <div className="mt-20 divide-y divide-line border-y border-line">
          {site.services.map((service, i) => (
            <Reveal key={service.no} delay={i * 0.03}>
              <article className="grid gap-8 py-8 md:grid-cols-[5rem_1fr_1fr_12rem] md:items-center">
                <span className="label">({service.no})</span>
                <div>
                  <h2 className="text-2xl font-medium">{service.title}</h2>
                  <p className="mt-3 max-w-[42ch] text-muted-2">{service.desc}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-2"><span className="label">Cocok untuk</span><br />{service.fit}</p>
                <Image src={service.image} alt="" width={192} height={128} className="hidden aspect-[3/2] w-full object-cover md:block" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
