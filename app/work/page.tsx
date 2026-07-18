import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of recent ZKR projects across web platforms, e-commerce, branding, and product design.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Projects built for real outcomes, not just screenshots."
        description="A sample of recent client work — each one shipped, measured, and iterated on after launch."
      />
      <WorkClient />
    </>
  );
}
