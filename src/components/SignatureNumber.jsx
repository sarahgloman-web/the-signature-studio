"use client";
import { BRAND } from "@/lib/brand";

/**
 * SignatureNumber Rating Component
 *
 * Usage in markdown frontmatter:
 *   signatureNumber: 8.5
 *
 * Or use directly in any component:
 *   <SignatureNumber rating={8.5} />
 *
 * Scale: 1-10 where 10 is the highest recommendation
 */
export default function SignatureNumber({ rating, size = "default" }) {
  if (!rating && rating !== 0) return null;

  const num = Math.min(10, Math.max(0, Number(rating)));
  const label = getLabel(num);
  const fillPercent = (num / 10) * 100;

  const isLarge = size === "large";

  return (
    <div
      className="inline-flex flex-col items-center"
      style={{ gap: isLarge ? "12px" : "6px" }}
    >
      {/* Badge */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: isLarge ? "80px" : "56px",
          height: isLarge ? "80px" : "56px",
        }}
      >
        {/* Outer ring background */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={BRAND.blush}
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={BRAND.gold}
            strokeWidth="3"
            strokeDasharray={`${fillPercent * 2.764} ${(100 - fillPercent) * 2.764}`}
            strokeLinecap="round"
          />
        </svg>
        {/* Number */}
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isLarge ? "1.8rem" : "1.2rem",
            fontWeight: 400,
            color: BRAND.charcoal,
            lineHeight: 1,
          }}
        >
          {num % 1 === 0 ? num : num.toFixed(1)}
        </span>
      </div>

      {/* Label */}
      <div className="text-center">
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isLarge ? "0.6rem" : "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRAND.gold,
            marginBottom: "2px",
          }}
        >
          Signature Number
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isLarge ? "0.7rem" : "0.6rem",
            color: BRAND.warmBrown,
            fontWeight: 500,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function getLabel(num) {
  if (num >= 9.5) return "Iconic";
  if (num >= 9) return "Obsessed";
  if (num >= 8) return "Must-Have";
  if (num >= 7) return "Love It";
  if (num >= 6) return "Really Like";
  if (num >= 5) return "It's Cute";
  if (num >= 4) return "On the Fence";
  if (num >= 3) return "Not My Fave";
  if (num >= 2) return "Skip It";
  return "Hard Pass";
}
