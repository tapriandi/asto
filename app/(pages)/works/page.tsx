import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Demo Concept — Contoh Karya Astodigi",
  description:
    "Enam Demo Concept Astodigi: website UMKM, toko online, healthcare, undangan digital, aplikasi manajemen, dan pengalaman 3D.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return <WorksClient />;
}
