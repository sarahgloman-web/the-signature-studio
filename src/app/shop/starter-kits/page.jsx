import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Signature Starter Kits — The Signature Studio",
  description:
    "Curated starter kits for every occasion — gifts, bridal, holidays, new home, and aesthetic vibes.",
};

const occasions = [
  {
    title: "Gifts",
    description: "Beautifully curated gift bundles for every celebration.",
    accent: BRAND.dustyRose,
    placeholders: ["Gift Set 1", "Gift Set 2", "Gift Set 3", "Gift Set 4"],
    gradient: `linear-gradient(135deg, ${BRAND.dustyRose}40, ${BRAND.softPink}60)`,
  },
  {
    title: "Bridal & Wedding",
    description:
      "Bridal party kits, bridesmaid gifts, and wedding-day essentials.",
    accent: BRAND.softPink,
    placeholders: [
      "Bridal Kit",
      "Bridesmaid Set",
      "Wedding Day Bundle",
      "Honeymoon Kit",
    ],
    gradient: `linear-gradient(135deg, ${BRAND.blush}80, ${BRAND.cream})`,
  },
  {
    title: "Holidays",
    description: "Seasonal kits for every holiday on the calendar.",
    accent: BRAND.sage,
    placeholders: [
      "Holiday Glow Kit",
      "Cozy Season Set",
      "Valentine's Bundle",
      "Summer Essentials",
    ],
    gradient: `linear-gradient(135deg, ${BRAND.sage}40, ${BRAND.gold}30)`,
  },
  {
    title: "New Home",
    description: "Housewarming bundles to make any space feel like home.",
    accent: BRAND.taupe,
    placeholders: [
      "Welcome Home Kit",
      "Cozy Living Set",
      "Kitchen Essentials",
      "Bathroom Refresh",
    ],
    gradient: `linear-gradient(135deg, ${BRAND.taupe}30, ${BRAND.warmWhite})`,
  },
  {
    title: "Aesthetic Vibes",
    description:
      "Clean girl, vanilla girl, coquette, and more — kits curated by aesthetic.",
    accent: BRAND.gold,
    placeholders: [
      "Clean Girl Kit",
      "Vanilla Girl Set",
      "Coquette Bundle",
      "That Girl Essentials",
    ],
    gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.blush}60)`,
  },
];

export default function StarterKitsPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: BRAND.cream,
        }}
      >
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
          Shop by Occasion
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
          Signature Starter Kits
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            lineHeight: 1.8,
            maxWidth: "32rem",
            margin: "0 auto",
          }}
        >
          Curated bundles for every occasion — whether you&apos;re gifting,
          nesting, or building your dream aesthetic.
        </p>
      </section>

      {/* Occasion Sections */}
      {occasions.map((occasion) => (
        <section
          key={occasion.title}
          style={{
            padding: "64px 24px",
            background:
              occasions.indexOf(occasion) % 2 === 0
                ? BRAND.warmWhite
                : BRAND.cream,
          }}
        >
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <span
                style={{ display: "block", width: "40px", height: "2px", background: occasion.accent, margin: "0 auto 16px", opacity: 0.7 }}
              />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  color: BRAND.charcoal,
                  marginBottom: "8px",
                }}
              >
                {occasion.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  color: BRAND.taupe,
                  lineHeight: 1.7,
                  maxWidth: "28rem",
                  margin: "0 auto",
                }}
              >
                {occasion.description}
              </p>
            </div>

            {/* Placeholder Product Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {occasion.placeholders.map((name) => (
                <div
                  key={name}
                  style={{
                    background: occasion.gradient,
                    border: `1px solid ${BRAND.blush}`,
                    padding: "32px 20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "220px",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: `${BRAND.cream}80`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.6rem",
                        color: BRAND.taupe,
                      }}
                    >
                      Image
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      color: BRAND.charcoal,
                      marginBottom: "4px",
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.7rem",
                      color: BRAND.taupe,
                    }}
                  >
                    Coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Back to Shop */}
      <section
        style={{
          padding: "48px 24px",
          textAlign: "center",
          background: BRAND.warmWhite,
        }}
      >
        <Link
          href="/shop"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRAND.warmBrown,
            textDecoration: "none",
            borderBottom: `1px solid ${BRAND.warmBrown}40`,
            paddingBottom: "4px",
          }}
        >
          &larr; Back to Shop
        </Link>
      </section>

      <EmailCapture />
    </div>
  );
}
