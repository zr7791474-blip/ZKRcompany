import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { resolveProjectImages } from "@/lib/project-images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CoverImage } from "@/components/work/ProjectImage";
import { SpecList } from "@/components/work/Spec";

type Props = {
  project: Project;
  /** 1-based number shown as "01 / ZKR Coffee". */
  index: number;
  layout: "wide" | "split";
  dark?: boolean;
  headingLevel?: "h2" | "h3";
};

/**
 * Two compositions so the pair reads as curated work, not a card grid:
 *  - "wide":  full-width cover, text in columns underneath.
 *  - "split": tall cover on the right, oversized title on the left.
 */
export function FeaturedProject({ project, index, layout, dark, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const { cover } = resolveProjectImages(project);
  const href = `/work/${project.slug}`;
  const num = String(index).padStart(2, "0");
  const hint = `public/projects/${project.slug}/cover.webp`;

  const specs = [
    { label: "Role", value: project.role?.join(" · ") ?? null },
    { label: "Stack", value: project.stack.length ? project.stack.join(" · ") : null },
    { label: "Status", value: project.status },
  ];

  const cta = (
    <Link
      href={href}
      className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold"
    >
      View case study<span className="sr-only"> for {project.title}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );

  const titleCls = cn(
    "font-display font-semibold leading-[0.95]",
    layout === "wide" ? "text-[clamp(2.75rem,7vw,6rem)]" : "text-[clamp(2.75rem,6vw,5.25rem)]"
  );

  if (layout === "wide") {
    return (
      <article aria-labelledby={`p-${project.slug}`}>
        <SectionLabel index={num} dark={dark}>
          {project.title}
        </SectionLabel>
        <Reveal variant="image" className="mt-5">
          <Link href={href} tabIndex={-1} aria-hidden className="block">
            <CoverImage
              image={cover}
              hint={hint}
              dark={dark}
              aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]"
              sizes="(min-width: 1536px) 1408px, (min-width: 1280px) 1216px, 100vw"
            />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Heading id={`p-${project.slug}`} className={titleCls}>
              {project.title}
            </Heading>
            <p className="mt-4 font-mono text-xs opacity-70">{project.category}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <p className="max-w-[44ch] text-lg leading-relaxed">{project.description}</p>
            <div className="mt-6">{cta}</div>
          </Reveal>
          <Reveal delay={0.16} className="lg:col-span-3">
            <SpecList items={specs} dark={dark} />
          </Reveal>
        </div>
      </article>
    );
  }

  return (
    <article aria-labelledby={`p-${project.slug}`} className="grid items-end gap-12 lg:grid-cols-12 lg:gap-14">
      <div className="order-2 lg:order-1 lg:col-span-5">
        <SectionLabel index={num} dark={dark}>
          {project.title}
        </SectionLabel>
        <Reveal>
          <Heading id={`p-${project.slug}`} className={cn(titleCls, "mt-6")}>
            {project.title}
          </Heading>
          <p className="mt-4 font-mono text-xs opacity-70">{project.category}</p>
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed">{project.description}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-md">
          <SpecList items={specs} dark={dark} />
          <div className="mt-6">{cta}</div>
        </Reveal>
      </div>
      <Reveal variant="image" className="order-1 lg:order-2 lg:col-span-7">
        <Link href={href} tabIndex={-1} aria-hidden className="block">
          <CoverImage
            image={cover}
            hint={hint}
            dark={dark}
            aspect="aspect-[4/3] lg:aspect-[5/6]"
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw"
          />
        </Link>
      </Reveal>
    </article>
  );
}
