import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ZKR collects, uses, and protects information submitted through this site.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated July 2026." />
      <section className="pb-28">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-500 dark:text-white/60">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">What we collect</h2>
              <p className="mt-2">
                When you submit our contact form or email us directly, we collect your name, email address,
                company (if provided), and the contents of your message. We don&apos;t use tracking cookies or
                third-party ad pixels on this site.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">How we use it</h2>
              <p className="mt-2">
                Information you submit is used solely to respond to your inquiry and, if you become a client, to
                deliver the project you&apos;ve engaged us for. We don&apos;t sell or share your information with
                third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Newsletter</h2>
              <p className="mt-2">
                If you subscribe to our newsletter, we store your email address to send occasional updates. You can
                unsubscribe at any time via the link in any email or by contacting {site.email}.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Your rights</h2>
              <p className="mt-2">
                You can request access to, correction of, or deletion of any personal information we hold about you
                by emailing {site.email}.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Contact</h2>
              <p className="mt-2">Questions about this policy: {site.email}.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
