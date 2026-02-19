import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Shop — The Signature Studio",
  description: "Browse all curated collections. Every product is personally selected and linked with love.",
};

const collections = [
  { name: "Spring Edit", emoji: "\uD83C\uDF37", count: "25+ picks" },
  { name: "Under $50", emoji: "\uD83D\uDCB0", count: "30+ picks" },
  { name: "Jewelry & Accessories", emoji: "\u2728", count: "20+ picks" },
  { name: "Home & Decor", emoji: "\uD83C\uDFE1", count: "15+ picks" },
  { name: "Beauty & Scents", emoji: "\uD83C\uDF38", count: "18+ picks" },
  { name: "Gifts for Her", emoji: "\uD83C\uDF81", count: "22+ picks" },
];

export default function ShopPage() {
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
          {collections.map((col) => (
            <div
              key={col.name}
              style={{
                padding: "32px",
                textAlign: "center",
                background: BRAND.cream,
                border: `1px solid ${BRAND.blush}`,
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
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
            </div>
          ))}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
