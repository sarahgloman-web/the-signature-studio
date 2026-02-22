"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

const TAG_COLORS = {
  sage: BRAND.sage,
  dustyRose: BRAND.dustyRose,
  gold: BRAND.gold,
  warmBrown: BRAND.warmBrown,
  softPink: BRAND.softPink,
};

const POST_TYPE_LABELS = {
  "curated-finds": "Curated Finds",
  "signature-shelf": "Signature Shelf",
  "signature-pairing": "Pairings",
  "signature-starter-kit": "Starter Kits",
  "scent-story": "Scent Stories",
  "signature-calendar": "Calendar",
  "review": "Review",
  "guide": "Guide",
};

const POST_TYPE_COLORS = {
  "curated-finds": BRAND.sage,
  "signature-shelf": BRAND.warmBrown,
  "signature-pairing": BRAND.dustyRose,
  "signature-starter-kit": BRAND.gold,
  "scent-story": BRAND.softPink,
  "signature-calendar": BRAND.taupe,
  "review": BRAND.sage,
  "guide": BRAND.warmBrown,
};

const FILTER_PILLS = [
  { label: "All", value: "all" },
  { label: "Signature Shelf", value: "signature-shelf" },
  { label: "Pairings", value: "signature-pairing" },
  { label: "Starter Kits", value: "signature-starter-kit" },
  { label: "Scent Stories", value: "scent-story" },
  { label: "Calendar", value: "signature-calendar" },
];

export default function EditGrid({ posts }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.postType === activeFilter);

  return (
    <>
      {/* Filter Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "48px" }}>
        {FILTER_PILLS.map((pill) => {
          const isActive = activeFilter === pill.value;
          return (
            <button
              key={pill.value}
              onClick={() => setActiveFilter(pill.value)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 20px",
                border: `1px solid ${isActive ? BRAND.gold : BRAND.blush}`,
                background: isActive ? BRAND.gold : "transparent",
                color: isActive ? "#fff" : BRAND.charcoal,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <p style={{ textAlign: "center", padding: "48px 0", fontFamily: "'Outfit', sans-serif", color: BRAND.taupe }}>
          No posts match this filter yet. Check back soon!
        </p>
      ) : (
        <>
          <style>{`
            .edit-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
            @media (max-width: 900px) { .edit-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 600px) { .edit-grid { grid-template-columns: 1fr; } }
          `}</style>
          <div className="edit-grid">
            {filteredPosts.map((post) => {
              const color = TAG_COLORS[post.tagColor] || BRAND.sage;
              const typeColor = POST_TYPE_COLORS[post.postType] || BRAND.taupe;
              const typeLabel = POST_TYPE_LABELS[post.postType] || post.postType;
              return (
                <Link
                  key={post.slug}
                  href={`/edit/${post.slug}`}
                  style={{
                    background: BRAND.cream,
                    border: `1px solid ${BRAND.blush}`,
                    overflow: "hidden",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Cover Image / Placeholder */}
                  <div style={{ height: "11rem", background: `linear-gradient(135deg, ${color}40, ${BRAND.blush}40)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", color: `${color}80`, fontStyle: "italic" }}>S</span>
                    {/* Post type pill */}
                    <span style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.5rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      background: "rgba(255,255,255,0.92)",
                      color: typeColor,
                      border: `1px solid ${typeColor}30`,
                    }}>
                      {typeLabel}
                    </span>
                  </div>
                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: color, border: `1px solid ${color}40`, padding: "2px 8px" }}>
                        {post.tag}
                      </span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: BRAND.taupe }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: BRAND.charcoal, marginBottom: "8px", lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.taupe, lineHeight: 1.6, flex: 1 }}>
                      {post.description}
                    </p>
                    <span style={{ display: "inline-block", marginTop: "14px", fontFamily: "'Outfit', sans-serif", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: BRAND.warmBrown }}>
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
