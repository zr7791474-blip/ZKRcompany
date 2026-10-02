import { cn } from "@/lib/utils";

const isDev = process.env.NODE_ENV !== "production";

/** Quiet in production, explicit in `next dev`: tells you which field to fill. */
export function todoValue(field: string) {
  return isDev ? `[add ${field} in lib/projects.ts]` : null;
}

export type SpecItem = { label: string; value: React.ReactNode | null };

/** Engineering-notebook metadata: small mono keys, hairline rows. Rows with no value are skipped. */
export function SpecList({ items, dark, className }: { items: SpecItem[]; dark?: boolean; className?: string }) {
  const rows = items.filter((i) => i.value);
  return (
    <dl className={cn("border-t", dark ? "border-paper/20" : "border-night/20", className)}>
      {rows.map((item) => (
        <div
          key={item.label}
          className={cn("grid grid-cols-[6rem_1fr] gap-4 border-b py-3 text-[15px]", dark ? "border-paper/20" : "border-night/20")}
        >
          <dt className={cn("pt-0.5 font-mono text-xs", dark ? "text-paper/70" : "text-night/70")}>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
