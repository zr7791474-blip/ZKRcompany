import { cn } from "@/lib/utils";

/** Numbered section marker: "02 / Services". Sentence-case mono, no pill. `dark` for dark surfaces. */
export function SectionLabel({
  index,
  children,
  dark,
  className,
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("font-mono text-xs", dark ? "text-paper/70" : "text-night/70", className)}>
      <span className={dark ? "text-red-bright" : "text-red"}>{index}</span> / {children}
    </p>
  );
}
