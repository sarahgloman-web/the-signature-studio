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
      <section className="py-16 px-6" style={{ background: BRAND.warmWhite }}>
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="px-3 py-1"
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
            className="text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: BRAND.charcoal,
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            {post.title}
          </h1>

          {/* Signature Number Rating */}
          {post.signatureNumber && (
            <div
              className="mb-8 p-6 flex items-center justify-center"
              style={{
                background: BRAND.cream,
                border: `1px solid ${BRAND.blush}`,
              }}
            >
              <SignatureNumber rating={post.signatureNumber} size="large" />
            </div>
          )}

          {/* Affiliate disclaimer */}
          <p
            className="text-center"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(184,169,154,0.6)",
              marginBottom: "24px",
              letterSpacing: "0.1em",
            }}
          >
            This post may contain affiliate links. I may earn a small commission
            if you purchase, at no extra cost to you.
          </p>

          {/* Product cards from frontmatter */}
          {post.products && post.products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {post.products.map((product, i) => (
                <div
                  key={i}
                  className="group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: BRAND.cream,
                    border: `1px solid ${BRAND.blush}`,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="h-44 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.softPink}30)`,
                    }}
                  >
                    <span
                      className="text-5xl opacity-30"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                      }}
                    >
                      S
                    </span>
                    {product.tag && (
                      <span
                        className="absolute top-3 left-3 px-2 py-0.5"
                        style={{
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
                  <div className="p-5">
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
                    <div className="flex items-center justify-between">
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
                          className="px-4 py-2 group-hover:opacity-80 transition-opacity"
                          style={{
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
                          className="px-4 py-2"
                          style={{
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
                    {/* Inline Signature Number for individual products */}
                    {product.signatureNumber && (
                      <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${BRAND.blush}` }}>
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
            className="my-12 p-8 text-center"
            style={{
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
