import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CoverImage, NaturalImage } from "@/components/work/ProjectImage";
import { SpecList, todoValue } from "@/components/work/Spec";
import { getProject, projects, type Project } from "@/lib/projects";
import { resolveProjectImages, type ProjectImages } from "@/lib/project-images";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

export const dynamicParams = false; // unknown slugs → 404

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/work/${project.slug}`;
  const title = `${project.title} — ${project.category}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    // Share image: work/[slug]/opengraph-image.tsx (file convention, picked up automatically).
    openGraph: { type: "article", url, title: `${project.title} | ZKR`, description: project.description, siteName: "ZKR" },
    twitter: { card: "summary_large_image", site: site.twitterHandle, title: `${project.title} | ZKR`, description: project.description },
    other: { "og:image:alt": title },
  };
}

const isDev = process.env.NODE_ENV !== "production";

const SECTIONS: { key: keyof Project; title: string }[] = [
  { key: "overview", title: "Overview" },
  { key: "challenge", title: "The challenge" },
  { key: "approach", title: "The approach" },
  { key: "decisions", title: "Key decisions" },
  { key: "built", title: "What I built" },
  { key: "technical", title: "Technical details" },
  { key: "outcome", title: "Outcome" },
];

function Prose({ text, big }: { text: string; big?: boolean }) {
  return (
    <div className={cn(big ? "text-xl" : "text-lg text-night/85", "flex max-w-[62ch] flex-col gap-4 leading-relaxed")}>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function WriteUps({ project, energetic }: { project: Project; energetic: boolean }) {
  const filled = SECTIONS.filter((s) => typeof project[s.key] === "string" && (project[s.key] as string).trim());
  const missing = SECTIONS.filter((s) => s.key !== "outcome" && !filled.includes(s));

  if (filled.length === 0) {
    return (
      <p className={cn("max-w-[56ch] text-lg", energetic ? "text-paper/80" : "text-night/80")}>
        The full write-up for this project is coming soon.
        {isDev && (
          <span className="mt-3 block font-mono text-xs text-red-bright">
            [fill any of: {missing.map((m) => m.key).join(", ")}, outcome — in lib/projects.ts. Sections appear automatically.]
          </span>
        )}
      </p>
    );
  }
  return (
    <div>
      {filled.map((s, i) => (
        <section
          key={s.key}
          className={cn(
            "grid gap-5 border-t py-10 md:grid-cols-12 md:gap-10",
            energetic ? "border-paper/20 md:py-14" : "border-night/20"
          )}
        >
          <h2
            className={cn(
              "md:col-span-4",
              energetic ? "text-3xl font-semibold sm:text-5xl" : "text-2xl font-semibold"
            )}
          >
            {energetic && <span className="mb-3 block font-mono text-xs font-normal text-blue">{String(i + 1).padStart(2, "0")}</span>}
            {s.title}
          </h2>
          <div className="md:col-span-8">
            <Reveal>
              <Prose text={project[s.key] as string} big={energetic} />
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}

function MobilePair({ images, dark }: { images: ProjectImages["mobile"]; dark?: boolean }) {
  const [m1, m2] = images;
  if (!m1 && !m2) return null;
  const sizes = "(min-width: 1024px) 300px, 45vw";
  return (
    <div className="grid max-w-xl grid-cols-2 gap-4 sm:gap-8 lg:col-span-6 lg:col-start-2">
      {m1 && (
        <Reveal variant="image">
          <NaturalImage image={m1} dark={dark} sizes={sizes} />
        </Reveal>
      )}
      {m2 && (
        <Reveal variant="image" delay={0.1} className="mt-12">
          <NaturalImage image={m2} dark={dark} sizes={sizes} />
        </Reveal>
      )}
    </div>
  );
}

/** Warm: calm, alternating left/right placement with generous space between screenshots. */
function WarmGallery({ images }: { images: ProjectImages }) {
  if (images.desktop.length + images.mobile.length === 0) return null;
  return (
    <section aria-label="Screenshots" className="py-16 sm:py-24">
      <div className="grid gap-y-12 sm:gap-y-16 lg:grid-cols-12">
        {images.desktop.map((img, i) => (
          <Reveal
            key={img.src}
            variant="image"
            className={i % 2 === 0 ? "lg:col-span-9" : "lg:col-span-9 lg:col-start-4"}
          >
            <NaturalImage image={img} sizes="(min-width: 1280px) 912px, (min-width: 1024px) 75vw, 100vw" />
          </Reveal>
        ))}
        <MobilePair images={images.mobile} />
      </div>
    </section>
  );
}

/** Energetic: larger scale, staggered, with each screenshot cutting into the previous one. */
function EnergeticGallery({ images }: { images: ProjectImages }) {
  if (images.desktop.length + images.mobile.length === 0) return null;
  return (
    <section aria-label="Screenshots" className="py-16 sm:py-28">
      <div className="grid grid-cols-12 gap-y-8">
        {images.desktop.map((img, i) => (
          <Reveal
            key={img.src}
            variant="image"
            className={
              i === 0
                ? "col-span-12 lg:col-span-11"
                : i % 2 === 1
                  ? "relative z-10 col-span-11 col-start-2 lg:col-span-9 lg:col-start-4 lg:-mt-24"
                  : "relative z-10 col-span-11 lg:col-span-10 lg:-mt-24"
            }
          >
            <NaturalImage
              image={img}
              dark
              sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 80vw, 100vw"
              className={i === 0 ? "" : "outline outline-[10px] outline-night"}
            />
          </Reveal>
        ))}
        <MobilePair images={images.mobile} dark />
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const energetic = project.variant === "energetic";
  const images = resolveProjectImages(project);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const num = String(index + 1).padStart(2, "0");
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${site.url}/work/${project.slug}`,
    author: { "@type": "Person", name: site.founder, url: site.url },
    ...(images.cover ? { image: `${site.url}${images.cover.src}` } : {}),
  };

  const links = [
    project.liveUrl && { href: project.liveUrl, label: "View live project" },
    project.githubUrl && { href: project.githubUrl, label: "View source on GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];

  const spec = [
    { label: "Category", value: project.category },
    { label: "Role", value: project.role?.join(" · ") ?? todoValue("role") },
    { label: "Stack", value: project.stack.length ? project.stack.join(" · ") : todoValue("stack") },
    { label: "Status", value: project.status },
    { label: "Year", value: project.year ?? null },
  ];

  return (
    <div className={cn(energetic ? "surface-dark bg-night text-paper" : "bg-paper text-night")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* ---- Header ---- */}
      <header className={cn(energetic ? "pt-14 pb-12 sm:pt-20" : "pt-14 pb-14 sm:pt-24 sm:pb-20")}>
        <Container>
          <nav aria-label="Breadcrumb" className="font-mono text-xs opacity-70">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/work" className="u-link">
                  Work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page">{project.title}</li>
            </ol>
          </nav>

          <SectionLabel index={num} dark={energetic} className="mt-10">
            {project.title}
          </SectionLabel>

          {energetic ? (
            <h1 className="mt-4 text-[clamp(3.5rem,14vw,12rem)] font-semibold leading-[0.84] tracking-[-0.055em]">
              ZKR
              <br />
              <span className="text-blue">Festival</span>
            </h1>
          ) : (
            <h1 className="mt-4 text-[clamp(3.25rem,11vw,9.5rem)] font-semibold leading-[0.9]">{project.title}</h1>
          )}

          <p className={cn(energetic ? "text-xl text-paper/85 sm:text-2xl" : "text-xl text-night/80", "mt-8 max-w-[44ch] leading-relaxed")}>
            {project.description}
          </p>
        </Container>
      </header>

      {/* ---- Hero ---- */}
      {energetic ? (
        <div>
          <CoverImage
            image={images.cover}
            dark
            zoom={false}
            priority
            fallback={{ index: num, category: project.category, hint: `public/projects/${project.slug}/cover.webp` }}
            aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.2/1]"
            sizes="100vw"
            className="border-x-0"
          />
        </div>
      ) : (
        <Container>
          <CoverImage
            image={images.cover}
            zoom={false}
            priority
            fallback={{ index: num, category: project.category, hint: `public/projects/${project.slug}/cover.webp` }}
            aspect="aspect-[4/3] sm:aspect-[16/9]"
            sizes="(min-width: 1536px) 1408px, (min-width: 1280px) 1216px, 100vw"
          />
        </Container>
      )}

      {/* ---- Spec + write-up ---- */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SpecList items={spec} dark={energetic} />
              {links.length > 0 && (
                <ul className="mt-6 flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link inline-flex min-h-11 items-center gap-2 font-semibold"
                      >
                        {l.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
          <div className="lg:col-span-8">
            <WriteUps project={project} energetic={energetic} />
          </div>
        </div>
      </Container>

      {/* ---- Screens ---- */}
      <Container>{energetic ? <EnergeticGallery images={images} /> : <WarmGallery images={images} />}</Container>

      {/* ---- Next project + CTA ---- */}
      <section className={cn("border-t", energetic ? "border-paper/20" : "border-night/20")}>
        <Container className="grid gap-14 py-20 sm:py-28 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs opacity-70">Next project</p>
            <Link
              href={`/work/${next.slug}`}
              className="u-link group mt-4 inline-flex items-center gap-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none"
            >
              {next.title}
              <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <p className="mt-3 font-mono text-xs opacity-70">{next.category}</p>
          </div>
          <div>
            <p className="font-mono text-xs opacity-70">Working with me</p>
            <p className="mt-4 max-w-[34ch] font-display text-3xl font-semibold leading-tight">
              You work directly with the person who designs and builds the product.
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Start a project
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
