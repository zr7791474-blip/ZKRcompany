import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PortfolioLink } from "@/components/ui/PortfolioLink";
import { navLinks, site } from "@/lib/content";

const iconLink =
  "flex h-11 w-11 items-center justify-center rounded-sm border border-fg/25 text-fg/80 transition-colors hover:border-fg hover:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-fg/15 bg-surface/80">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_auto] lg:gap-16">
          <div>
            <p className="text-6xl font-semibold leading-none tracking-[-0.05em] [font-stretch:125%] sm:text-7xl">{site.name}</p>
            <p className="mt-6 text-base">{site.founder}</p>
            <p className="text-base text-fg/70">{site.role}</p>
            <Link href="/contact" className="u-link mt-8 inline-flex min-h-11 items-center text-[15px] font-semibold">
              Tell me about your project
            </Link>
            <PortfolioLink className="mt-2 flex w-fit" label="Personal portfolio" />
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center text-[15px] text-fg/75 hover:text-fg">
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

        <div className="t-meta mt-14 flex flex-col gap-1 border-t border-fg/15 pt-6 text-fg/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} — {site.founder} · {site.region}
          </p>
          <p className="flex items-center gap-4">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-fg">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-fg">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
