import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c12",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "#d9333f",
            color: "#0a0c12",
            fontSize: 48,
            fontWeight: 900,
            marginBottom: 40,
          }}
        >
          AR
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 68, fontWeight: 900, textAlign: "center" }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", color: "#d9333f", fontSize: 32, fontWeight: 700, marginTop: 16 }}>
          Vehicle Recovery &amp; Transportation
        </div>
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 26, marginTop: 24, textAlign: "center" }}>
          Ilford, Essex &middot; Local &amp; Nationwide &middot; {siteConfig.phoneDisplay}
        </div>
      </div>
    ),
    { ...size },
  )
}
