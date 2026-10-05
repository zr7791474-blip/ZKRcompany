import { cn } from "@/lib/utils";

/**
 * Centered page column. `surface` also lays a full-width translucent surface behind it, used for reading
 * areas so text never competes with the fixed photograph (headers stay image-forward without it).
 */
export function Container({
  className,
  children,
  surface,
}: {
  className?: string;
  children: React.ReactNode;
  surface?: boolean;
}) {
  const inner = <div className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}>{children}</div>;
  return surface ? <div className="bg-bg/80">{inner}</div> : inner;
}
