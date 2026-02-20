"use client";
import { BRAND } from "@/lib/brand";

const fontSizes = { sm: "1.125rem", md: "1.5rem", lg: "2.25rem" };

export default function Logo({ size = "md", light = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: fontSizes[size],
          fontWeight: 300,
          color: light ? BRAND.cream : BRAND.charcoal,
          letterSpacing: "0.35em",
        }}
      >
        THE SIGNATURE STUDIO
      </span>
      {size !== "sm" && (
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "4px",
            color: light ? BRAND.taupe : BRAND.warmBrown,
          }}
        >
          curated by sarah
        </span>
      )}
    </div>
  );
}
