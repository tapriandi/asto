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
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-bg/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="site-shell flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="font-display text-xl tracking-tight" aria-label={`${site.brand.name} home`} data-cursor="hover">
          {site.brand.mark}
        </Link>
        <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="label line-hover" data-active={pathname === item.href ? "true" : undefined} data-cursor="hover">
              ( _{item.no} ) {item.label}
            </Link>
          ))}
        </nav>
        <a href={`mailto:${site.brand.email}`} className="hidden text-sm line-hover xl:block" data-cursor="hover">{site.brand.email}</a>
        <button type="button" className="label lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="site-shell flex flex-col gap-5 border-t border-line py-6 lg:hidden" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="label">( _{item.no} ) {item.label}</Link>
          ))}
          <a href={`mailto:${site.brand.email}`} className="label text-fg">{site.brand.email}</a>
        </nav>
      ) : null}
    </header>
  );
}
