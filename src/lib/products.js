import productData from "../../data/products.json";

const { products, categories } = productData;

/** Get all products */
export function getAllProducts() {
  return products;
}

/** Get all categories */
export function getAllCategories() {
  return categories;
}

/** Get a single product by its ID */
export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

/** Get all products in a category (e.g. "signature-scents") */
export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

/** Get all products that have a specific tag */
export function getProductsByTag(tag) {
  return products.filter((p) => p.tags.includes(tag));
}

/** Get all products that match a specific signatureMoment */
export function getProductsByMoment(moment) {
  return products.filter((p) => p.signatureMoment && p.signatureMoment.includes(moment));
}

/** Get all featured products (for This Week's Signature Shelf) */
export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

/** Get multiple products by an array of IDs (preserves order) */
export function getProductsByIds(ids) {
  return ids.map((id) => getProductById(id)).filter(Boolean);
}
