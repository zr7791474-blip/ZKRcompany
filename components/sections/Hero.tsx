import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { founder, site } from "@/lib/content";

/**
 * Hero = the opening scene. There is no hero image here on purpose: the fixed site background IS the image
 * (components/BackgroundLayers), shown at its strongest at the top of the page and veiled as you scroll.
 * Type sits on the left over the scrim; the photograph's branching and its two red points stay free on the right.
 * The h1 renders immediately (it is the text LCP element).
 */
export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-4rem)] flex-col">
      <Container className="flex flex-1 flex-col justify-center py-14 sm:py-20">
        <p className="t-meta text-fg/70">{site.identity}</p>

        <h1 className="mt-7 max-w-[19ch] text-[clamp(2.15rem,4.7vw,4.6rem)] leading-[1] sm:max-w-[18ch]">
          <span className="block text-accent">I&apos;m {site.founder}.</span>
          I design and build digital products for ambitious businesses.
        </h1>

        <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-fg/85 sm:text-xl">
          ZKR is the name I work under as an independent developer. I&nbsp;handle design, development and deployment myself, so you
          work directly with the person building your product.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" arrow className="sm:min-w-52">
            Start a project
          </ButtonLink>
          <ButtonLink href="/work" variant="outline" className="sm:min-w-48">
            View my work
          </ButtonLink>
        </div>
      </Container>

      <div className="border-t border-fg/25 bg-bg/70">
        <Container>
          <dl className="grid gap-x-8 gap-y-3 py-5 text-[15px] sm:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1.2fr_auto]">
            {[
              { k: "Role", v: site.role },
              { k: "Location", v: `${founder.location} · remote worldwide`, sub: "33.57° N, 7.59° W" },
              { k: "Availability", v: site.availability },
            ].map(({ k, v, sub }) => (
              <div key={k} className="flex items-baseline gap-4 sm:block">
                <dt className="t-meta w-24 shrink-0 text-fg/65 sm:w-auto">{k}</dt>
                <dd className="sm:mt-1">
                  {v}
                  {sub && <span className="t-meta mt-1 block text-fg/60">{sub}</span>}
                </dd>
              </div>
            ))}
            <div className="hidden lg:block">
              <Link href="#work" className="u-link t-meta group inline-flex min-h-11 items-center gap-2 text-fg">
                Selected work
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none" aria-hidden />
              </Link>
            </div>
          </dl>
        </Container>
      </div>
    </section>
  );
}
