import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PortfolioLink } from "@/components/ui/PortfolioLink";
import { ImagePlaceholder } from "@/components/work/ProjectImage";
import { resolveFounderPortrait } from "@/lib/project-images";
import { site } from "@/lib/content";

/** Portrait slot: shows public/founder/portrait.webp when present, otherwise a clean labelled frame. */
export function PortraitSlot({ className }: { className?: string }) {
  const portrait = resolveFounderPortrait(`Portrait of ${site.founder}`);
  if (portrait) {
    return (
      <Image
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height}
        sizes="(min-width: 1024px) 400px, 80vw"
        className={`h-auto w-full border border-night/20 ${className ?? ""}`}
      />
    );
  }
  return <ImagePlaceholder className={`aspect-[4/5] ${className ?? ""}`} hint="public/founder/portrait.webp" />;
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-night/15">
      <Container className="py-24 sm:py-32">
        <SectionLabel index="04">About ZKR</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="image" className="max-w-sm lg:col-span-4">
            <PortraitSlot />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <h2 id="about-heading" className="text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.02]">
              I&apos;m {site.founder}, the developer behind ZKR.
            </h2>
            <div className="mt-8 flex max-w-[54ch] flex-col gap-5 text-lg leading-relaxed text-night/80">
              <p>
                I started ZKR to work directly with businesses and founders who care about the quality of what they put
                online.
              </p>
              <p>
                I handle the design, development and deployment myself, so there are no account managers or unnecessary
                hand-offs.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:gap-8">
              <Link href="/about" className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold">
                Read more about me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <PortfolioLink />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
