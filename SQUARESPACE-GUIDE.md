# The Signature Studio — Complete Squarespace Recreation Guide

Everything extracted from the codebase, pixel by pixel. Use this to rebuild the entire site identically in Squarespace.

---

## 1. COLOR PALETTE

Save these exact hex codes in Squarespace under Design > Colors.

| Name | Hex | Where It's Used |
|------|-----|-----------------|
| **Cream** | `#FAF7F2` | Main page backgrounds, card backgrounds, light text on dark |
| **Warm White** | `#FDF9F4` | Body background, alternate section backgrounds |
| **Blush** | `#F0E4DA` | Borders, card outlines, text selection background, horizontal rules |
| **Taupe** | `#B8A99A` | Body text (secondary), subtitles, descriptions, placeholder text |
| **Warm Brown** | `#8B7355` | Links, active nav state, "Read More" text, price text |
| **Deep Brown** | `#5C4A3A` | Bold text, strong emphasis |
| **Charcoal** | `#3A3632` | Primary text color, headings, dark buttons, footer background |
| **Gold** | `#C4A86B` | Accent color — subtitles, tags, labels, "Signature Number" ring, blockquote border |
| **Soft Pink** | `#E8D5CC` | Gradient accents |
| **Sage** | `#B5BFA8` | "LIVE NOW" tag color, blog tag accent |
| **Dusty Rose** | `#C9A9A6` | "COMING SOON" tag (Scents), gradient orb on hero |

---

## 2. FONTS

Both fonts are available on Google Fonts and built into Squarespace.

### Headlines: Cormorant Garamond
- **Weight:** Light (300) for page headings, Regular (400) for card titles
- **Style:** Italic used for "Studio" in hero, blockquotes, and decorative text
- **Weights needed:** 300, 400, 500, italic 300, italic 400

### Body/UI: Outfit
- **Weights:** Extra Light (200), Light (300), Regular (400), Medium (500)
- **Used for:** All body text, navigation, buttons, labels, tags, subtitles

### Squarespace Setup
- Go to **Design > Fonts**
- Set **Heading font** = Cormorant Garamond, Light (300)
- Set **Body font** = Outfit, Regular (400)

---

## 3. GLOBAL STYLES

| Setting | Value |
|---------|-------|
| Site background | `#FDF9F4` (warm white) |
| Text selection color | Background: `#F0E4DA` (blush), Text: `#3A3632` (charcoal) |
| Scrollbar | 6px wide, track `#FAF7F2`, thumb `rgba(184,169,154,0.4)`, hover `#B8A99A` |
| Border radius everywhere | `0px` — all corners are sharp/square (no rounding anywhere) |
| Link color | `#8B7355` (warm brown), hover: `#C4A86B` (gold) |
| Link underline | Underline with 3px offset |
| Max content width | 1152px |
| Section padding | 96px top/bottom, 24px left/right |

---

## 4. NAVIGATION BAR

### Behavior
- **Fixed** to top of screen (always visible while scrolling)
- **Transparent** on the home page hero (text is cream/light colored)
- **Frosted glass** after scrolling 50px down:
  - Background: `rgba(250,247,242,0.95)`
  - Backdrop filter: `blur(20px)`
  - Bottom border: `1px solid #F0E4DA`
- On all other pages: always shows frosted glass style (dark text on light)

### Layout
- **Left side:** Logo text ("THE SIGNATURE STUDIO" in Cormorant Garamond)
- **Right side:** Horizontal navigation links
- **Max width:** 1280px, centered
- **Padding:** 24px horizontal, 16px vertical

### Navigation Links
- **Font:** Outfit, 0.75rem (12px), uppercase, letter-spacing 0.15em
- **Color on transparent hero:** Cream `#FAF7F2`
- **Color on scrolled/other pages:** Charcoal `#3A3632`
- **Active link color:** Warm Brown `#8B7355`
- **Active indicator:** 1px gold `#C4A86B` line under the active link
- **Hover effect:** 1px taupe line animates from left to full width (300ms)
- **Link order:** Home | The Edit | Shop | Archive | Signature Scents | Signature Sparkle | About

### Mobile Menu
- **Hamburger icon:** 3 horizontal lines, 24px wide, 1px thick, 6px gap between lines
- **Open animation:** Top line rotates 45deg, middle fades out, bottom rotates -45deg (forms an X)
- **Dropdown background:** `rgba(250,247,242,0.98)` with `blur(20px)`, bottom border blush
- **Mobile link style:** Outfit 0.8rem, uppercase, letter-spacing 0.2em, centered, 24px gap between links

---

## 5. HOME PAGE

### Section 1: Hero (Full Screen)

**Height:** Full viewport (min-height: 100vh)

