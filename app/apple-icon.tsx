import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1e2d7d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 4h2v3h3v2h-3v3h-2V9h-3V7h3z" fill="#c5d635" />
          <circle
            cx="16"
            cy="21"
            r="6.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
          />
          <line
            x1="9.5"
            y1="21"
            x2="22.5"
            y2="21"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <path
            d="M16 14.5c-2.4 1.7-2.4 11.3 0 13M16 14.5c2.4 1.7 2.4 11.3 0 13"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.1"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
