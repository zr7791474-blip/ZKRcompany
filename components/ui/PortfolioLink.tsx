import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Official personal portfolio. External link: new tab + rel="noopener noreferrer".
 * The destination is always site.portfolioUrl (lib/content.ts), never hard-coded elsewhere.
 */
export function PortfolioLink({ className, label = "View my portfolio" }: { className?: string; label?: string }) {
  return (
    <a
      href={site.portfolioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold", className)}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
