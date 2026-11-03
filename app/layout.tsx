import type { Metadata } from "next";
import { Inter, Inter_Tight, Chivo_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/app/components/chrome/SiteHeader";
import SiteFooter from "@/app/components/chrome/SiteFooter";
import Cursor from "@/app/components/chrome/Cursor";
import SmoothScroll from "@/app/components/chrome/SmoothScroll";
import { site } from "@/site.config";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astodigi.com"),
  title: {
    default: `${site.brand.name} — Studio Digital untuk UMKM`,
    template: `%s — ${site.brand.name}`,
  },
  description: site.statement,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    locale: "id_ID",
    title: `${site.brand.name} — Studio Digital untuk UMKM`,
    description: site.statement,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} — Studio Digital untuk UMKM`,
    description: site.statement,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${interTight.variable} ${inter.variable} ${chivoMono.variable}`}
    >
      <body className="bg-bg text-fg">
        <SmoothScroll />
        <Cursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
