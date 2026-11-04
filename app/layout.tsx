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
    default: "Astodigi — Studio Website, Aplikasi Web & Produk Digital",
    template: `%s — ${site.brand.name}`,
  },
  description: "Studio digital untuk individu, UMKM, startup, PT/CV, dan organisasi. Kami merancang dan membangun website, aplikasi web, dan produk digital dari struktur sampai peluncuran.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    locale: "id_ID",
    title: "Astodigi — Studio Website, Aplikasi Web & Produk Digital",
    description: "Studio digital untuk individu, UMKM, startup, PT/CV, dan organisasi.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astodigi — Studio Website, Aplikasi Web & Produk Digital",
    description: "Studio digital untuk individu, UMKM, startup, PT/CV, dan organisasi.",
  },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Astodigi",
  url: "https://astodigi.com",
  description: "Studio digital yang merancang dan membangun website, aplikasi web, dan produk digital.",
  email: site.brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address,
    addressCountry: "ID",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService).replace(/</g, "\\u003c") }} />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
