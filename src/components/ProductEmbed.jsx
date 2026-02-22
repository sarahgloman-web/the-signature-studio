"use client";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import { BRAND } from "@/lib/brand";

/**
 * Embed a single product in a blog post by ID.
 * Usage: <ProductEmbed product={product} />
 *
 * The parent server component should resolve the product ID
 * using getProductById() and pass the product object.
 */
export function ProductEmbed({ product }) {
  if (!product) return null;

  return (
    <div style={{ maxWidth: "300px", margin: "32px auto" }}>
      <ProductCard product={product} />
    </div>
  );
}

/**
 * Embed multiple products in a blog post.
 * Usage: <ProductGridEmbed products={products} />
 *
 * The parent server component should resolve product IDs
 * using getProductsByIds() and pass the products array.
 */
export function ProductGridEmbed({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div style={{ margin: "32px 0" }}>
      <ProductGrid products={products} />
    </div>
  );
}
