import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "About — The Signature Studio",
  description: "Meet Sarah, the curator behind The Signature Studio.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="py-24 px-6" style={{ background: BRAND.warmWhite }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
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
              Nice to Meet You
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 300,
                color: BRAND.charcoal,
              }}
            >
              About The Signature Studio
            </h1>
          </div>

          <div
            className="text-center"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              color: BRAND.charcoal,
              lineHeight: 2,
            }}
          >
            <p className="mb-6">
              Hi, I&apos;m Sarah — the curator behind The Signature Studio.
            </p>
            <p className="mb-6">
              This space is my creative umbrella and the beginning of a long-held
              dream. The Signature Studio was created to blend my love for
              creativity, branding, and entrepreneurship — with the hope of
              growing into something truly special.
            </p>
            <p className="mb-6">
              Right now, I curate the chicest shopping finds for women who love
              beautiful things: aesthetic home decor, dainty jewelry, gourmand
              fragrances, chic fashion pieces, and everything in between. Every
              product is handpicked, and I only share things I genuinely love.
            </p>
            <p className="mb-6">
              But The Signature Studio is bigger than shopping finds. It&apos;s an
              evolving brand with three pillars:{" "}
              <strong>The Edit</strong> (curated shopping + affiliate finds),{" "}
              <strong>Signature Scents</strong> (future custom rollerball
              perfume experiences), and{" "}
              <strong>Signature Sparkle</strong> (future charm and permanent
              jewelry bar). Each branch is inspired by creativity, community, and
              making meaningful experiences.
            </p>
            <p className="mb-6">
              My biggest dream in life is to be a mom and wife while still
              building something meaningful of my own — a creative business that
              allows flexibility, purpose, and fulfillment. The Signature Studio
              is how I&apos;m making that dream real, one curated find at a time.
            </p>
            <p
              className="mb-8"
              style={{ color: BRAND.warmBrown, fontStyle: "italic" }}
            >
              Every branch of The Signature Studio is inspired by my creative
              hobbies, love for marketing and design, and desire to create
              personal, meaningful experiences — all while supporting other
              entrepreneurs as they build something special of their own.
            </p>
          </div>

          <div className="text-center">
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: BRAND.taupe,
                marginBottom: "12px",
              }}
            >
              Follow the journey
            </p>
            <div className="flex justify-center gap-6">
              {["Pinterest", "TikTok", "ShopMy"].map((platform) => (
                <span
                  key={platform}
                  className="cursor-pointer transition-colors duration-300 hover:opacity-60"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: BRAND.warmBrown,
                    borderBottom: `1px solid ${BRAND.blush}`,
                    paddingBottom: "2px",
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