**Background:** Diagonal gradient at 160 degrees:
- `#5C4A3A` (deep brown) at 0%
- `#3A3632` (charcoal) at 40%
- `#4A3F35` at 100%

**Decorative orbs (subtle background glow):**
- Top-right corner: Radial gold `#C4A86B` gradient, 384px diameter, 10% opacity
- Bottom-left corner: Radial dusty rose `#C9A9A6` gradient, 288px diameter, 10% opacity

**Content (all centered on page):**

1. "Welcome to"
   - Font: Outfit, 0.65rem (10.4px)
   - Style: Uppercase, letter-spacing 0.4em
   - Color: Gold `#C4A86B`
   - Margin bottom: 24px

2. "The Signature" (line 1) + "Studio" (line 2, italic)
   - Font: Cormorant Garamond, clamp(2.5rem, 7vw, 5rem), weight 300
   - "The Signature" color: Cream `#FAF7F2`
   - "Studio" color: Gold `#C4A86B`, italic style
   - Line height: 1.1
   - Letter-spacing: 0.08em
   - Margin bottom: 24px

3. Subtitle paragraph
   - Text: "A curated world of chic finds, signature scents, and sparkling things — for women who love beautiful details and intentional living."
   - Font: Outfit, 0.9rem
   - Color: Taupe `#B8A99A`
   - Line height: 1.9
   - Max width: 512px, centered
   - Margin bottom: 48px

4. Email capture form (hero variant — see Section 10)

**Scroll indicator (bottom center):**
- "scroll" text: Outfit 0.6rem, uppercase, letter-spacing 0.2em, `rgba(184,169,154,0.4)`
- Vertical line: 1px wide, 32px tall, fading from taupe to transparent
- Animation: Floats up and down, 3 second loop, ease-in-out, 8px travel distance

**Entrance animation:**
- Everything fades in (opacity 0 → 1) + slides up from 30px below
- Duration: 1.2 seconds
- Staggered delays: "Welcome to" at 0.3s, subtitle at 0.6s, email form at 0.9s

---

### Section 2: Brand Pillars — "One Studio, Three Signatures"

**Background:** Warm White `#FDF9F4`
**Padding:** 96px top/bottom

**Section header (centered):**
- "The Studio Ecosystem" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold
- "One Studio, Three Signatures" — Cormorant Garamond, clamp(1.8rem, 4vw, 2.8rem), weight 300, charcoal

**3-column card grid** (stacks to 1 column on mobile):

Card styling:
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA` (blush)
- Padding: 32px all sides
- No border radius (square corners)
- Hover: lifts up 4px, 500ms transition
- Gap between cards: 32px

Each card contains:
- **Top row:** Emoji icon on left, tag pill on right
- **Tag pill style:** Outfit 0.55rem, uppercase, letter-spacing 0.2em, `1px solid {tagColor}40` border
- **Title:** Cormorant Garamond 1.5rem, weight 400, charcoal
- **Subtitle:** Outfit 0.7rem, uppercase, letter-spacing 0.15em, gold
- **Description:** Outfit 0.85rem, taupe, line-height 1.8

**Card 1 — The Edit:**
- Icon: 🛍️ (shopping bags)
- Tag: "LIVE NOW" — Sage `#B5BFA8`
- Subtitle: "Curated Shopping Finds"
- Description: "Weekly handpicked fashion, beauty, home, and lifestyle products. Every item is tried, loved, or obsessively researched before it makes the edit."
- Links to: /blog (The Edit)

**Card 2 — Signature Scents:**
- Icon: 🕯️ (candle)
- Tag: "COMING SOON" — Dusty Rose `#C9A9A6`
- Subtitle: "Custom Rollerball Perfume Bar"
- Description: "A future bespoke fragrance experience — custom rollerball perfumes for girls' nights, bridal parties, and curated collections available online."
- Links to: /scents

**Card 3 — Signature Sparkle:**
- Icon: 💎 (gem)
- Tag: "COMING SOON" — Gold `#C4A86B`
- Subtitle: "Charm & Permanent Jewelry Bar"
- Description: "A future experiential jewelry destination — permanent bracelets, custom charm bars, and sparkling pop-ups for every celebration."
- Links to: /sparkle

---

### Section 3: Shopping Categories — "This Week's Curated Finds"

**Background:** Cream `#FAF7F2`
**Padding:** 96px top/bottom

**Section header (centered):**
- "Shop by Category" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, warm brown `#8B7355`
- "This Week's Curated Finds" — Cormorant Garamond, clamp(1.8rem, 4vw, 2.5rem), weight 300, charcoal

**4-column grid** (2 columns on mobile), 16px gap:

