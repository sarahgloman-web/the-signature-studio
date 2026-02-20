"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Suspense } from "react";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

const collections = [
  { name: "Signature Style", slug: "style", emoji: "\uD83D\uDC57", count: "25+ picks" },
  { name: "Signature Scents", slug: "scents", emoji: "\uD83C\uDF38", count: "18+ picks" },
  { name: "Signature Sparkle", slug: "sparkle", emoji: "\u2728", count: "20+ picks" },
  { name: "Signature Space", slug: "space", emoji: "\uD83C\uDFE1", count: "15+ picks" },
  { name: "Signature Skin", slug: "skin", emoji: "\uD83E\uDDF4", count: "18+ picks" },
  { name: "Signature Starter Kits", slug: "starter-kits", emoji: "\uD83C\uDF81", count: "22+ picks" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sectionRefs = useRef({});

  useEffect(() => {
    if (category && sectionRefs.current[category]) {
      sectionRefs.current[category].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [category]);

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "80px 24px", textAlign: "center", background: BRAND.cream }}>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: BRAND.gold,
            marginBottom: "12px",
          }}
        >
          Shop My Curated Finds
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            color: BRAND.charcoal,
            marginBottom: "16px",
          }}
        >
          The Signature Shop
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            lineHeight: 1.8,
            maxWidth: "32rem",
            margin: "0 auto 40px",
          }}
        >
          Browse all my curated collections on ShopMy. Every product is
          personally selected and linked with love.
        </p>

        <a
          href="https://shopmy.us/collections/your-storefront"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "16px 48px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: BRAND.charcoal,
            color: BRAND.cream,
            textDecoration: "none",
          }}
        >
          Browse My ShopMy Storefront &rarr;
        </a>
      </section>

      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {collections.map((col) => {
            const cardStyle = {
              padding: "32px",
              textAlign: "center",
              background: BRAND.cream,
              border: `1px solid ${category === col.slug ? BRAND.gold : BRAND.blush}`,
              boxShadow: category === col.slug ? `0 0 0 2px ${BRAND.gold}40` : "none",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
              textDecoration: "none",
              display: "block",
            };
            const cardContent = (
              <>
                <span style={{ fontSize: "1.875rem", display: "block", marginBottom: "16px" }}>{col.emoji}</span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    color: BRAND.charcoal,
                    marginBottom: "4px",
                  }}
                >
                  {col.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    color: BRAND.taupe,
                  }}
                >
                  {col.count}
                </p>
              </>
            );

            if (col.slug === "starter-kits") {
              return (
                <Link
                  key={col.slug}
                  href="/shop/starter-kits"
                  ref={(el) => { sectionRefs.current[col.slug] = el; }}
                  style={cardStyle}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={col.slug}
                ref={(el) => { sectionRefs.current[col.slug] = el; }}
                style={cardStyle}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: "80px", textAlign: "center", padding: "160px 24px" }}>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
