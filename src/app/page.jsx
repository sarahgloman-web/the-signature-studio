"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

const categories = [
  {
    title: "Fashion Finds",
    sub: "Chic picks for every season",
    gradient: `linear-gradient(135deg, ${BRAND.dustyRose}40, ${BRAND.softPink}60)`,
    emoji: "\uD83D\uDC57",
  },
  {
    title: "Beauty & Scents",
    sub: "Gourmand perfumes & skincare gems",
    gradient: `linear-gradient(135deg, ${BRAND.blush}80, ${BRAND.taupe}30)`,
    emoji: "\uD83C\uDF38",
  },
  {
    title: "Home Aesthetic",
    sub: "Cozy, curated living spaces",
    gradient: `linear-gradient(135deg, ${BRAND.sage}40, ${BRAND.cream})`,
    emoji: "\uD83C\uDFE1",
  },
  {
    title: "Jewelry & Accessories",
    sub: "Dainty gold, pearls & sparkle",
    gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.blush}60)`,
    emoji: "\u2728",
  },
];

const pillars = [
  {
    icon: "\uD83D\uDECD\uFE0F",
    title: "The Edit",
    sub: "Curated Shopping Finds",
    desc: "Weekly handpicked fashion, beauty, home, and lifestyle products. Every item is tried, loved, or obsessively researched before it makes the edit.",
    href: "/blog",
    tag: "LIVE NOW",
    tagColor: BRAND.sage,
  },
  {
    icon: "\uD83D\uDD6F\uFE0F",
    title: "Signature Scents",
    sub: "Custom Rollerball Perfume Bar",
    desc: "A future bespoke fragrance experience \u2014 custom rollerball perfumes for girls' nights, bridal parties, and curated collections available online.",
    href: "/scents",
    tag: "COMING SOON",
    tagColor: BRAND.dustyRose,
  },
  {
    icon: "\uD83D\uDC8E",
    title: "Signature Sparkle",
    sub: "Charm & Permanent Jewelry Bar",
    desc: "A future experiential jewelry destination \u2014 permanent bracelets, custom charm bars, and sparkling pop-ups for every celebration.",
    href: "/sparkle",
    tag: "COMING SOON",
    tagColor: BRAND.gold,
  },
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          background: `linear-gradient(160deg, ${BRAND.deepBrown} 0%, ${BRAND.charcoal} 40%, #4A3F35 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "24rem",
            height: "24rem",
            opacity: 0.1,
            background: `radial-gradient(circle, ${BRAND.gold} 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "18rem",
            height: "18rem",
            opacity: 0.1,
            background: `radial-gradient(circle, ${BRAND.dustyRose} 0%, transparent 70%)`,
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: "48rem",
            margin: "0 auto",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: BRAND.gold,
              marginBottom: "24px",
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease 0.3s",
            }}
          >
            Welcome to
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              color: BRAND.cream,
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "0.08em",
            }}
          >
            The Signature
            <br />
            <span style={{ fontStyle: "italic", color: BRAND.gold }}>
              Studio
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              color: BRAND.taupe,
              lineHeight: 1.9,
              marginBottom: "48px",
              maxWidth: "32rem",
              margin: "0 auto 48px",
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease 0.6s",
            }}
          >
            A curated world of chic finds, signature scents, and sparkling
            things — for women who love beautiful details and intentional living.
          </p>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease 0.9s",
            }}
          >
            <EmailCapture variant="hero" />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(184,169,154,0.4)",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "32px",
              background: `linear-gradient(to bottom, ${BRAND.taupe}40, transparent)`,
            }}
          />
        </div>
      </section>

      {/* BRAND PILLARS */}
      <section style={{ padding: "96px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              The Studio Ecosystem
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 300,
                color: BRAND.charcoal,
              }}
            >
              One Studio, Three Signatures
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                style={{
                  textAlign: "center",
                  padding: "32px",
                  background: BRAND.cream,
                  border: `1px solid ${BRAND.blush}`,
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.5s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "1.875rem" }}>{pillar.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: pillar.tagColor,
                      border: `1px solid ${pillar.tagColor}40`,
                      padding: "4px 12px",
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: BRAND.charcoal,
                    marginBottom: "4px",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: BRAND.gold,
                    marginBottom: "16px",
                  }}
                >
                  {pillar.sub}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: BRAND.taupe,
                    lineHeight: 1.8,
                  }}
                >
                  {pillar.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPPING CATEGORIES */}
      <section style={{ padding: "96px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: BRAND.warmBrown,
                marginBottom: "12px",
              }}
            >
              Shop by Category
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: BRAND.charcoal,
              }}
            >
              This Week&apos;s Curated Finds
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="/blog"
                style={{
                  background: cat.gradient,
                  textDecoration: "none",
                  aspectRatio: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px",
                  textAlign: "center",
                  transition: "transform 0.5s, box-shadow 0.5s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{ fontSize: "2.25rem", marginBottom: "16px", display: "block" }}>
                  {cat.emoji}
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    color: BRAND.charcoal,
                    marginBottom: "4px",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem",
                    color: BRAND.warmBrown,
                  }}
                >
                  {cat.sub}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCapture />
    </div>
  );
}