Each card:
- **Aspect ratio:** 1:1 (square)
- **Gradient background** (unique per card, see below)
- **Content centered** both vertically and horizontally
- **Hover:** lifts 4px up + shadow appears, 500ms transition
- **Emoji:** 2.25rem (text-4xl), hover scales to 110% over 300ms
- **Title:** Cormorant Garamond 1.2rem, charcoal
- **Subtitle:** Outfit 0.7rem, warm brown

| Card | Emoji | Title | Subtitle | Gradient (135deg) |
|------|-------|-------|----------|-------------------|
| 1 | 👗 Dress | Fashion Finds | Chic picks for every season | `#C9A9A6` 40% opacity → `#E8D5CC` 60% opacity |
| 2 | 🌸 Flower | Beauty & Scents | Gourmand perfumes & skincare gems | `#F0E4DA` 80% opacity → `#B8A99A` 30% opacity |
| 3 | 🏡 House | Home Aesthetic | Cozy, curated living spaces | `#B5BFA8` 40% opacity → `#FAF7F2` |
| 4 | ✨ Sparkles | Jewelry & Accessories | Dainty gold, pearls & sparkle | `#C4A86B` 30% opacity → `#F0E4DA` 60% opacity |

All cards link to /blog (The Edit).

---

### Section 4: Email Capture (Full Dark Section)

See Section 10 below for complete specs.

---

## 6. ABOUT PAGE

**Top padding:** 80px (to clear the fixed navbar)
**Background:** Warm White `#FDF9F4`
**Max content width:** 672px, centered

### Header (centered)
- "Nice to Meet You" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold
- "About The Signature Studio" — Cormorant Garamond clamp(2rem, 5vw, 3rem), weight 300, charcoal
- Margin bottom under header: 64px

### Body Text
- Font: Outfit, 0.95rem (15.2px)
- Color: Charcoal `#3A3632`
- Line height: 2.0 (double-spaced)
- Paragraph spacing: 24px margin bottom
- Bold text: Deep Brown `#5C4A3A`, weight 500

### Full Text Content

**Paragraph 1:**
Hi, I'm Sarah — the curator behind The Signature Studio.

**Paragraph 2:**
This space is my creative umbrella and the beginning of a long-held dream. The Signature Studio was created to blend my love for creativity, branding, and entrepreneurship — with the hope of growing into something truly special.

**Paragraph 3:**
Right now, I curate the chicest shopping finds for women who love beautiful things: aesthetic home decor, dainty jewelry, gourmand fragrances, chic fashion pieces, and everything in between. Every product is handpicked, and I only share things I genuinely love.

**Paragraph 4:**
But The Signature Studio is bigger than shopping finds. It's an evolving brand with three pillars: **The Edit** (curated shopping + affiliate finds), **Signature Scents** (future custom rollerball perfume experiences), and **Signature Sparkle** (future charm and permanent jewelry bar). Each branch is inspired by creativity, community, and making meaningful experiences.

**Paragraph 5:**
My biggest dream in life is to be a mom and wife while still building something meaningful of my own — a creative business that allows flexibility, purpose, and fulfillment. The Signature Studio is how I'm making that dream real, one curated find at a time.

**Closing paragraph (italic, warm brown `#8B7355`):**
*Every branch of The Signature Studio is inspired by my creative hobbies, love for marketing and design, and desire to create personal, meaningful experiences — all while supporting other entrepreneurs as they build something special of their own.*

### Social Links Section (centered)
- "Follow the journey" — Outfit 0.7rem, uppercase, letter-spacing 0.2em, taupe
- Three text links side by side with 24px gap: **Pinterest** | **TikTok** | **ShopMy**
  - Outfit 0.8rem, warm brown `#8B7355`
  - Bottom border: `1px solid #F0E4DA` (blush)
  - Hover: 60% opacity, 300ms transition

### Bottom of Page
Full dark email capture section (see Section 10).

---

## 7. SHOP PAGE

**Top padding:** 80px

### Header Section
- **Background:** Cream `#FAF7F2`
- **Padding:** 80px top/bottom
- **All centered**

Content:
- "Shop My Curated Finds" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold
- "The Signature Shop" — Cormorant Garamond clamp(2rem, 5vw, 3rem), weight 300, charcoal, 16px margin bottom
- Subtitle: "Browse all my curated collections on ShopMy. Every product is personally selected and linked with love."
  - Outfit 0.9rem, taupe, line-height 1.8, max-width 512px, 40px margin bottom

