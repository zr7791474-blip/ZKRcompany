import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeaturedProject } from "@/components/work/FeaturedProject";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <Container className="pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="01">Work</SectionLabel>
            <Reveal>
              <h2 id="work-heading" className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none">
                Selected work
              </h2>
              <p className="mt-4 text-lg text-night/70">02 projects I&apos;ve designed and built.</p>
            </Reveal>
          </div>
          <Link href="/work" className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold">
            All work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="mt-16">
          <FeaturedProject project={projects[0]} index={1} layout="wide" />
        </div>
      </Container>

      {/* Full-bleed dark band so the second project has a different composition and atmosphere. */}
      <div className="surface-dark bg-night text-paper">
        <Container className="py-24 sm:py-32">
          <FeaturedProject project={projects[1]} index={2} layout="split" dark />
        </Container>
      </div>
    </section>
  );
}
