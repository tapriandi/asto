import Link from "next/link";
import { site } from "@/site.config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div>
            <span className="label">AstoDigi / Studio digital</span>
            <a href={`mailto:${site.brand.email}`} className="mt-3 block font-display text-3xl tracking-tight line-hover md:text-5xl" data-cursor="hover">
              {site.brand.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="label line-hover">{item.label}</Link>
            ))}
            {site.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="label line-hover">{social.label}</a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-4 sm:flex-row">
          <span className="label">© {new Date().getFullYear()} {site.brand.name}. {site.footer.copyright}</span>
          <span className="label">{site.brand.location}</span>
        </div>
      </div>
    </footer>
  );
}
