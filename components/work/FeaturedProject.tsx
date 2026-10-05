import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { resolveProjectImages } from "@/lib/project-images";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/work/ProjectImage";
import { SpecList } from "@/components/work/Spec";

function ProjectLabel({ num, title }: { num: string; title: string }) {
  return (
    <p className="t-meta text-fg/65">
      <span className="text-accent">Project {num}</span> / {title}
    </p>
  );
}

type Props = {
  project: Project;
  /** 1-based number shown as "01 / ZKR Coffee". */
  index: number;
  layout: "wide" | "split";
  headingLevel?: "h2" | "h3";
};

/**
 * Two compositions so the pair reads as curated work, not a card grid:
 *  - "wide":  full-width cover, text in columns underneath.
 *  - "split": oversized title left, cover right.
 * Colours come from tokens, so wrapping this in `.surface-dark` is all a dark treatment needs.
 */
export function FeaturedProject({ project, index, layout, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const { cover } = resolveProjectImages(project);
  const href = `/work/${project.slug}`;
  const num = String(index).padStart(2, "0");
  const fallback = { index: num, category: project.category, hint: `public/projects/${project.slug}/cover.webp` };

  const specs = [
    { label: "Role", value: project.role?.join(" · ") ?? null },
    { label: "Stack", value: project.stack.length ? project.stack.join(" · ") : null },
    { label: "Status", value: project.status },
  ];

  const cta = (
    <Link href={href} className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold">
      View case study<span className="sr-only"> for {project.title}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden />
    </Link>
  );

  // The cover is a link too (mouse users); keyboard/AT users get the text link, so this one is skipped.
  const coverLink = (aspect: string, sizes: string) => (
    <Link href={href} tabIndex={-1} aria-hidden className="group relative block">
      <CoverImage image={cover} fallback={fallback} aspect={aspect} sizes={sizes} />
      <span className="t-meta pointer-events-none absolute bottom-0 left-0 translate-y-full bg-bg px-4 py-2.5 text-fg transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none">
        View case study →
      </span>
    </Link>
  );

  // Size first, line-height last: tailwind-merge drops an earlier `leading-*` when a `text-[…]` size follows it.
  const titleCls = cn(
    layout === "wide" ? "text-[clamp(2.4rem,5.6vw,5rem)]" : "text-[clamp(2.4rem,4.8vw,4.25rem)]",
    "font-display leading-[0.96]"
  );

  if (layout === "wide") {
    return (
      <article aria-labelledby={`p-${project.slug}`}>
        <ProjectLabel num={num} title={project.title} />
        <Reveal variant="image" className="mt-5">
          {coverLink("aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]", "(min-width: 1536px) 1408px, (min-width: 1280px) 1216px, 100vw")}
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Heading id={`p-${project.slug}`} className={titleCls}>
              {project.title}
            </Heading>
            <p className="t-meta mt-4 text-fg/65">{project.category}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <p className="max-w-[44ch] text-lg leading-relaxed text-fg/85">{project.description}</p>
            <div className="mt-6">{cta}</div>
          </Reveal>
          <Reveal delay={0.16} className="lg:col-span-3">
            <SpecList items={specs} />
          </Reveal>
        </div>
      </article>
    );
  }

  return (
    <article aria-labelledby={`p-${project.slug}`} className="grid items-end gap-12 lg:grid-cols-12 lg:gap-14">
      <div className="order-2 lg:order-1 lg:col-span-5">
        <ProjectLabel num={num} title={project.title} />
        <Reveal>
          <Heading id={`p-${project.slug}`} className={cn(titleCls, "mt-6")}>
            {project.title}
          </Heading>
          <p className="t-meta mt-4 text-fg/65">{project.category}</p>
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-fg/85">{project.description}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-md">
          <SpecList items={specs} />
          <div className="mt-6">{cta}</div>
        </Reveal>
      </div>
      <Reveal variant="image" className="order-1 lg:order-2 lg:col-span-7">
        {coverLink("aspect-[16/10]", "(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw")}
      </Reveal>
    </article>
  );
}
