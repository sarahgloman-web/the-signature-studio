"use client";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, ids }) {
  // If raw products array is passed, use it directly.
  // If ids array is passed, this component should be wrapped by a server component
  // that resolves the ids to products first.
  const items = products || [];

  if (items.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
      }}
    >
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
