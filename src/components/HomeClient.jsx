"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import ProductCard from "@/components/ProductCard";
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

const shopCategories = [
  { title: "Signature Style", sub: "Curated fashion finds", slug: "style", catId: "signature-style", gradient: `linear-gradient(135deg, ${BRAND.dustyRose}40, ${BRAND.softPink}60)` },
  { title: "Signature Scents", sub: "Fragrance + candles", slug: "scents", catId: "signature-scents", gradient: `linear-gradient(135deg, ${BRAND.blush}80, ${BRAND.taupe}30)` },
  { title: "Signature Sparkle", sub: "Jewelry + accessories", slug: "sparkle", catId: "signature-sparkle", gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.blush}60)` },
  { title: "Signature Space", sub: "Home + decor", slug: "space", catId: "signature-space", gradient: `linear-gradient(135deg, ${BRAND.sage}40, ${BRAND.cream})` },
  { title: "Signature Skin", sub: "Beauty + skincare", slug: "skin", catId: "signature-skin", gradient: `linear-gradient(135deg, ${BRAND.softPink}40, ${BRAND.blush}60)` },
  { title: "Signature Starter Kits", sub: "Curated bundles", slug: "starter-kits", catId: "signature-starter-kits", gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.sage}60)` },
];

const TAG_COLORS = {
  sage: BRAND.sage,
  dustyRose: BRAND.dustyRose,
  gold: BRAND.gold,
  warmBrown: BRAND.warmBrown,
  softPink: BRAND.softPink,
};

const AffiliateDisclosure = () => (
  <p style={{
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.6rem",
    color: BRAND.taupe,
    textAlign: "center",
    marginTop: "24px",
    letterSpacing: "0.05em",
    opacity: 0.7,
  }}>
    This site contains affiliate links. I may earn a small commission at no cost to you.
  </p>
);

