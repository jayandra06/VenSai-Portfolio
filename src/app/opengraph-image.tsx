import { ImageResponse } from "next/og";
import { BRAND_CONFIG } from "@/data/vensai-data";

export const runtime = "edge";
export const alt = "Vensai Labs — software, vendorship, and BPO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(145deg, #020a1f 0%, #0a1628 45%, #111827 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#B87333" }}>
            Vensai Labs
          </span>
          <span style={{ fontSize: 18, color: "#94a3b8" }}>{BRAND_CONFIG.offices.display}</span>
        </div>
        <div>
          <div style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.15, maxWidth: 900 }}>
            {BRAND_CONFIG.homepage.headline}
          </div>
          <div style={{ marginTop: 20, fontSize: 24, lineHeight: 1.4, color: "#cbd5e1", maxWidth: 880 }}>
            {BRAND_CONFIG.homepage.lead}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 18, color: "#0A84FF" }}>
          <span>Software</span>
          <span>·</span>
          <span>Vendorship</span>
          <span>·</span>
          <span>BPO</span>
        </div>
      </div>
    ),
  );
}
