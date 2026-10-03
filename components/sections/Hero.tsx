import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

/**
 * Hero: the long-exposure photograph (public/hero/hero.webp, optimised from the 4093 px source)
 * under a left-weighted navy gradient so the text always has strong contrast and the photo stays visible.
 * No loops, no blobs. The h1 renders immediately (it is the text LCP element); the photo is the image LCP.
 */
export function Hero() {
  return (
    <section className="surface-dark relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-night text-paper">
      <Image
        src="/hero/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[58%_40%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night/92 via-night/76 to-night/45 lg:via-night/75 lg:to-night/15"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-night to-transparent" />

      <Container className="flex flex-1 flex-col justify-center py-14 sm:py-20">
        <p className="font-mono text-xs text-paper/80">{site.identity}</p>

        <h1 className="mt-7 max-w-[17ch] font-display text-[clamp(2.4rem,5.6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          <span className="block">I&apos;m {site.founder}.</span>
          I design and build digital products for ambitious businesses.
        </h1>

        <p className="mt-8 max-w-[50ch] text-lg leading-relaxed text-paper/85 sm:text-xl">
          ZKR is the name I work under as an independent developer. I handle design, development and deployment myself, so you
          work directly with the person building your product.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" className="sm:min-w-48">
            Start a project
          </ButtonLink>
          <ButtonLink href="/work" variant="outline-dark" className="sm:min-w-48">
            View my work
          </ButtonLink>
        </div>
      </Container>

      <div className="border-t border-paper/25 bg-night/85">
        <Container>
          <dl className="grid gap-x-8 gap-y-3 py-5 text-[15px] sm:grid-cols-3">
            {[
              ["Role", site.role],
              ["Location", site.region],
              ["Availability", site.availability],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 sm:block">
                <dt className="w-24 shrink-0 font-mono text-xs text-paper/70 sm:w-auto">{k}</dt>
                <dd className="sm:mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
