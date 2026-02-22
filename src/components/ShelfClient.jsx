"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { BRAND } from "@/lib/brand";

export default function ShelfClient({ featuredProducts, pastShelves }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* This Week's Shelf */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: BRAND.warmBrown, marginBottom: "8px" }}>
              Week of {currentDate}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "8px" }}>
              This Week&apos;s Picks
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.taupe }}>
              {featuredProducts.length} curated finds
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", padding: "48px 0", fontFamily: "'Outfit', sans-serif", color: BRAND.taupe }}>
              This week&apos;s shelf is being curated. Check back Monday!
            </p>
          )}

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: BRAND.taupe, textAlign: "center", marginTop: "24px", opacity: 0.7, letterSpacing: "0.05em" }}>
            This site contains affiliate links. I may earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center", background: BRAND.cream }}>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("[data-email-section]");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: BRAND.gold,
            textDecoration: "none",
            borderBottom: `1px solid ${BRAND.gold}40`,
            paddingBottom: "4px",
          }}
        >
          Subscribe to get the Shelf every Monday &rarr;
        </Link>
      </section>

      {/* Past Shelves */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              Browse Past Editions
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, color: BRAND.charcoal }}>
              The Shelf Archive
            </h2>
          </div>

          {pastShelves.length === 0 ? (
            <p style={{ textAlign: "center", padding: "32px 0", fontFamily: "'Outfit', sans-serif", color: BRAND.taupe, fontSize: "0.85rem" }}>
              Past editions will appear here as new Shelves are published each week. Stay tuned!
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {pastShelves.map((shelf) => (
                <Link
                  key={shelf.slug}
                  href={`/blog/${shelf.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 28px",
                    background: BRAND.cream,
                    border: `1px solid ${BRAND.blush}`,
                    textDecoration: "none",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.warmBrown, marginBottom: "4px" }}>
                      {new Date(shelf.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: BRAND.charcoal, lineHeight: 1.3 }}>
                      {shelf.title}
                    </h3>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.warmBrown }}>
                    View Shelf &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
