"use client";
import { BRAND } from "@/lib/brand";

export default function Logo({ size = "md", light = false }) {
  const sizes = { sm: "text-lg", md: "text-2xl", lg: "text-4xl" };
  return (
    <div className="flex flex-col items-center">
      <span
        className={`${sizes[size]} tracking-widest font-light`}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: light ? BRAND.cream : BRAND.charcoal,
          letterSpacing: "0.35em",
        }}
      >
        THE SIGNATURE STUDIO
      </span>
      {size !== "sm" && (
        <span
          className="text-xs tracking-widest mt-1 uppercase"
          style={{
            fontFamily: "'Outfit', sans-serif",
            color: light ? BRAND.taupe : BRAND.warmBrown,
            letterSpacing: "0.3em",
          }}
        >
          curated by sarah
        </span>
      )}
    </div>
  );
}
