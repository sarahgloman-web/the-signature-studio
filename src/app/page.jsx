"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import SignatureNumber from "@/components/SignatureNumber";
import { BRAND } from "@/lib/brand";

const pillars = [
  {
    icon: "\uD83D\uDECD\uFE0F",
    title: "The Edit",
    sub: "Curated Shopping Finds",
    desc: "Weekly blog posts with curated finds, signature pairings, starter kits, scent stories, and more. Every pick is tried, loved, or obsessively researched.",
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

const shelfProducts = [
  { name: "Product 1", price: "$00", rating: 9, link: "#" },
  { name: "Product 2", price: "$00", rating: 8.5, link: "#" },
  { name: "Product 3", price: "$00", rating: 8, link: "#" },
  { name: "Product 4", price: "$00", rating: 9.5, link: "#" },
  { name: "Product 5", price: "$00", rating: 7.5, link: "#" },
  { name: "Product 6", price: "$00", rating: 8, link: "#" },
  { name: "Product 7", price: "$00", rating: 9, link: "#" },
  { name: "Product 8", price: "$00", rating: 7, link: "#" },
  { name: "Product 9", price: "$00", rating: 8.5, link: "#" },
  { name: "Product 10", price: "$00", rating: 9, link: "#" },
];

const shopCategories = [
  {
    title: "Signature Style",
    sub: "Fashion",
    emoji: "\uD83D\uDC57",
    slug: "style",
    gradient: `linear-gradient(135deg, ${BRAND.dustyRose}40, ${BRAND.softPink}60)`,
  },
  {
    title: "Signature Scents",
    sub: "Fragrance + Candles",
    emoji: "\uD83C\uDF38",
    slug: "scents",
    gradient: `linear-gradient(135deg, ${BRAND.blush}80, ${BRAND.taupe}30)`,
  },
  {
    title: "Signature Sparkle",
    sub: "Jewelry",
    emoji: "\u2728",
    slug: "sparkle",
    gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.blush}60)`,
  },
  {
    title: "Signature Space",
    sub: "Home",
    emoji: "\uD83C\uDFE1",
    slug: "space",
    gradient: `linear-gradient(135deg, ${BRAND.sage}40, ${BRAND.cream})`,
  },
  {
    title: "Signature Skin",
    sub: "Beauty",
    emoji: "\uD83E\uDDF4",
    slug: "skin",
    gradient: `linear-gradient(135deg, ${BRAND.softPink}40, ${BRAND.blush}60)`,
  },
  {
    title: "Signature Starter Kits",
    sub: "Bundles",
    emoji: "\uD83C\uDF81",
    slug: "starter-kits",
    gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.sage}60)`,
  },
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);

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

      {/* THIS WEEK'S SIGNATURE SHELF */}
      <section style={{ padding: "96px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
              Updated Every Monday
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: BRAND.charcoal,
                marginBottom: "12px",
              }}
            >
              This Week&apos;s Signature Shelf
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                color: BRAND.taupe,
                lineHeight: 1.8,
              }}
            >
              10 curated picks, refreshed every Monday.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              scrollBehavior: "smooth",
              paddingBottom: "16px",
              scrollbarWidth: "thin",
              scrollbarColor: `${BRAND.blush} transparent`,
            }}
          >
            {shelfProducts.map((product, i) => (
              <a
                key={i}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: "0 0 220px",
                  background: BRAND.warmWhite,
                  border: `1px solid ${BRAND.blush}`,
                  padding: "24px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Placeholder image area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    background: BRAND.blush,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: BRAND.taupe }}>
                    Image
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: BRAND.charcoal,
                  }}
                >
                  {product.name}
                </h3>

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

                <SignatureNumber rating={product.rating} />
              </a>
            ))}
          </div>

          {/* View all link */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/shelf"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: BRAND.warmBrown,
                textDecoration: "none",
                borderBottom: `1px solid ${BRAND.warmBrown}40`,
                paddingBottom: "4px",
                transition: "color 0.3s",
              }}
            >
              View all &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SHOP ALL */}
      <section style={{ padding: "96px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
              Browse by Category
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: BRAND.charcoal,
              }}
            >
              Shop All
            </h2>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .shop-all-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .shop-all-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div
            className="shop-all-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {shopCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="shop-all-grid-item"
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
