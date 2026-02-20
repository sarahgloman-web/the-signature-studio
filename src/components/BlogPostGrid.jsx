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

const FILTER_PILLS = [
  { label: "All", value: "all" },
  { label: "Curated Finds", value: "curated-finds" },
  { label: "Signature Pairings", value: "signature-pairings" },
  { label: "Scent Stories", value: "scent-stories" },
  { label: "Starter Kits", value: "starter-kits" },
];

export default function BlogPostGrid({ posts }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.postType === activeFilter);

  return (
    <>
      {/* Filter Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "48px",
        }}
      >
        {FILTER_PILLS.map((pill) => {
          const isActive = activeFilter === pill.value;
          return (
            <button
              key={pill.value}
              onClick={() => setActiveFilter(pill.value)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "8px 20px",
                border: `1px solid ${isActive ? BRAND.gold : BRAND.blush}`,
                background: isActive ? BRAND.gold : BRAND.blush,
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
        <p
          style={{
            textAlign: "center",
            padding: "48px 0",
            fontFamily: "'Outfit', sans-serif",
            color: BRAND.taupe,
          }}
        >
          No posts yet — add markdown files to the{" "}
          <code style={{ background: BRAND.blush, padding: "2px 8px" }}>
            /posts
          </code>{" "}
          folder to get started.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredPosts.map((post) => {
            const color = TAG_COLORS[post.tagColor] || BRAND.sage;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  textAlign: "center",
                  background: BRAND.cream,
                  border: `1px solid ${BRAND.blush}`,
                  overflow: "hidden",
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.5s",
                }}
              >
                <div
                  style={{
                    height: "12rem",
                    background: `linear-gradient(135deg, ${color}40, ${BRAND.blush}40)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3rem",
                      color: `${color}80`,
                      fontStyle: "italic",
                    }}
                  >
                    S
                  </span>
                </div>
                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: color,
                        border: `1px solid ${color}40`,
                        padding: "2px 8px",
                      }}
                    >
                      {post.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.7rem",
                        color: BRAND.taupe,
                      }}
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      color: BRAND.charcoal,
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: BRAND.taupe,
                      lineHeight: 1.7,
                    }}
                  >
                    {post.description}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: BRAND.warmBrown,
                    }}
                  >
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
