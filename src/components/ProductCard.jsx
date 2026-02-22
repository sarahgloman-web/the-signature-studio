"use client";
import { BRAND } from "@/lib/brand";

export default function ProductCard({ product }) {
  if (!product) return null;

  const num = product.signatureNumber;
  const fillPercent = (num / 10) * 100;

  return (
    <a
      href={product.shopMyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: BRAND.warmWhite,
        border: `1px solid ${BRAND.blush}`,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Product Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.cream})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {product.imageUrl && !product.imageUrl.includes("placeholder") ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              color: `${BRAND.taupe}60`,
              fontStyle: "italic",
            }}
          >
            S
          </span>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        {/* Brand */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRAND.taupe,
          }}
        >
          {product.brand}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: BRAND.charcoal,
            lineHeight: 1.3,
          }}
        >
          {product.title}
        </h3>

        {/* Price */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            color: BRAND.warmBrown,
            fontWeight: 500,
          }}
        >
          {product.price}
        </p>

        {/* Signature Number Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: BRAND.gold,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {num % 1 === 0 ? num : num.toFixed(1)}
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: BRAND.gold,
            }}
          >
            Signature Number
          </span>
        </div>

        {/* Shop This Button */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "16px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "10px 24px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: BRAND.charcoal,
              color: BRAND.cream,
              textAlign: "center",
              width: "100%",
              transition: "background 0.3s",
            }}
          >
            Shop This
          </span>
        </div>
      </div>
    </a>
  );
}
