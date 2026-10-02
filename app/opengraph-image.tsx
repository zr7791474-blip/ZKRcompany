import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.founder}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Typographic share card (no fake screenshots, no stock imagery). */
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0d1424", color: "#f3efe7", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ fontSize: 28, opacity: 0.7 }}>{site.region}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 200, fontWeight: 700, letterSpacing: -8, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 46, marginTop: 16 }}>{site.founder}</div>
          <div style={{ fontSize: 34, opacity: 0.7 }}>{site.role}</div>
        </div>
        <div style={{ height: 8, width: 160, background: "#f2707a" }} />
      </div>
    ),
    size
  );
}