**CTA Button:** "BROWSE MY SHOPMY STOREFRONT →"
- Font: Outfit 0.75rem, uppercase, letter-spacing 0.2em
- Background: Charcoal `#3A3632`
- Text: Cream `#FAF7F2`
- Padding: 48px horizontal, 16px vertical
- No border radius (sharp rectangle)
- Hover: 80% opacity, 300ms transition
- Opens in new tab (external link to ShopMy storefront)

### Collections Grid
- **Background:** Warm White `#FDF9F4`
- **Padding:** 64px top/bottom
- **Grid:** 3 columns desktop, 2 columns tablet, 1 column mobile
- **Gap:** 24px

Each collection card:
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA` (blush)
- Padding: 32px all sides
- Text centered
- No border radius
- Hover: lifts 4px up + subtle shadow, 300ms

Card content:
- Emoji: 1.875rem (text-3xl), 16px margin bottom
- Collection name: Cormorant Garamond 1.3rem, charcoal
- Item count: Outfit 0.75rem, taupe

| Collection | Emoji | Count |
|-----------|-------|-------|
| Spring Edit | 🌷 Tulip | 25+ picks |
| Under $50 | 💰 Money Bag | 30+ picks |
| Jewelry & Accessories | ✨ Sparkles | 20+ picks |
| Home & Decor | 🏡 House | 15+ picks |
| Beauty & Scents | 🌸 Flower | 18+ picks |
| Gifts for Her | 🎁 Gift Box | 22+ picks |

### Bottom of Page
Full dark email capture section (see Section 10).

---

## 8. BLOG PAGE (THE EDIT)

**Top padding:** 80px

### Header Section
- **Background:** Cream `#FAF7F2`
- **Padding:** 64px top/bottom
- **Centered**

Content:
- "The Edit — Shopping Blog" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold
- "The Signature Edit" — Cormorant Garamond clamp(2rem, 5vw, 3rem), weight 300, charcoal, 12px margin bottom
- "Curated finds across fashion, beauty, home, and everything aesthetic. Updated weekly."
  - Outfit 0.9rem, taupe, max-width 500px

### Blog Post Grid
- **Background:** Warm White `#FDF9F4`
- **Padding:** 64px top/bottom
- **Grid:** 3 columns desktop, 1 column mobile
- **Gap:** 32px

Each blog post card:
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA` (blush)
- No border radius
- Hover: lifts 4px, 500ms transition

**Image placeholder area (top of card):**
- Height: 192px
- Background: Gradient using tag color at 40% opacity → blush at 40% opacity (135deg)
- Center: Italic serif "S" in Cormorant Garamond 3rem, tag color at 80% opacity

**Content area (bottom of card, 24px padding):**
- **Tag + date row:**
  - Tag pill: Outfit 0.6rem, uppercase, letter-spacing 0.15em, tag color, `1px solid {color}40` border, 8px horizontal padding, 2px vertical
  - Date: Outfit 0.7rem, taupe (format: "Month Day, Year")
  - 12px gap between tag and date
- **Title:** Cormorant Garamond 1.3rem, charcoal, line-height 1.3, 8px margin bottom
- **Description:** Outfit 0.82rem, taupe, line-height 1.7
- **"Read More →"** — Outfit 0.7rem, uppercase, letter-spacing 0.15em, warm brown, 16px margin top
  - Hover: slides right 4px, 300ms transition

### Bottom of Page
Full dark email capture section.

---

## 9. BLOG POST PAGE (Individual Post)

**Top padding:** 80px
**Background:** Warm White `#FDF9F4`
**Max content width:** 768px (max-w-3xl), centered
**Padding:** 64px top/bottom

### Post Header
- **Tag pill + date row** (same styles as blog grid cards)
  - Tag pill: Outfit 0.6rem, uppercase, letter-spacing 0.15em, colored border
  - Date: Outfit 0.75rem, taupe
  - 12px gap, 24px margin bottom
- **Title:** Cormorant Garamond clamp(1.8rem, 4vw, 2.5rem), weight 300, charcoal, line-height 1.2, 24px margin bottom

### Signature Number Rating Badge (appears when post has a rating)
- Centered inside a box: cream `#FAF7F2` background, `1px solid #F0E4DA` border, 24px padding
- 32px margin bottom

**The badge itself (80px diameter for large size):**
- Circular SVG with two overlapping rings:
  - Background ring: 3px stroke, blush `#F0E4DA`
  - Progress ring: 3px stroke, gold `#C4A86B`, fills clockwise proportionally (rating ÷ 10)
- Number in center: Cormorant Garamond 1.8rem, weight 400, charcoal

**Labels below the circle:**
- "Signature Number" — Outfit 0.6rem, uppercase, letter-spacing 0.2em, gold
- Rating label — Outfit 0.7rem, warm brown `#8B7355`, weight 500

