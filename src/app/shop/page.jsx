"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { Suspense } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";
import productData from "../../../data/products.json";

const { products: allProducts, categories } = productData;

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low \u2192 High", value: "price-asc" },
  { label: "Price: High \u2192 Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
];

const TAG_FILTERS = [
  { label: "Under $50", value: "under-50" },
  { label: "Gift Guide", value: "gift-guide" },
  { label: "Splurge-Worthy", value: "splurge" },
  { label: "Everyday Essentials", value: "everyday" },
  { label: "New Finds", value: "new-find" },
];

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState(null);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    if (urlCategory) {
      setActiveCategory(urlCategory);
    }
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "rating":
        result.sort((a, b) => b.signatureNumber - a.signatureNumber);
        break;
      case "newest":
      default:
        result.sort((a, b) => (a.dateAdded < b.dateAdded ? 1 : -1));
        break;
    }

    return result;
  }, [activeCategory, activeTag, sortBy]);

  const pillStyle = (isActive) => ({
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.68rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "8px 18px",
    border: `1px solid ${isActive ? BRAND.gold : BRAND.blush}`,
    background: isActive ? BRAND.gold : BRAND.warmWhite,
    color: isActive ? "#fff" : BRAND.charcoal,
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  });

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
          Shop My Curated Finds
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "16px" }}>
          The Signature Shop
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.8, maxWidth: "32rem", margin: "0 auto 24px" }}>
          Every product is personally selected and linked with love.
        </p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: BRAND.taupe, opacity: 0.7, letterSpacing: "0.05em" }}>
          This site contains affiliate links. I may earn a small commission at no cost to you.
        </p>
      </section>

      {/* Filters + Products */}
      <section style={{ padding: "48px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Category Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            <button onClick={() => setActiveCategory("all")} style={pillStyle(activeCategory === "all")}>All</button>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={pillStyle(activeCategory === cat.id)}>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tag Filter Row */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            {TAG_FILTERS.map((tag) => {
              const isActive = activeTag === tag.value;
              return (
                <button
                  key={tag.value}
                  onClick={() => setActiveTag(isActive ? null : tag.value)}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.08em",
                    padding: "6px 14px",
                    border: `1px solid ${isActive ? BRAND.warmBrown : BRAND.blush}`,
                    background: isActive ? `${BRAND.warmBrown}15` : "transparent",
                    color: isActive ? BRAND.warmBrown : BRAND.taupe,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: BRAND.taupe, letterSpacing: "0.1em", textTransform: "uppercase" }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                padding: "6px 12px",
                border: `1px solid ${BRAND.blush}`,
                background: BRAND.warmWhite,
                color: BRAND.charcoal,
                outline: "none",
                cursor: "pointer",
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <p style={{ textAlign: "center", padding: "64px 0", fontFamily: "'Outfit', sans-serif", color: BRAND.taupe, fontSize: "0.9rem" }}>
              No products match your filters. Try adjusting your selection.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: BRAND.taupe, textAlign: "center", marginTop: "40px", opacity: 0.7, letterSpacing: "0.05em" }}>
            This site contains affiliate links. I may earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: "80px", textAlign: "center", padding: "160px 24px", fontFamily: "'Outfit', sans-serif", color: BRAND.taupe }}>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
