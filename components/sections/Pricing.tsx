import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricing } from "@/lib/content";

export const pricingNote =
  "Prices are starting points. I confirm scope, timeline and price with you before work begins.";

export function PricingRows({ detailed }: { detailed?: boolean }) {
  return (
    <ul className="border-t border-night/20">
      {pricing.map((tier) => (
        <li key={tier.name} className="grid gap-5 border-b border-night/20 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10">
          <h3 className="text-3xl font-semibold lg:col-span-3">{tier.name}</h3>
          <p className="lg:col-span-3">
            <span className="font-display text-4xl font-semibold tracking-tight">{tier.price}</span>
            <span className="ml-2 font-mono text-xs text-night/70">{tier.note}</span>
          </p>
          <div className="lg:col-span-6">
            <p className="max-w-[46ch] text-lg text-night/80">{tier.description}</p>
            {detailed && (
              <ul className="mt-5 grid max-w-xl gap-x-8 text-[15px] sm:grid-cols-2">
                {tier.features.map((f) => (
                  <li key={f} className="border-t border-night/10 py-2">
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-t border-night/15">
      <Container className="py-24 sm:py-32">
        <SectionLabel index="05">Pricing</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 id="pricing-heading" className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none">
            Prices on the page
          </h2>
          <Link href="/pricing" className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold">
            What&apos;s included <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <div className="mt-14">
          <PricingRows />
        </div>
        <p className="mt-6 max-w-[60ch] text-night/70">{pricingNote}</p>
      </Container>
    </section>
  );
}