**Rating label scale:**
| Rating | Label |
|--------|-------|
| 9.5–10 | Iconic |
| 9–9.4 | Obsessed |
| 8–8.9 | Must-Have |
| 7–7.9 | Love It |
| 6–6.9 | Really Like |
| 5–5.9 | It's Cute |
| 4–4.9 | On the Fence |
| 3–3.9 | Not My Fave |
| 2–2.9 | Skip It |
| 0–1.9 | Hard Pass |

### Affiliate Disclaimer
- Text: "This post may contain affiliate links. I may earn a small commission if you purchase, at no extra cost to you."
- Outfit 0.65rem, `rgba(184,169,154,0.6)`, letter-spacing 0.1em, 24px margin bottom

### Product Cards (2-column grid, 1 column on mobile)
- Gap: 24px
- 40px margin bottom after grid

Each product card:
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA`
- Hover: lifts 4px, 300ms

**Image placeholder (top):**
- Height: 176px
- Background: Gradient blush 60% opacity → soft pink 30% opacity (135deg)
- Center: Italic Cormorant Garamond "S" at 3rem, 30% opacity

**Product tag (top-left corner, if present):**
- Outfit 0.55rem, uppercase, letter-spacing 0.1em
- Background: `rgba(255,255,255,0.9)`
- Color: Warm brown
- Position: 12px from top, 12px from left

**Product info (20px padding):**
- Brand name: Outfit 0.65rem, uppercase, letter-spacing 0.15em, gold, 4px margin bottom
- Product name: Cormorant Garamond 1.15rem, charcoal, 8px margin bottom
- Price: Outfit 0.9rem, warm brown, weight 500 (left-aligned)
- "Shop Now" button (right-aligned): Outfit 0.65rem, uppercase, letter-spacing 0.15em, charcoal bg, cream text, 16px H padding, 8px V padding

**Inline Signature Number (if product has a rating):**
- Appears below price row
- Separated by 1px blush top border, 12px padding top
- Uses small size (56px diameter circle)

### Blog Post Body Content (Prose Styles)

**Headings (h1–h4):**
- Font: Cormorant Garamond, weight 400, charcoal
- Line height: 1.3
- Margin: 2em top, 0.5em bottom
- h1: 2rem | h2: 1.6rem | h3: 1.3rem

**Paragraphs:**
- Font: Outfit 0.95rem, charcoal
- Line height: 1.9
- Margin bottom: 1.5em

**Links:**
- Color: Warm brown `#8B7355`
- Style: Underline, 3px underline offset
- Hover: Gold `#C4A86B`, 300ms transition

**Lists (ul/ol):**
- Font: Outfit 0.95rem, charcoal
- Line height: 1.9
- Left padding: 1.5em
- Item spacing: 0.5em margin bottom

**Blockquotes:**
- Left border: 3px solid gold `#C4A86B`
- Left padding: 1.5em
- Margin: 2em top and bottom
- Font: Cormorant Garamond 1.2rem, italic, warm brown `#8B7355`

**Images:**
- Max width: 100%
- No border radius
- Margin: 2em top and bottom

**Horizontal rules:**
- 1px solid blush `#F0E4DA`
- Margin: 2em top and bottom

**Bold text:**
- Color: Deep brown `#5C4A3A`
- Weight: 500

### Mid-Post Email Capture Box
- Background: Gradient blush 60% opacity → cream (135deg)
- Border: `1px solid #F0E4DA`
- Padding: 32px
- Text centered
- Margin: 48px top and bottom

Content:
- "Love these finds?" — Cormorant Garamond 1.5rem, charcoal, 8px margin bottom
- "Get my weekly Signature Edit delivered free — plus a spring shopping guide with 50+ picks."
  - Outfit 0.85rem, taupe, 20px margin bottom
- Email capture form (hero variant)

---

## 10. EMAIL CAPTURE FORM

### Hero Variant (compact inline form)

Used in: Home hero, mid-post capture box, coming soon pages

**Label above form:**
- "Join the signature edit — free weekly curated finds"
- Outfit 0.75rem, uppercase, letter-spacing 0.2em, taupe, centered

**Form (input + button on same row):**
- Input field:
  - Placeholder: "your email"
  - Font: Outfit 0.85rem, letter-spacing 0.05em
  - Background: `rgba(255,255,255,0.8)`
  - Border: `1px solid #F0E4DA` (no right border — connects to button)
  - Padding: 20px horizontal, 14px vertical
  - Placeholder color: `rgba(184,169,154,0.5)`

- Submit button: "JOIN FREE"
  - Font: Outfit 0.7rem, uppercase, letter-spacing 0.2em
  - Background: Charcoal `#3A3632`
  - Text: Cream `#FAF7F2`
  - Padding: 24px horizontal, 14px vertical
  - No border
  - Hover: 80% opacity

