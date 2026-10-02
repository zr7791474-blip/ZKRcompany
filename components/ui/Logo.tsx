import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

/** ZKR mark from /public/zkr.jpg + wordmark. Server component, fixed size (no layout shift). */
export function Logo({ showName = true, className }: { showName?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image src="/zkr.jpg" alt="" width={32} height={32} priority className="h-8 w-8 rounded-sm object-cover" />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-lg font-semibold leading-none tracking-tight">ZKR</span>
        {showName && <span className="hidden text-sm opacity-70 sm:inline">{site.founder}</span>}
      </span>
    </span>
  );
}
