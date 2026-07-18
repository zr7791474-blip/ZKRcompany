import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on web strategy, engineering, design systems, SEO, and AI from the ZKR team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from projects we've actually shipped."
        description="Strategy, engineering, design, and SEO — written from real client work, not theory."
      />
      <section className="pb-28 sm:pb-36">
        <Container>
          <BlogGrid />
        </Container>
      </section>
    </>
  );
}
