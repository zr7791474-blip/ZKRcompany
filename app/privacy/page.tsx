import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = pageMeta({ title: "Privacy Policy", description: "How ZKR collects, uses, and protects information submitted through this site.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated July 2026." />
      <section className="pb-28">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-night/75">
            <div>
              <h2 className="font-display text-lg font-semibold text-night">What I collect</h2>
              <p className="mt-2">
                When you submit the contact form or email me directly, I collect your name, email address,
                company or project name, project type, budget range, timeline and current website (if provided), and the contents of your message. Contact form messages are delivered to me by email through a third-party email service (Resend). I don&apos;t use tracking cookies or
                third-party ad pixels on this site.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">How I use it</h2>
              <p className="mt-2">
                Information you submit is used solely to respond to your inquiry and, if you become a client, to
                deliver the project you&apos;ve engaged me for. I don&apos;t sell or share your information with
                third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Your rights</h2>
              <p className="mt-2">
                You can request access to, correction of, or deletion of any personal information I hold about you
                by emailing {site.email}.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-night">Contact</h2>
              <p className="mt-2">Questions about this policy: {site.email}.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