**Success state (replaces form after submit):**
- "Welcome to The Signature Edit" — Cormorant Garamond 1.2rem, warm brown
- "Check your inbox for your free spring guide" — Outfit 0.75rem, taupe

---

### Full Dark Section Variant (standalone footer section)

Used at: Bottom of Home, About, Shop, Blog, Archive pages

**Background:** Gradient 135deg from charcoal `#3A3632` → deep brown `#5C4A3A`
**Padding:** 80px top/bottom
**Max content width:** 672px, centered

Content:
1. "The Signature Edit" — Outfit 0.7rem, uppercase, letter-spacing 0.3em, gold, 16px margin bottom
2. "Your Weekly Dose of Curated Finds" — Cormorant Garamond clamp(1.8rem, 4vw, 2.5rem), weight 300, cream, line-height 1.3, 16px margin bottom
3. Description paragraph:
   - "Every week I handpick the chicest new arrivals, hidden gems, and must-have products — delivered straight to your inbox before they sell out. Plus, get my free Spring Shopping Guide with 50+ curated picks when you join."
   - Outfit 0.85rem, taupe, line-height 1.8, 32px margin bottom

**Form (stacks vertically on mobile, horizontal on tablet+):**
- Max width: 512px, centered
- Gap: 12px

- Input field:
  - Placeholder: "Enter your email"
  - Font: Outfit 0.85rem
  - Background: `rgba(255,255,255,0.08)`
  - Border: `1px solid rgba(196,168,107,0.3)` (gold at 30%)
  - Text color: Cream
  - Letter-spacing: 0.05em
  - Padding: 20px horizontal, 14px vertical

- Submit button: "GET THE EDIT"
  - Font: Outfit 0.7rem, uppercase, letter-spacing 0.2em, weight 500
  - Background: Gold `#C4A86B`
  - Text: Charcoal `#3A3632`
  - No border
  - Padding: 32px horizontal, 14px vertical
  - Hover: 90% opacity

**Disclaimer text (below form):**
- "No spam. Unsubscribe anytime. Your taste is safe with me."
- Outfit 0.65rem, `rgba(184,169,154,0.5)`, letter-spacing 0.1em, 16px margin top

**Success state:**
- "You're in! Check your inbox for your free guide" — Cormorant Garamond 1.3rem, gold

---

## 11. ARCHIVE PAGE

**Top padding:** 80px

### Header Section
- **Background:** Cream `#FAF7F2`
- **Padding:** 64px top/bottom, centered

Content:
- "Browse by Date" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold
- "The Archive" — Cormorant Garamond clamp(2rem, 5vw, 3rem), weight 300, charcoal, 12px margin bottom
- "Every curated find, sorted by month and year. Never miss a past edit."
  - Outfit 0.9rem, taupe, max-width 500px

### Archive Groups Section
- **Background:** Warm White `#FDF9F4`
- **Padding:** 64px top/bottom
- **Max width:** 896px (max-w-4xl), centered

Each month/year group:
- **48px margin bottom** between groups

**Group header row:**
- Month/Year text: Cormorant Garamond 1.8rem, weight 300, charcoal (e.g., "April 2026")
- Post count badge: Outfit 0.6rem, uppercase, letter-spacing 0.15em, taupe, `1px solid #F0E4DA` border, 12px H padding, 4px V padding
- 16px gap between text and badge
- Bottom border: `1px solid #F0E4DA`, 12px padding bottom, 24px margin bottom

**Post rows (within each group):**
- 16px gap between rows
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA`
- Padding: 24px
- Layout: Horizontal flex (date badge | post info | arrow)
- Hover: lifts 2px + subtle shadow, 300ms

**Date badge (left side):**
- 56px × 56px square
- Background: Tag color at 20% opacity
- Border: `1px solid {tagColor}` at 30% opacity
- Day number: Cormorant Garamond 1.2rem, charcoal, line-height 1
- Month abbreviation: Outfit 0.5rem, uppercase, letter-spacing 0.1em, taupe

**Post info (center):**
- Tag pill: Outfit 0.55rem, uppercase, letter-spacing 0.1em, tag color, `1px solid {color}40` border
- Title: Cormorant Garamond 1.2rem, charcoal, line-height 1.3, 4px margin bottom
- Description: Outfit 0.8rem, taupe, line-height 1.6

**Arrow (right side):**
- "→" character
- Outfit 0.8rem, warm brown
- Hover: slides right 4px, 300ms transition

### Bottom of Page
Full dark email capture section.

---

## 12. SIGNATURE SCENTS PAGE (Coming Soon)

**Top padding:** 80px
**Background:** Gradient 160deg from warm white `#FDF9F4` → cream `#FAF7F2`
**Min height:** Full viewport
**Content: Max width 576px, centered**

