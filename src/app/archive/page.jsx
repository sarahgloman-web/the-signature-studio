import Link from "next/link";
import { getPostsByMonthYear } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

const TAG_COLORS = {
  sage: BRAND.sage,
  dustyRose: BRAND.dustyRose,
  gold: BRAND.gold,
  warmBrown: BRAND.warmBrown,
  softPink: BRAND.softPink,
};

export const metadata = {
  title: "Archive — The Signature Studio",
  description: "Browse all shopping finds sorted by month and year.",
};

export default function ArchivePage() {
  const groups = getPostsByMonthYear();

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: BRAND.cream }}>
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
          Browse by Date
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            color: BRAND.charcoal,
            marginBottom: "12px",
          }}
        >
          The Archive
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Every curated find, sorted by month and year. Never miss a past edit.
        </p>
      </section>

      {/* Archive Groups */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          {groups.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                padding: "48px 0",
                fontFamily: "'Outfit', sans-serif",
                color: BRAND.taupe,
              }}
            >
              No posts in the archive yet. Add markdown files to{" "}
              <code style={{ background: BRAND.blush, padding: "2px 8px" }}>
                /posts
              </code>{" "}
              to start building your archive.
            </p>
          ) : (
            groups.map((group) => (
              <div key={group.key} style={{ marginBottom: "48px" }}>
                {/* Month/Year Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "24px",
                    borderBottom: `1px solid ${BRAND.blush}`,
                    paddingBottom: "12px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      fontWeight: 300,
                      color: BRAND.charcoal,
                    }}
                  >
                    {group.label}
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
                    {group.posts.length} {group.posts.length === 1 ? "post" : "posts"}
                  </span>
                </div>

                {/* Posts in this month */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {group.posts.map((post) => {
                    const color = TAG_COLORS[post.tagColor] || BRAND.sage;
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "24px",
                          padding: "24px",
                          textAlign: "center",
                          background: BRAND.cream,
                          border: `1px solid ${BRAND.blush}`,
                          textDecoration: "none",
                          transition: "transform 0.3s",
                        }}
                      >
                        {/* Date badge */}
                        <div
                          style={{
                            flexShrink: 0,
                            width: "56px",
                            height: "56px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: `${color}20`,
                            border: `1px solid ${color}30`,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.2rem",
                              color: BRAND.charcoal,
                              lineHeight: 1,
                            }}
                          >
                            {new Date(post.date).getDate()}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.5rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: BRAND.taupe,
                            }}
                          >
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </span>
                        </div>

                        {/* Post info */}
                        <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <span
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "0.55rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: color,
                                border: `1px solid ${color}40`,
                                padding: "2px 8px",
                              }}
                            >
                              {post.tag}
                            </span>
                          </div>
                          <h3
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.2rem",
                              color: BRAND.charcoal,
                              lineHeight: 1.3,
                              marginBottom: "4px",
                            }}
                          >
                            {post.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.8rem",
                              color: BRAND.taupe,
                              lineHeight: 1.6,
                            }}
                          >
                            {post.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <span
                          style={{
                            flexShrink: 0,
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.8rem",
                            color: BRAND.warmBrown,
                          }}
                        >
                          &rarr;
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
