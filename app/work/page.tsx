import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedProject } from "@/components/work/FeaturedProject";
import { projects } from "@/lib/projects";

const description =
  "Selected work by Zakariaa Adli (ZKR): ZKR Coffee and ZKR Festival, two projects designed and built end to end.";

export const metadata: Metadata = pageMeta({ title: "Work", description: description, path: "/work" });

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="01 / Selected work"
        title="Two projects, shown properly."
        description="Each one has its own case study. I designed and built both."
      />
      <Container className="py-20 sm:py-28">
        <FeaturedProject project={projects[0]} index={1} layout="wide" headingLevel="h2" />
      </Container>
      <div className="surface-dark bg-night text-paper">
        <Container className="py-20 sm:py-28">
          <FeaturedProject project={projects[1]} index={2} layout="split" dark headingLevel="h2" />
        </Container>
      </div>
    </>
  );
}