Layout (all centered):
1. 🕯️ Candle emoji — 3.75rem (text-6xl), 32px margin bottom
2. "Coming Soon" — Outfit 0.65rem, uppercase, letter-spacing 0.3em, gold, 16px margin bottom
3. "Signature Scents" — Cormorant Garamond clamp(2rem, 5vw, 3.5rem), weight 300, charcoal, 8px margin bottom
4. "A Bespoke Fragrance Experience" — Cormorant Garamond 1.2rem, italic, warm brown, 32px margin bottom
5. Description paragraph:
   - "Custom rollerball perfume bars for girls' nights, bridal showers, birthday parties, and curated collections online. Because your signature scent should be as unique as you are."
   - Outfit 0.9rem, taupe, line-height 1.9, 40px margin bottom

### "What to Expect" Box
- Background: Cream `#FAF7F2`
- Border: `1px solid #F0E4DA`
- Padding: 24px
- Left-aligned text
- Max width: 384px, centered
- 48px margin bottom

Content:
- "What to Expect" — Outfit 0.65rem, uppercase, letter-spacing 0.2em, warm brown, 16px margin bottom
- 5 bullet items, each with:
  - Gold diamond bullet (✦ character, color `#C4A86B`)
  - 12px gap between bullet and text
  - Text: Outfit 0.85rem, charcoal
  - 12px margin bottom between items

**Bullet items:**
1. Custom rollerball perfume creation
2. Pop-up scent bars at local events
3. Bridal party fragrance experiences
4. Curated signature scent collections online
5. Fragrance layering workshops

### Email Signup
- "Be the first to know when we launch:" — Outfit 0.75rem, letter-spacing 0.1em, taupe, 20px margin bottom
- Hero variant email capture form

---

## 13. SIGNATURE SPARKLE PAGE (Coming Soon)

**Identical layout to Signature Scents page** with these differences:

- Emoji: 💎 Gem (instead of candle)
- Title: "Signature Sparkle" (instead of Signature Scents)
- Subtitle: "A Charm & Permanent Jewelry Bar"
- Description: "Permanent bracelets, custom charm building, and sparkling pop-ups for every celebration. The kind of jewelry that stays with you — literally."

**"What to Expect" bullet items:**
1. Permanent welded bracelets & anklets
2. Custom charm bar experiences
3. Birthday & bachelorette pop-ups
4. Curated collections available online
5. Local events & girls' night experiences

---

## 14. FOOTER

**Background:** Charcoal `#3A3632`
**Padding:** 64px top/bottom, 24px left/right
**Max width:** 1152px, centered

### Main Footer Grid
4 columns on desktop, 1 column on mobile. Gap: 48px.

**Column 1 — Brand:**
- Logo: "THE SIGNATURE STUDIO" in Cormorant Garamond, light/cream color, small size (text-lg)
- Tagline (16px below logo): "Curating the chicest finds for women who love beautiful things."
  - Outfit 0.8rem, taupe, line-height 1.8

**Column 2 — Explore:**
- Column title: "Explore"
- Links: The Edit (Blog) | Shop My Finds | Archive | About

**Column 3 — The Studio:**
- Column title: "The Studio"
- Links: Signature Scents | Signature Sparkle | Digital Products

**Column 4 — Connect:**
- Column title: "Connect"
- Links: Pinterest | TikTok | Email Newsletter

**Column title style:** Outfit 0.65rem, uppercase, letter-spacing 0.25em, gold `#C4A86B`, 16px margin bottom

**Link style:** Outfit 0.8rem, taupe `#B8A99A`, no underline, 12px margin bottom between links, hover: 70% opacity, 300ms transition

### Footer Bottom Bar
- Top border: `1px solid rgba(184,169,154,0.2)`
- Padding top: 32px
- Text centered

**Copyright text:**
"© 2026 The Signature Studio. All rights reserved. This site contains affiliate links."
- Outfit 0.65rem, `rgba(184,169,154,0.4)`, letter-spacing 0.15em

---

## 15. LOGO SPECIFICATIONS

**Primary text:** "THE SIGNATURE STUDIO"
- Font: Cormorant Garamond, weight 300 (Light)
- Letter-spacing: 0.35em
- All uppercase

**Tagline (shown at medium and large sizes only):** "curated by sarah"
- Font: Outfit, extra-small (0.75rem), uppercase
- Letter-spacing: 0.3em
- Appears just below the main text

