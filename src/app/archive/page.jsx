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
      <section className="py-16 px-6 text-center" style={{ background: BRAND.cream }}>
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
      <section className="py-16 px-6" style={{ background: BRAND.warmWhite }}>
        <div className="max-w-4xl mx-auto">
          {groups.length === 0 ? (
            <p
              className="text-center py-12"
              style={{
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
              <div key={group.key} className="mb-12">
                {/* Month/Year Header */}
                <div
                  className="flex items-center justify-center gap-4 mb-6"
                  style={{ borderBottom: `1px solid ${BRAND.blush}`, paddingBottom: "12px" }}
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
                    className="px-3 py-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: BRAND.taupe,
                      border: `1px solid ${BRAND.blush}`,
                    }}
                  >
                    {group.posts.length} {group.posts.length === 1 ? "post" : "posts"}
                  </span>
                </div>

                {/* Posts in this month */}
                <div className="flex flex-col gap-4">
                  {group.posts.map((post) => {
                    const color = TAG_COLORS[post.tagColor] || BRAND.sage;
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex items-start gap-6 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                        style={{
                          background: BRAND.cream,
                          border: `1px solid ${BRAND.blush}`,
                          textDecoration: "none",
                        }}
                      >
                        {/* Date badge */}
                        <div
                          className="flex-shrink-0 w-14 h-14 flex flex-col items-center justify-center"
                          style={{
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
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="px-2 py-0.5"
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "0.55rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: color,
                                border: `1px solid ${color}40`,
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
                          className="flex-shrink-0 self-center group-hover:translate-x-1 transition-transform duration-300"
                          style={{
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
