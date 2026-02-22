# The Signature Studio — Developer Reference

## Project Overview
Next.js site (App Router, JSX, no TypeScript) for a curated shopping/lifestyle brand. Deployed on Vercel from `master` branch.

## Key Directories
- `data/products.json` — Single source of truth for all products
- `posts/` — Markdown blog posts with frontmatter
- `src/lib/` — Utility/helper files (products.js, posts.js, brand.js)
- `src/components/` — Reusable React components
- `src/app/` — Next.js App Router pages

## Product System

### Adding a New Product
Edit `data/products.json` and add an entry to the `products` array:

```json
{
  "id": "brand-product-name",
  "title": "Product Display Name",
  "slug": "brand-product-name",
  "imageUrl": "/images/products/brand-product-name.jpg",
  "price": "$49.00",
  "signatureNumber": 8.5,
  "shopMyUrl": "https://shopmy.us/products/actual-link",
  "category": "signature-scents",
  "brand": "Brand Name",
  "description": "One sentence description.",
  "tags": ["under-50", "gift-guide"],
  "signatureMoment": ["sunday-reset", "date-night"],
  "dateAdded": "2026-02-22",
  "featured": false
}
```

### Product Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Kebab-case unique ID (e.g. `"le-labo-santal-33"`) |
| `title` | string | Yes | Display name |
| `slug` | string | Yes | URL slug (usually same as id) |
| `imageUrl` | string | Yes | Path to product image |
| `price` | string | Yes | Display price (e.g. `"$49.00"`) |
| `signatureNumber` | number | Yes | Rating 1.0–10.0 (e.g. `8.5`) |
| `shopMyUrl` | string | Yes | ShopMy affiliate link |
| `category` | string | Yes | One of the 6 categories below |
| `brand` | string | Yes | Brand name |
| `description` | string | Yes | One-sentence description |
| `tags` | string[] | Yes | Array of tag strings |
| `signatureMoment` | string[] | No | Array of moment strings |
| `dateAdded` | string | Yes | YYYY-MM-DD format |
| `featured` | boolean | Yes | `true` = shows in This Week's Signature Shelf |

### Categories (6 Signature S categories)
- `signature-style` — Fashion
- `signature-scents` — Fragrance + Candles
- `signature-sparkle` — Jewelry
- `signature-space` — Home
- `signature-skin` — Beauty
- `signature-starter-kits` — Bundles

### Common Tags
`under-50`, `gift-guide`, `splurge`, `everyday`, `new-find`, `travel-edit`, `self-care`, `spring-edit`, `summer-edit`, `fall-edit`, `winter-edit`, `date-night`, `bridal`

### Signature Moments
`sunday-reset`, `date-night`, `main-character-walk`, `hosting`, `travel-edit`, `morning-ritual`, `self-care`

### Product Helper Functions (`src/lib/products.js`)
- `getAllProducts()` — All products
- `getProductById(id)` — Single product by ID
- `getProductsByCategory(categoryId)` — Filter by category
- `getProductsByTag(tag)` — Filter by tag
- `getProductsByMoment(moment)` — Filter by signatureMoment
- `getFeaturedProducts()` — Products with `featured: true`
- `getProductsByIds(ids)` — Multiple products by ID array (preserves order)

## Product Components (`src/components/`)
- `ProductCard.jsx` — Single product card (image, brand, title, price, gold Signature Number badge, "Shop This" button)
- `ProductGrid.jsx` — Responsive grid of ProductCards. Pass `products` array prop.
- `ProductEmbed.jsx` — Blog post embeds:
  - `<ProductEmbed product={product} />` — Single product embed
  - `<ProductGridEmbed products={products} />` — Multi-product embed

### Embedding Products in Blog Posts
Blog post pages (server components) should:
1. Read `productIds` from post frontmatter
2. Resolve them using `getProductsByIds(post.productIds)`
3. Pass resolved products to `<ProductGridEmbed products={products} />`

For a single scent pairing:
1. Read `scentPairing` from frontmatter
2. Resolve using `getProductById(post.scentPairing)`
3. Pass to `<ProductEmbed product={product} />`

## Blog Post System

### Creating a New Blog Post
Create a `.md` file in `posts/` with this frontmatter:

```yaml
---
title: "Post Title"
date: "2026-02-22"
tag: "Spring Edit"
tagColor: "sage"
postType: "guide"
description: "One-sentence summary for cards and SEO."
signatureNumber: 9
coverImage: "/images/blog/cover-image.jpg"
category: "fashion"
tags: ["spring-edit", "under-50"]
productIds: ["le-labo-santal-33", "olive-piper-iona-ring"]
scentPairing: "voluspa-baltic-amber-candle"
---

Your markdown content here...
```

### Post Frontmatter Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `date` | string | Yes | YYYY-MM-DD |
| `tag` | string | Yes | Display tag (e.g. "Spring Edit") |
| `tagColor` | string | Yes | One of: `sage`, `dustyRose`, `gold`, `warmBrown`, `softPink` |
| `postType` | string | Yes | See post types below |
| `description` | string | Yes | One-sentence summary |
| `signatureNumber` | number | No | Overall post rating 1–10 |
| `coverImage` | string | No | Cover image path |
| `category` | string | No | Content category |
| `tags` | string[] | No | Array of tags for filtering |
| `productIds` | string[] | No | Product IDs from products.json |
| `scentPairing` | string | No | Product ID of paired scent |
| `products` | array | No | Legacy inline product objects |

### Post Types (`postType` values)
- `curated-finds` — General curated shopping finds (default)
- `signature-shelf` — This Week's Signature Shelf roundup
- `signature-pairing` — Signature Pairings editorial content
- `signature-starter-kit` — Starter kit feature
- `scent-story` — Signature Scent Stories editorial
- `signature-calendar` — Calendar/seasonal content
- `review` — Individual product review
- `guide` — Shopping guide or how-to

### Blog Filter Pills on /blog
Filter by `postType`: All, Curated Finds, Signature Pairings, Scent Stories, Starter Kits

## Brand Colors (`src/lib/brand.js`)
- `cream: "#FAF7F2"` — Primary background
- `warmWhite: "#FDF9F4"` — Card backgrounds
- `blush: "#F0E4DA"` — Borders, subtle fills
- `taupe: "#B8A99A"` — Secondary text
- `warmBrown: "#8B7355"` — Accent text
- `deepBrown: "#5C4A3A"` — Dark accent
- `charcoal: "#3A3632"` — Primary text, dark backgrounds
- `gold: "#C4A86B"` — Brand accent, active states
- `softPink: "#E8D5CC"` — Soft accent
- `sage: "#B5BFA8"` — Green accent
- `dustyRose: "#C9A9A6"` — Rose accent

## Fonts
- **Cormorant Garamond** (serif) — Headings, product titles, logo
- **Outfit** (sans-serif) — Body text, labels, buttons

## Build & Deploy
- `npm run build` — Build locally
- Push to `master` — Auto-deploys to Vercel
- Site URL: https://the-signature-studio.vercel.app
