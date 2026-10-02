import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold transition-colors rounded-sm";

const variants: Record<Variant, string> = {
  // ZKR red is the one action colour.
  primary: "bg-red text-white hover:bg-red-dark",
  // On light surfaces
  outline: "border border-night text-night hover:bg-night hover:text-paper",
  // On dark surfaces
  "outline-dark": "border border-paper/60 text-paper hover:bg-paper hover:text-night",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
