import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

/**
 * Hero: text only, no background photo, no blobs, no loops.
 * The h1 is the LCP element — it renders immediately (no entrance animation).
 */
export function Hero() {
  return (
    <section className="surface-dark relative overflow-hidden bg-night text-paper">
      {/* Static 6-column hairline grid. Decorative only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: "linear-gradient(to right, rgb(243 239 231 / 0.07) 1px, transparent 1px)",
          backgroundSize: "16.6667% 100%",
        }}
      />
      <Container className="relative pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="font-mono text-xs text-paper/70">{site.identity}</p>

        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.6rem,8.2vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.04em] sm:max-w-[16ch]">
          <span className="text-paper/60">I&apos;m {site.founder}.</span>{" "}
          I design and build digital products for ambitious businesses.
        </h1>

        <p className="mt-10 max-w-[52ch] text-lg leading-relaxed text-paper/80 sm:text-xl">
          ZKR is the name I work under as an independent developer. I handle design, development and deployment myself, so you
          work directly with the person building your product.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" className="sm:min-w-48">
            Start a project
          </ButtonLink>
          <ButtonLink href="/work" variant="outline-dark" className="sm:min-w-48">
            View my work
          </ButtonLink>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-paper/20 pt-6 text-[15px] sm:mt-24 sm:grid-cols-3">
          {[
            ["Role", site.role],
            ["Location", site.region],
            ["Availability", site.availability],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs text-paper/70">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
