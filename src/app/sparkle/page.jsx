import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Signature Sparkle — The Signature Studio",
  description: "A future charm & permanent jewelry bar — permanent bracelets, custom charm building, and sparkling pop-ups.",
};

export default function SparklePage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section
        className="min-h-screen flex items-center justify-center px-6 py-24"
        style={{
          background: `linear-gradient(160deg, ${BRAND.warmWhite}, ${BRAND.cream})`,
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <span className="text-6xl block mb-8">{"\uD83D\uDC8E"}</span>
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
            Signature Sparkle
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
            A Charm &amp; Permanent Jewelry Bar
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
            Permanent bracelets, custom charm building, and sparkling pop-ups
            for every celebration. The kind of jewelry that stays with you —
            literally.
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
              "Permanent welded bracelets & anklets",
              "Custom charm bar experiences",
              "Birthday & bachelorette pop-ups",
              "Curated collections available online",
              "Local events & girls' night experiences",
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
