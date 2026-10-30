import Link from "next/link";
import { site } from "@/site.config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink-deep">
      <div className="container-edge py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label">{site.footer.copyright}</span>
            <p className="display-lg mt-6 max-w-[14ch] font-display">
              {site.footer.bigLine}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.brand.email}`}
              className="font-display text-2xl tracking-tight line-hover w-fit"
              data-cursor="hover"
            >
              {site.brand.email}
            </a>
            <div className="flex flex-wrap gap-5 pt-2">
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
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="label line-hover">
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="label">
            © {new Date().getFullYear()} {site.brand.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
