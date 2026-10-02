import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/lib/content";

/** Native <details>/<summary>: keyboard accessible and works without any JavaScript. */
export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-night/15 bg-paper-deep">
      <Container className="py-24 sm:py-32">
        <SectionLabel index="06">FAQ</SectionLabel>
        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 id="faq-heading" className="text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none lg:col-span-4">
            Questions
          </h2>
          <div className="border-t border-night/20 lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.question} className="group border-b border-night/20">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <Plus className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden />
                </summary>
                <p className="max-w-[60ch] pb-6 text-night/80">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
