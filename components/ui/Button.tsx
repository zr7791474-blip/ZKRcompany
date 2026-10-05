import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold transition-colors rounded-sm";

const variants: Record<Variant, string> = {
  // ZKR red is the one action colour.
  primary: "bg-red text-white hover:bg-red-dark",
  outline: "border border-fg/70 text-fg hover:bg-fg hover:text-bg",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
  arrow,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  arrow?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
