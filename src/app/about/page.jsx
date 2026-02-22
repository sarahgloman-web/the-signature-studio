import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "About Sarah — The Signature Studio | Curated Finds by Sarah",
  description: "Meet Sarah, the curator behind The Signature Studio. Learn about the Signature Number rating system and the story behind the brand.",
  openGraph: {
    title: "About — The Signature Studio",
    description: "Meet Sarah, the curator behind The Signature Studio.",
    type: "website",
  },
};

const socials = [
  { label: "Pinterest", href: "https://www.pinterest.com/signedbysarah1/" },
  { label: "TikTok", href: "https://www.tiktok.com/@signedbysarahh" },
  { label: "ShopMy", href: "https://shopmy.us/shop/sarahl1" },
];

const ratingScale = [
  { range: "9.5 – 10", label: "Iconic", desc: "Life-changing. A true signature piece." },
  { range: "9.0 – 9.4", label: "Obsessed", desc: "An absolute must-have. I tell everyone about it." },
  { range: "8.0 – 8.9", label: "Must-Have", desc: "Highly recommend. Well worth the investment." },
  { range: "7.0 – 7.9", label: "Love It", desc: "Great find. Solid pick for most people." },
  { range: "6.0 – 6.9", label: "Really Like", desc: "Good, but not a standout. Has some trade-offs." },
  { range: "5.0 – 5.9", label: "It's Cute", desc: "Fine for the price, but nothing special." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "96px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              Nice to Meet You
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal }}>
              About The Signature Studio
            </h1>
          </div>

          {/* Decorative accent — replace with photo when ready */}
          <div style={{ width: "40px", height: "2px", background: BRAND.gold, margin: "0 auto 48px", opacity: 0.6 }} />

          {/* Personal story */}
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: BRAND.charcoal, lineHeight: 2, textAlign: "center" }}>
            <p style={{ marginBottom: "24px" }}>
              Hi, I&apos;m Sarah — the curator behind The Signature Studio.
            </p>
            <p style={{ marginBottom: "24px" }}>
              This space is my creative umbrella and the beginning of a long-held dream. The Signature Studio was created to blend my love for creativity, branding, and entrepreneurship — with the hope of growing into something truly special.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Right now, I curate the chicest shopping finds for women who love beautiful things: aesthetic home decor, dainty jewelry, gourmand fragrances, chic fashion pieces, and everything in between. Every product is handpicked, and I only share things I genuinely love.
            </p>
            <p style={{ marginBottom: "24px" }}>
              But The Signature Studio is bigger than shopping finds. It&apos;s an evolving brand with three pillars: <strong>The Edit</strong> (curated shopping + affiliate finds), <strong>Signature Scents</strong> (future custom rollerball perfume experiences), and <strong>Signature Sparkle</strong> (future charm and permanent jewelry bar).
            </p>
            <p style={{ marginBottom: "24px" }}>
              My biggest dream in life is to be a mom and wife while still building something meaningful of my own — a creative business that allows flexibility, purpose, and fulfillment. The Signature Studio is how I&apos;m making that dream real, one curated find at a time.
            </p>
            <p style={{ marginBottom: "32px", color: BRAND.warmBrown, fontStyle: "italic" }}>
              Every branch of The Signature Studio is inspired by my creative hobbies, love for marketing and design, and desire to create personal, meaningful experiences — all while supporting other entrepreneurs as they build something special of their own.
            </p>
          </div>
        </div>
      </section>

      {/* Why "Signature"? */}
      <section style={{ padding: "64px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
            The Name
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "24px" }}>
            Why &ldquo;Signature&rdquo;?
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: BRAND.charcoal, lineHeight: 2, marginBottom: "16px" }}>
            Everything I curate is meant to be a signature piece — something that defines your style, your space, your scent. Not trends that fade, but finds that feel like you.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: BRAND.charcoal, lineHeight: 2 }}>
            Your signature scent. Your signature ring. Your signature Sunday reset candle. This brand is about helping you build a life full of intentional, beautiful details that are unmistakably yours.
          </p>
        </div>
      </section>

      {/* Signature Number Explained */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              Our Rating System
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "16px" }}>
              The Signature Number
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.8, maxWidth: "32rem", margin: "0 auto" }}>
              Every product gets a Signature Number from 1 to 10. It&apos;s my honest rating based on quality, value, aesthetic, and how much joy it actually brings to daily life. No paid reviews — just real opinions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {ratingScale.map((item) => (
              <div key={item.range} style={{ padding: "20px", background: BRAND.cream, border: `1px solid ${BRAND.blush}`, textAlign: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: BRAND.gold, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#fff", fontWeight: 500 }}>{item.range.split(" ")[0]}</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: BRAND.charcoal, marginBottom: "4px" }}>{item.label}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: BRAND.taupe, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section style={{ padding: "48px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.taupe, marginBottom: "16px" }}>
          Follow the journey
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.warmBrown, textDecoration: "none", borderBottom: `1px solid ${BRAND.blush}`, paddingBottom: "2px",
            }}>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
