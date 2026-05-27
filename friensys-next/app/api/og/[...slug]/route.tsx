import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Friensys School ERP";
  const description =
    searchParams.get("description") ??
    "Cloud-based school management software for Indian schools.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 60%, #1a0a2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "60px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(124,92,255,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "60px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#7c5cff",
            letterSpacing: "-0.5px",
          }}
        >
          Friensys
        </div>
        <div
          style={{
            fontSize: title.length > 50 ? "44px" : "56px",
            fontWeight: 800,
            color: "#f4f6fb",
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "800px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#a0a6b8",
            lineHeight: 1.4,
            maxWidth: "680px",
          }}
        >
          {description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #7c5cff, #4dd4ff)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
