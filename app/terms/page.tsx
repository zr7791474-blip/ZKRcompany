import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = pageMeta({ title: "Terms of Service", description: "The terms that govern use of this website and engagements with ZKR.", path: "/terms" });

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated July 2026." />
      <section className="pb-28">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-night/75">
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Using this site</h2>
              <p className="mt-2">
                This website is provided by ZKR (Zakariaa Adli, independent developer) to share information about my services and to let
                prospective clients get in touch. Content on this site is for general informational purposes and
                doesn&apos;t constitute a contractual offer.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Project engagements</h2>
              <p className="mt-2">
                Actual client engagements — scope, pricing, timelines, and deliverables — are governed by a
                separate signed agreement between ZKR and the client, not by the general pricing shown on this
                site, which is illustrative.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Intellectual property</h2>
              <p className="mt-2">
                The design, code, and content of this website belong to ZKR (Zakariaa Adli) unless otherwise noted.
                Portfolio project names and details are shared with client permission or presented illustratively.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Changes</h2>
              <p className="mt-2">
                I may update these terms from time to time. Continued use of the site after changes are posted
                means you accept the updated terms.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Contact</h2>
              <p className="mt-2">Questions about these terms: {site.email}.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
