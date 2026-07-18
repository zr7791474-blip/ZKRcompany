import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogGrid } from "@/components/sections/BlogGrid";

export function BlogTeaser() {
  return (
    <section className="bg-mist-100 py-28 sm:py-36 dark:bg-white/[0.02]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Notes from projects we've shipped." className="max-w-xl" />
          <a
            href="/blog"
            className="mb-1 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
          >
            Read the blog →
          </a>
        </div>
        <div className="mt-16">
          <BlogGrid limit={3} />
        </div>
      </Container>
    </section>
  );
}
