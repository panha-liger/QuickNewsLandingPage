import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff, #E8F0F8)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(229,231,235,0.6)",
            backdropFilter: "blur(10px)",
          }}
        />
        <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 48 }}>
          <div
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid rgba(37,99,235,0.25)",
              color: "#2563EB",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AI Verified
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#111827" }}>
            QuickNews
          </div>
        </div>
        <div style={{ fontSize: 36, color: "#111827", opacity: 0.8 }}>
          Short, Verified, Creator-Paid News
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


