import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lihat karya Astodigi, termasuk landing page SaaS Golfer dan website profil Pristinz, serta Demo Concept untuk beragam kebutuhan bisnis.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return <WorksClient />;
}
