import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Hubungi Astodigi — Diskusi Kebutuhan Website",
  description:
    "Ceritakan kebutuhan website atau aplikasi web Anda. Kami balas dengan arah pengerjaan, daftar kebutuhan, dan estimasi durasi.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
