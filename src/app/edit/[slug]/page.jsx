import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import { getProductById, getProductsByIds } from "@/lib/products";
import EmailCapture from "@/components/EmailCapture";
import SignatureNumber from "@/components/SignatureNumber";
import ProductCard from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
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

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} — The Signature Edit | The Signature Studio`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function EditPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const color = TAG_COLORS[post.tagColor] || BRAND.sage;
  const typeLabel = POST_TYPE_LABELS[post.postType] || post.postType;

  // Resolve products from products.json
  const embeddedProducts = post.productIds.length > 0 ? getProductsByIds(post.productIds) : [];
  const scentProduct = post.scentPairing ? getProductById(post.scentPairing) : null;

  // Related posts
  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  const relatedPosts = allPosts.slice(0, 3);

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <article style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "3px 10px", background: `${color}20`, color: color, border: `1px solid ${color}40`,
            }}>
              {typeLabel}
            </span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: color, border: `1px solid ${color}40`, padding: "3px 10px" }}>
              {post.tag}
            </span>
          </div>

          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", color: BRAND.taupe }}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.charcoal, lineHeight: 1.2, marginBottom: "24px", textAlign: "center" }}>
            {post.title}
          </h1>

          {/* Cover Image */}
          {post.coverImage && (
            <div style={{ marginBottom: "32px", overflow: "hidden" }}>
              <img
                src={post.coverImage}
                alt={post.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          {/* Signature Number Rating */}
          {post.signatureNumber && (
            <div style={{ marginBottom: "32px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", background: BRAND.cream, border: `1px solid ${BRAND.blush}` }}>
              <SignatureNumber rating={post.signatureNumber} size="large" />
            </div>
          )}

          {/* Affiliate disclaimer */}
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "rgba(184,169,154,0.6)", marginBottom: "24px", letterSpacing: "0.05em", textAlign: "center" }}>
            This site contains affiliate links. I may earn a small commission at no cost to you.
          </p>

          {/* Embedded products from products.json */}
          {embeddedProducts.length > 0 && (
            <div style={{ marginBottom: "40px" }}>
              <ProductGrid products={embeddedProducts} />
            </div>
          )}

          {/* Legacy inline product cards from frontmatter */}
          {post.products && post.products.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {post.products.map((product, i) => (
                <div key={i} style={{ textAlign: "center", background: BRAND.cream, border: `1px solid ${BRAND.blush}`, overflow: "hidden" }}>
                  <div style={{ height: "11rem", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.softPink}30)` }}>
                    <span style={{ fontSize: "3rem", opacity: 0.3, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>S</span>
                    {product.tag && (
                      <span style={{ position: "absolute", top: "12px", left: "12px", padding: "2px 8px", fontFamily: "'Outfit', sans-serif", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(255,255,255,0.9)", color: BRAND.warmBrown }}>{product.tag}</span>
                    )}
                  </div>
                  <div style={{ padding: "20px" }}>
                    {product.brand && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "4px" }}>{product.brand}</p>}
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: BRAND.charcoal, marginBottom: "8px" }}>{product.name}</h4>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.warmBrown, fontWeight: 500 }}>{product.price}</span>
                      <span style={{ padding: "8px 16px", fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", background: BRAND.charcoal, color: BRAND.cream }}>Shop Now</span>
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
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {/* Scent Pairing Section */}
          {scentProduct && (
            <div style={{ margin: "48px 0", padding: "32px", background: BRAND.cream, border: `1px solid ${BRAND.blush}` }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "8px", textAlign: "center" }}>
                This Post Smells Like
              </p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: BRAND.charcoal, textAlign: "center", marginBottom: "20px" }}>
                Scent Pairing of the Week
              </h3>
              <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                <ProductCard product={scentProduct} />
              </div>
            </div>
          )}

          {/* Email signup */}
          <div style={{ margin: "48px 0", padding: "32px", textAlign: "center", background: `linear-gradient(135deg, ${BRAND.blush}60, ${BRAND.cream})`, border: `1px solid ${BRAND.blush}` }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: BRAND.charcoal, marginBottom: "8px" }}>Love these finds?</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: BRAND.taupe, marginBottom: "20px" }}>
              Get my weekly Signature Edit delivered free — curated finds straight to your inbox.
            </p>
            <EmailCapture variant="hero" />
          </div>
        </article>
      </section>

      {/* More from The Signature Edit */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "64px 24px", background: BRAND.cream }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "8px" }}>Keep Reading</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, color: BRAND.charcoal }}>
                More from The Signature Edit
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
              {relatedPosts.map((rp) => {
                const c = TAG_COLORS[rp.tagColor] || BRAND.sage;
                return (
                  <Link key={rp.slug} href={`/edit/${rp.slug}`} style={{ background: BRAND.warmWhite, border: `1px solid ${BRAND.blush}`, overflow: "hidden", textDecoration: "none", display: "block" }}>
                    <div style={{ height: "10rem", background: rp.coverImage ? `url(${rp.coverImage}) center/cover no-repeat` : `linear-gradient(135deg, ${c}40, ${BRAND.blush}40)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {!rp.coverImage && <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", color: `${c}80`, fontStyle: "italic" }}>S</span>}
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: BRAND.charcoal, marginBottom: "6px", lineHeight: 1.3 }}>{rp.title}</h3>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: BRAND.warmBrown, letterSpacing: "0.1em", textTransform: "uppercase" }}>Read more &rarr;</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
