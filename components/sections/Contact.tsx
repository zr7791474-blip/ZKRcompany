import { Mail, MessageCircle, CalendarDays, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/content";

const isDev = process.env.NODE_ENV !== "production";

function Direct({ href, icon, label, value, external }: { href: string; icon: React.ReactNode; label: string; value: string; external?: boolean }) {
  return (
    <li className="border-t border-fg/20 last:border-b">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex min-h-16 items-center gap-4 py-3"
      >
        <span aria-hidden>{icon}</span>
        <span>
          <span className="block font-mono text-xs text-fg/70">{label}</span>
          <span className="u-link text-lg font-medium">{value}</span>
        </span>
      </a>
    </li>
  );
}

export function Contact({ standalone }: { standalone?: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={standalone ? "bg-bg/80" : "border-t border-fg/15"}>
      <Container className={standalone ? "py-16 sm:py-24" : "py-24 sm:py-32"}>
        {!standalone && <SectionLabel index="07">Contact</SectionLabel>}
        <div className={`grid gap-14 lg:grid-cols-12 lg:gap-16 ${standalone ? "" : "mt-6"}`}>
          <div className="lg:col-span-5">
            <h2 id="contact-heading" className="text-[clamp(2.25rem,5vw,4rem)] leading-none">
              Start a project
            </h2>
            <p className="mt-6 max-w-[40ch] text-lg text-fg/80">
              Tell me what you&apos;re building. You&apos;ll hear back from me directly.
            </p>
            <ul className="mt-10">
              <Direct href={`mailto:${site.email}`} icon={<Mail className="h-5 w-5" />} label="Email" value={site.email} />
              <Direct href={site.whatsapp} icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Message me on WhatsApp" external />
              <Direct href={site.portfolioUrl} icon={<Globe className="h-5 w-5" />} label="Personal portfolio" value="View my portfolio" external />
              {site.bookingUrl ? (
                <Direct href={site.bookingUrl} icon={<CalendarDays className="h-5 w-5" />} label="Book a call" value="Pick a time" external />
              ) : (
                isDev && (
                  <li className="border-t border-fg/20 py-3 font-mono text-xs text-danger last:border-b">
                    [add site.bookingUrl in lib/content.ts to show “Book a call”]
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
