import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import ShelfClient from "@/components/ShelfClient";
import EmailCapture from "@/components/EmailCapture";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "The Signature Shelf — The Signature Studio",
  description: "This week's curated picks, refreshed every Monday. Browse the current Shelf and past weekly editions.",
};

export default function ShelfPage() {
  const featuredProducts = getFeaturedProducts();
  const allPosts = getAllPosts();
  // Past shelves = blog posts with postType "signature-shelf"
  const pastShelves = allPosts.filter((p) => p.postType === "signature-shelf");

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
          Updated Every Monday
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "16px" }}>
          The Signature Shelf
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.8, maxWidth: "32rem", margin: "0 auto" }}>
          Every week I handpick my favorite finds across fashion, beauty, home, and everything aesthetic.
          Here&apos;s what&apos;s on the shelf right now.
        </p>
      </section>

      {/* This Week's Shelf */}
      <ShelfClient featuredProducts={featuredProducts} pastShelves={pastShelves} />

      <EmailCapture />
    </div>
  );
}
