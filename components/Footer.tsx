import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/content";

const iconLink =
  "flex h-11 w-11 items-center justify-center rounded-sm border border-paper/30 text-paper/80 transition-colors hover:border-paper hover:text-paper";

export function Footer() {
  return (
    <footer className="surface-dark bg-night text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_auto] lg:gap-16">
          <div>
            <p className="font-display text-5xl font-semibold leading-none">{site.name}</p>
            <p className="mt-5 text-base">{site.founder}</p>
            <p className="text-base text-paper/70">{site.role}</p>
            <Link
              href="/contact"
              className="u-link mt-8 inline-flex min-h-11 items-center text-[15px] font-semibold"
            >
              Tell me about your project
            </Link>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center text-[15px] text-paper/80 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-3">
            <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
              <Mail className="h-4 w-4" aria-hidden />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconLink}>
              <MessageCircle className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-1 border-t border-paper/15 pt-6 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} — {site.founder} · {site.region}
          </p>
          <p className="flex items-center gap-4">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-paper">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
