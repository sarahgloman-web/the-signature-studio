import { getFeaturedProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const latestPosts = getAllPosts().slice(0, 3);

  return <HomeClient featuredProducts={featuredProducts} latestPosts={latestPosts} />;
}
