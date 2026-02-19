// FRAMER CODE COMPONENT: Shopping Categories Grid
// Paste into: Assets > Code > Create Code File > name it "ShoppingCategories"

import { addPropertyControls, ControlType } from "framer"

const BRAND = {
    cream: "#FAF7F2", blush: "#F0E4DA", taupe: "#B8A99A",
    warmBrown: "#8B7355", charcoal: "#3A3632", gold: "#C4A86B",
    softPink: "#E8D5CC", sage: "#B5BFA8", dustyRose: "#C9A9A6",
}

export default function ShoppingCategories(props) {
    const cats = [
        { title: props.cat1Title, sub: props.cat1Sub, emoji: "👗", gradient: `linear-gradient(135deg, ${BRAND.dustyRose}40, ${BRAND.softPink}60)` },
        { title: props.cat2Title, sub: props.cat2Sub, emoji: "🌸", gradient: `linear-gradient(135deg, ${BRAND.blush}80, ${BRAND.taupe}30)` },
        { title: props.cat3Title, sub: props.cat3Sub, emoji: "🏡", gradient: `linear-gradient(135deg, ${BRAND.sage}40, ${BRAND.cream})` },
        { title: props.cat4Title, sub: props.cat4Sub, emoji: "✨", gradient: `linear-gradient(135deg, ${BRAND.gold}30, ${BRAND.blush}60)` },
    ]

    return (
        <div style={{ padding: "96px 24px", background: BRAND.cream, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.warmBrown, marginBottom: 12 }}>{props.sectionLabel}</p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.charcoal }}>{props.sectionTitle}</h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                    {cats.map((cat, i) => (
                        <a key={i} href={props.categoryLink || "/blog"} style={{ background: cat.gradient, aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textDecoration: "none", transition: "transform 0.5s, box-shadow 0.5s", cursor: "pointer" }}
                           onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)" }}
                           onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}>
                            <span style={{ fontSize: "2.25rem", marginBottom: 16, display: "block", transition: "transform 0.3s" }}>{cat.emoji}</span>
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: BRAND.charcoal, marginBottom: 4, textAlign: "center" }}>{cat.title}</h3>
                            <p style={{ fontSize: "0.7rem", color: BRAND.warmBrown, textAlign: "center" }}>{cat.sub}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

addPropertyControls(ShoppingCategories, {
    sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "Shop by Category" },
    sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "This Week's Curated Finds" },
    categoryLink: { type: ControlType.String, title: "Category Link URL", defaultValue: "/blog" },
    cat1Title: { type: ControlType.String, title: "Cat 1 Title", defaultValue: "Fashion Finds" },
    cat1Sub: { type: ControlType.String, title: "Cat 1 Subtitle", defaultValue: "Chic picks for every season" },
    cat2Title: { type: ControlType.String, title: "Cat 2 Title", defaultValue: "Beauty & Scents" },
    cat2Sub: { type: ControlType.String, title: "Cat 2 Subtitle", defaultValue: "Gourmand perfumes & skincare gems" },
    cat3Title: { type: ControlType.String, title: "Cat 3 Title", defaultValue: "Home Aesthetic" },
    cat3Sub: { type: ControlType.String, title: "Cat 3 Subtitle", defaultValue: "Cozy, curated living spaces" },
    cat4Title: { type: ControlType.String, title: "Cat 4 Title", defaultValue: "Jewelry & Accessories" },
    cat4Sub: { type: ControlType.String, title: "Cat 4 Subtitle", defaultValue: "Dainty gold, pearls & sparkle" },
})
