import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
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
  title: "The Edit — The Signature Studio Blog",
  description: "Curated finds across fashion, beauty, home, and everything aesthetic. Updated weekly.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Blog Header */}
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
          The Edit — Shopping Blog
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
          The Signature Edit
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
          Curated finds across fashion, beauty, home, and everything aesthetic.
          Updated weekly.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6" style={{ background: BRAND.warmWhite }}>
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p
              className="text-center py-12"
              style={{
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => {
                const color = TAG_COLORS[post.tagColor] || BRAND.sage;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group text-center transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: BRAND.cream,
                      border: `1px solid ${BRAND.blush}`,
                      overflow: "hidden",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <div
                      className="h-48"
                      style={{
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
                    <div className="p-6">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span
                          className="px-2 py-0.5"
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: color,
                            border: `1px solid ${color}40`,
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
                        className="inline-block mt-4 group-hover:translate-x-1 transition-transform duration-300"
                        style={{
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
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
