import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";
import SignatureNumber from "@/components/SignatureNumber";
import { BRAND } from "@/lib/brand";

const TAG_COLORS = {
  sage: BRAND.sage,
  dustyRose: BRAND.dustyRose,
  gold: BRAND.gold,
  warmBrown: BRAND.warmBrown,
  softPink: BRAND.softPink,
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} — The Signature Studio`,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const color = TAG_COLORS[post.tagColor] || BRAND.sage;

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <article style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: color,
                border: `1px solid ${color}40`,
                padding: "4px 12px",
              }}
            >
              {post.tag}
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
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

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: BRAND.charcoal,
              lineHeight: 1.2,
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {post.title}
          </h1>

          {/* Signature Number Rating */}
          {post.signatureNumber && (
            <div
              style={{
                marginBottom: "32px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: BRAND.cream,
                border: `1px solid ${BRAND.blush}`,
              }}
            >
              <SignatureNumber rating={post.signatureNumber} size="large" />
            </div>
          )}

          {/* Affiliate disclaimer */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(184,169,154,0.6)",
              marginBottom: "24px",
              letterSpacing: "0.1em",
              textAlign: "center",
            }}
          >
            This post may contain affiliate links. I may earn a small commission
            if you purchase, at no extra cost to you.
          </p>

          {/* Product cards from frontmatter */}
          {post.products && post.products.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {post.products.map((product, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    background: BRAND.cream,
                    border: `1px solid ${BRAND.blush}`,
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                >
                  <div
                    style={{
                      height: "11rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.softPink}30)`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "3rem",
                        opacity: 0.3,
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                      }}
                    >
                      S
                    </span>
                    {product.tag && (
                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          padding: "2px 8px",
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background: "rgba(255,255,255,0.9)",
                          color: BRAND.warmBrown,
                        }}
                      >
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "20px" }}>
                    {product.brand && (
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.65rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: BRAND.gold,
                          marginBottom: "4px",
                        }}
                      >
                        {product.brand}
                      </p>
                    )}
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.15rem",
                        color: BRAND.charcoal,
                        marginBottom: "8px",
                      }}
                    >
                      {product.name}
                    </h4>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9rem",
                          color: BRAND.warmBrown,
                          fontWeight: 500,
                        }}
                      >
                        {product.price}
                      </span>
                      {product.url ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "8px 16px",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.65rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            background: BRAND.charcoal,
                            color: BRAND.cream,
                            textDecoration: "none",
                          }}
                        >
                          Shop Now
                        </a>
                      ) : (
                        <span
                          style={{
                            padding: "8px 16px",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.65rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            background: BRAND.charcoal,
                            color: BRAND.cream,
                          }}
                        >
                          Shop Now
                        </span>
                      )}
                    </div>
                    {product.signatureNumber && (
                      <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: `1px solid ${BRAND.blush}` }}>
                        <SignatureNumber rating={product.signatureNumber} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Markdown content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mid-post email capture */}
          <div
            style={{
              margin: "48px 0",
              padding: "32px",
              textAlign: "center",
              background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.cream})`,
              border: `1px solid ${BRAND.blush}`,
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                color: BRAND.charcoal,
                marginBottom: "8px",
              }}
            >
              Love these finds?
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                color: BRAND.taupe,
                marginBottom: "20px",
              }}
            >
              Get my weekly Signature Edit delivered free — plus a spring
              shopping guide with 50+ picks.
            </p>
            <EmailCapture variant="hero" />
          </div>
        </article>
      </section>
    </div>
  );
}
