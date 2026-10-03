import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";

export const alt = "ZKR case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  const dark = p?.variant !== "warm";
  const bg = dark ? "#0b1421" : "#edf4fa";
  const fg = dark ? "#edf4fa" : "#0b1421";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: bg, color: fg, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ fontSize: 28, opacity: 0.7 }}>{p?.category ?? "Work"}</div>
        <div style={{ fontSize: 150, fontWeight: 700, letterSpacing: -6, lineHeight: 0.95 }}>{p?.title ?? "ZKR"}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 32 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{site.name} — {site.founder}</span>
            <span style={{ opacity: 0.7 }}>{site.role}</span>
          </div>
          <div style={{ height: 8, width: 160, background: dark ? "#ff7b6b" : "#c8372b" }} />
        </div>
      </div>
    ),
    size
  );
}
