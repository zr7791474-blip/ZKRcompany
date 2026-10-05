import { cn } from "@/lib/utils";

/** Numbered section marker: "02 / Services". Micro mono label, number in the accent colour. */
export function SectionLabel({ index, children, className }: { index: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("t-meta text-fg/65", className)}>
      <span className="text-accent">{index}</span> / {children}
    </p>
  );
}
