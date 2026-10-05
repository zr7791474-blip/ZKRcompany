import { cn } from "@/lib/utils";

const isDev = process.env.NODE_ENV !== "production";

/** Quiet in production, explicit in `next dev`: tells you which field to fill. */
export function todoValue(field: string) {
  return isDev ? `[add ${field} in lib/projects.ts]` : null;
}

export type SpecItem = { label: string; value: React.ReactNode | null };

/** Engineering-notebook metadata: micro mono keys, hairline rows. Rows with no value are skipped. */
export function SpecList({ items, className }: { items: SpecItem[]; className?: string }) {
  const rows = items.filter((i) => i.value);
  return (
    <dl className={cn("border-t border-fg/25", className)}>
      {rows.map((item) => (
        <div key={item.label} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-fg/25 py-3 text-[15px]">
          <dt className="t-meta pt-1 text-fg/65">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
