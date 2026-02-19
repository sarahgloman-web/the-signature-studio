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
      <section className="py-20 px-6 text-center" style={{ background: BRAND.cream }}>
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
          className="max-w-lg mx-auto"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Browse all my curated collections on ShopMy. Every product is
          personally selected and linked with love.
        </p>

        {/* Replace href with your ShopMy storefront URL */}
        <a
          href="https://shopmy.us/collections/your-storefront"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 transition-all duration-300 hover:opacity-80"
          style={{
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

      <section className="py-16 px-6" style={{ background: BRAND.warmWhite }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.name}
              className="p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: BRAND.cream,
                border: `1px solid ${BRAND.blush}`,
              }}
            >
              <span className="text-3xl block mb-4">{col.emoji}</span>
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
