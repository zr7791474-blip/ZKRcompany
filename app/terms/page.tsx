import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of this website and engagements with ZKR.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated July 2026." />
      <section className="pb-28">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-500 dark:text-white/60">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Using this site</h2>
              <p className="mt-2">
                This website is provided by ZKR Company to share information about our services and to let
                prospective clients get in touch. Content on this site is for general informational purposes and
                doesn&apos;t constitute a contractual offer.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Project engagements</h2>
              <p className="mt-2">
                Actual client engagements — scope, pricing, timelines, and deliverables — are governed by a
                separate signed agreement between ZKR and the client, not by the general pricing shown on this
                site, which is illustrative.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Intellectual property</h2>
              <p className="mt-2">
                The design, code, and content of this website belong to ZKR Company unless otherwise noted.
                Portfolio project names and details are shared with client permission or presented illustratively.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Changes</h2>
              <p className="mt-2">
                We may update these terms from time to time. Continued use of the site after changes are posted
                means you accept the updated terms.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Contact</h2>
              <p className="mt-2">Questions about these terms: {site.email}.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