**Color modes:**
- Light mode (used on dark backgrounds like hero/footer): Text = Cream `#FAF7F2`, Tagline = Taupe `#B8A99A`
- Dark mode (used on light backgrounds): Text = Charcoal `#3A3632`, Tagline = Warm Brown `#8B7355`

**Sizes:**
- Small: 1.125rem (18px) — used in navbar and footer
- Medium: 1.5rem (24px) — general use
- Large: 2.25rem (36px) — hero or feature areas

---

## 16. BUTTONS CHEAT SHEET

All buttons have **0px border radius** (sharp rectangles). All transitions: 300ms.

### Primary Dark Button
- Examples: "Shop Now", "Browse My ShopMy Storefront →"
- Font: Outfit 0.65–0.75rem, uppercase, letter-spacing 0.15–0.2em
- Background: Charcoal `#3A3632`
- Text: Cream `#FAF7F2`
- Padding: 16–48px horizontal, 8–16px vertical
- Border: None
- Hover: 80% opacity

### Gold CTA Button
- Example: "Get the Edit"
- Font: Outfit 0.7rem, uppercase, letter-spacing 0.2em, weight 500
- Background: Gold `#C4A86B`
- Text: Charcoal `#3A3632`
- Padding: 32px horizontal, 14px vertical
- Border: None
- Hover: 90% opacity

### Hero Email Button
- Example: "Join Free"
- Font: Outfit 0.7rem, uppercase, letter-spacing 0.2em
- Background: Charcoal `#3A3632`
- Text: Cream `#FAF7F2`
- Padding: 24px horizontal, 14px vertical
- Border: None
- Hover: 80% opacity

### Tag Pills (not clickable, decorative labels)
- Font: Outfit 0.55–0.6rem, uppercase, letter-spacing 0.1–0.2em
- Background: Transparent
- Text: Tag-specific color (sage/dusty rose/gold/etc.)
- Padding: 8–12px horizontal, 4px vertical
- Border: `1px solid {tagColor}` at 40% opacity

---

## 17. SQUARESPACE-SPECIFIC SETUP TIPS

### Template Choice
Use a blank template or one from the **Brine** family — they give you the most layout control and Custom CSS flexibility.

### Custom CSS You'll Need
Add these in **Design > Custom CSS**:

**Remove all border radius (site uses sharp corners everywhere):**
```css
.sqs-block, .sqs-block-content, .form-wrapper, input, button, .sqs-gallery-design-grid-slide {
  border-radius: 0 !important;
}
```

**Text selection color:**
```css
::selection {
  background: #F0E4DA;
  color: #3A3632;
}
```

**Custom scrollbar:**
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #FAF7F2; }
::-webkit-scrollbar-thumb { background: rgba(184,169,154,0.4); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #B8A99A; }
```

**Hover lift effect for cards:**
```css
.your-card-class:hover {
  transform: translateY(-4px);
  transition: all 0.5s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
```

### Blog Setup
- Use Squarespace's built-in **Blog** feature for "The Edit"
- Set blog layout to **Grid**, 3 columns
- Style the blog cards to match the specs in Section 8

### Newsletter/Email Capture
- Use Squarespace's **Newsletter Block** or **Form Block**
- Alternatively, connect MailerLite directly via a custom form action URL
- Style the form inputs and buttons to match Section 10 specs

### Navigation
- Set up pages through **Pages > Navigation**
- Use Custom CSS to achieve the uppercase, letter-spacing, and hover underline effects
- The frosted glass effect on scroll will require Custom CSS with `backdrop-filter: blur(20px)`

### Font Size Notes
- The site uses very small UI text (10–12px range) for labels and tags
- Squarespace's minimum font sizes may be larger, so override with Custom CSS where needed
- Use `clamp()` in Custom CSS for responsive heading sizes

### Page Structure
- Each section described above = one Squarespace **Section** or **Code Block**
- Use Squarespace's grid/column features for multi-column layouts
- For complex gradient backgrounds, use **Code Blocks** with custom HTML/CSS

---

## 18. COMPLETE PAGE MAP

| Page | URL | Description |
|------|-----|-------------|
| Home | / | Hero + Brand Pillars + Categories + Email Capture |
| The Edit (Blog) | /blog | Blog grid listing all posts |
| Blog Post | /blog/[post-name] | Individual blog post with products + rating |
| Shop | /shop | Collection grid + ShopMy link |
| Archive | /archive | Posts grouped by month/year |
| About | /about | Sarah's story + social links |
| Signature Scents | /scents | Coming soon page |
| Signature Sparkle | /sparkle | Coming soon page |

---

*This document contains every design specification needed to recreate The Signature Studio identically in Squarespace. All colors, fonts, sizes, spacing, animations, and text content are extracted directly from the source code.*