export default function HomeClient({ featuredProducts, latestPosts }) {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollShelf = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

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
        <div style={{ position: "absolute", top: 0, right: 0, width: "24rem", height: "24rem", opacity: 0.1, background: `radial-gradient(circle, ${BRAND.gold} 0%, transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "18rem", height: "18rem", opacity: 0.1, background: `radial-gradient(circle, ${BRAND.dustyRose} 0%, transparent 70%)` }} />

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
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "24px", opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.3s" }}>
            Welcome to
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 300, color: BRAND.cream, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "0.08em" }}>
            The Signature<br />
            <span style={{ fontStyle: "italic", color: BRAND.gold }}>Studio</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.9, maxWidth: "32rem", margin: "0 auto 48px", opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
            A curated world of chic finds, signature scents, and sparkling things — by sarah, for women who love beautiful details.
          </p>
          <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.9s" }}>
            <EmailCapture variant="hero" />
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", animation: "float 3s ease-in-out infinite" }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(184,169,154,0.4)", textTransform: "uppercase" }}>scroll</span>
          <div style={{ width: "1px", height: "32px", background: `linear-gradient(to bottom, ${BRAND.taupe}40, transparent)` }} />
        </div>
      </section>

      {/* BRAND PILLARS */}
      <section style={{ padding: "96px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              The Studio Ecosystem
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300, color: BRAND.charcoal }}>
              One Studio, Three Signatures
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href} style={{ textAlign: "center", padding: "32px", background: BRAND.cream, border: `1px solid ${BRAND.blush}`, textDecoration: "none", display: "block", transition: "transform 0.5s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "1.875rem" }}>{pillar.icon}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: pillar.tagColor, border: `1px solid ${pillar.tagColor}40`, padding: "4px 12px" }}>{pillar.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: BRAND.charcoal, marginBottom: "4px" }}>{pillar.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "16px" }}>{pillar.sub}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: BRAND.taupe, lineHeight: 1.8 }}>{pillar.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THIS WEEK'S SIGNATURE SHELF */}
      <section style={{ padding: "96px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.warmBrown, marginBottom: "12px" }}>
              Updated Every Monday
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "12px" }}>
              This Week&apos;s Signature Shelf
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: BRAND.taupe, lineHeight: 1.8 }}>
              Curated picks, refreshed every Monday.
            </p>
          </div>

          {/* Desktop: grid, Mobile: horizontal scroll */}
          <style>{`
            .shelf-scroll { display: none; }
            .shelf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
            .shelf-arrows { display: flex; }
            @media (max-width: 768px) {
              .shelf-scroll { display: flex !important; }
              .shelf-grid { display: none !important; }
              .shelf-arrows { display: none !important; }
            }
          `}</style>

          {/* Desktop arrow buttons */}
          <div className="shelf-arrows" style={{ justifyContent: "flex-end", gap: "8px", marginBottom: "16px" }}>
            <button onClick={() => scrollShelf(-1)} style={{ width: "36px", height: "36px", border: `1px solid ${BRAND.blush}`, background: BRAND.warmWhite, cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.warmBrown, display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Scroll left">&larr;</button>
            <button onClick={() => scrollShelf(1)} style={{ width: "36px", height: "36px", border: `1px solid ${BRAND.blush}`, background: BRAND.warmWhite, cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.warmBrown, display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Scroll right">&rarr;</button>
          </div>

          {/* Desktop grid */}
          <div className="shelf-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div
            ref={scrollRef}
            className="shelf-scroll"
            style={{
              gap: "16px",
              overflowX: "auto",
              scrollBehavior: "smooth",
              paddingBottom: "16px",
              scrollbarWidth: "thin",
              scrollbarColor: `${BRAND.blush} transparent`,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} style={{ flex: "0 0 260px" }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/shelf" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.warmBrown, textDecoration: "none", borderBottom: `1px solid ${BRAND.warmBrown}40`, paddingBottom: "4px" }}>
              View all &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
        </div>
      </section>

      {/* SHOP BY SIGNATURE */}
      <section style={{ padding: "96px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              Browse by Category
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.charcoal }}>
              Shop by Signature
            </h2>
          </div>

          <style>{`
            @media (max-width: 768px) { .shop-sig-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .shop-sig-grid { grid-template-columns: 1fr !important; } }
          `}</style>
          <div className="shop-sig-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {shopCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug === "starter-kits" ? "/shop/starter-kits" : `/shop?category=${cat.catId}`}
                style={{
                  background: cat.gradient,
                  textDecoration: "none",
                  aspectRatio: "1.2",
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
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: BRAND.charcoal, marginBottom: "6px" }}>{cat.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", color: BRAND.warmBrown, lineHeight: 1.5 }}>{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FRESH FROM THE SIGNATURE EDIT */}
      <section style={{ padding: "96px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              Latest Posts
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.charcoal }}>
              Fresh from The Signature Edit
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {latestPosts.map((post) => {
              const color = TAG_COLORS[post.tagColor] || BRAND.sage;
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textAlign: "center", background: BRAND.warmWhite, border: `1px solid ${BRAND.blush}`, overflow: "hidden", textDecoration: "none", display: "block", transition: "transform 0.5s" }}>
                  <div style={{ height: "12rem", background: `linear-gradient(135deg, ${color}40, ${BRAND.blush}40)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", color: `${color}80`, fontStyle: "italic" }}>S</span>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: color, border: `1px solid ${color}40`, padding: "2px 8px" }}>{post.tag}</span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", color: BRAND.taupe }}>
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: BRAND.charcoal, marginBottom: "8px", lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: BRAND.taupe, lineHeight: 1.7 }}>{post.description}</p>
                    <span style={{ display: "inline-block", marginTop: "16px", fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.warmBrown }}>Read More &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/blog" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.warmBrown, textDecoration: "none", borderBottom: `1px solid ${BRAND.warmBrown}40`, paddingBottom: "4px" }}>
              Read all posts &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCapture />
    </div>
  );
}
