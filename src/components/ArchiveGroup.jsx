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

export default function ArchiveGroup({ label, posts }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "16px" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "16px 24px",
          background: BRAND.cream,
          border: `1px solid ${BRAND.blush}`,
          cursor: "pointer",
          transition: "background 0.3s",
          outline: "none",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: BRAND.charcoal,
          }}
        >
          {label}
        </h2>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: BRAND.taupe,
            border: `1px solid ${BRAND.blush}`,
            padding: "4px 12px",
          }}
        >
          {posts.length} {posts.length === 1 ? "find" : "finds"}
        </span>
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem",
            color: BRAND.taupe,
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
          {posts.map((post) => {
            const color = TAG_COLORS[post.tagColor] || BRAND.sage;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 24px",
                  background: BRAND.warmWhite,
                  border: `1px solid ${BRAND.blush}`,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: color,
                    border: `1px solid ${color}40`,
                    padding: "2px 8px",
                    flexShrink: 0,
                  }}
                >
                  {post.tag}
                </span>
                <span
                  style={{
                    flex: 1,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    color: BRAND.charcoal,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem",
                    color: BRAND.taupe,
                    flexShrink: 0,
                  }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: BRAND.warmBrown,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
