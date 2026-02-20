"use client";
import { BRAND } from "@/lib/brand";

const fontSizes = { sm: "1.125rem", md: "1.5rem", lg: "2.25rem" };
const subSizes = { sm: "0.6rem", md: "0.7rem", lg: "0.85rem" };

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
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: subSizes[size],
          letterSpacing: "0.3em",
          marginTop: "2px",
          color: light ? BRAND.taupe : BRAND.warmBrown,
        }}
      >
        by sarah
      </span>
    </div>
  );
}
