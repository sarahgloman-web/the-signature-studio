import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Signature Scents — The Signature Studio",
  description: "A future bespoke fragrance experience — custom rollerball perfumes for girls' nights, bridal parties, and curated collections.",
};

export default function ScentsPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section
        className="min-h-screen flex items-center justify-center px-6 py-24"
        style={{
          background: `linear-gradient(160deg, ${BRAND.warmWhite}, ${BRAND.cream})`,
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <span className="text-6xl block mb-8">{"\uD83D\uDD6F\uFE0F"}</span>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: BRAND.gold,
              marginBottom: "16px",
            }}
          >
            Coming Soon
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: BRAND.charcoal,
              marginBottom: "8px",
            }}
          >
            Signature Scents
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: BRAND.warmBrown,
              marginBottom: "32px",
            }}
          >
            A Bespoke Fragrance Experience
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              color: BRAND.taupe,
              lineHeight: 1.9,
              marginBottom: "40px",
            }}
          >
            Custom rollerball perfume bars for girls&apos; nights, bridal showers,
            birthday parties, and curated collections online. Because your
            signature scent should be as unique as you are.
          </p>

          <div
            className="text-left max-w-sm mx-auto mb-12 p-6"
            style={{
              background: BRAND.cream,
              border: `1px solid ${BRAND.blush}`,
            }}
          >
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: BRAND.warmBrown,
                marginBottom: "16px",
              }}
            >
              What to Expect
            </p>
            {[
              "Custom rollerball perfume creation",
              "Pop-up scent bars at local events",
              "Bridal party fragrance experiences",
              "Curated signature scent collections online",
              "Fragrance layering workshops",
            ].map((d) => (
              <div key={d} className="flex items-center gap-3 mb-3">
                <span style={{ color: BRAND.gold }}>&#10022;</span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: BRAND.charcoal,
                  }}
                >
                  {d}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: BRAND.taupe,
              marginBottom: "20px",
            }}
          >
            Be the first to know when we launch:
          </p>
          <EmailCapture variant="hero" />
        </div>
      </section>
    </div>
  );
}
