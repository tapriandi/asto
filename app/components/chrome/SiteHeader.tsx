"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/site.config";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      } border-b ${scrolled ? "border-line" : "border-transparent"}`}
    >
      <div className="container-edge flex items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="font-display text-lg tracking-tight"
          data-cursor="hover"
          aria-label={`${site.brand.name} home`}
        >
          {site.brand.mark}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="label line-hover"
                data-active={active ? "true" : undefined}
                data-cursor="hover"
              >
                <span className="text-muted">( {item.no} )</span> {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`mailto:${site.brand.email}`}
            className="label line-hover"
            data-cursor="hover"
          >
            {site.brand.email}
          </a>
          <span className="label text-line">/</span>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="label line-hover"
              data-cursor="hover"
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="label md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="container-edge flex flex-col gap-5 border-t border-line py-6 md:hidden"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="label">
              <span className="text-muted">( {item.no} )</span> {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.brand.email}`} className="label text-bone">
            {site.brand.email}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
