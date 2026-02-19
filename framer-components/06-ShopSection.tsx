// FRAMER CODE COMPONENT: Shop Page
// Paste into: Assets > Code > Create Code File > name it "ShopSection"

import { addPropertyControls, ControlType } from "framer"

const BRAND = {
    cream: "#FAF7F2", warmWhite: "#FDF9F4", blush: "#F0E4DA",
    taupe: "#B8A99A", charcoal: "#3A3632", gold: "#C4A86B",
}

export default function ShopSection(props) {
    const collections = [
        { name: "Spring Edit", emoji: "🌷", count: "25+ picks" },
        { name: "Under $50", emoji: "💰", count: "30+ picks" },
        { name: "Jewelry & Accessories", emoji: "✨", count: "20+ picks" },
        { name: "Home & Decor", emoji: "🏡", count: "15+ picks" },
        { name: "Beauty & Scents", emoji: "🌸", count: "18+ picks" },
        { name: "Gifts for Her", emoji: "🎁", count: "22+ picks" },
    ]

    return (
        <div style={{ fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>

            {/* Header */}
            <div style={{ padding: "80px 24px", textAlign: "center", background: BRAND.cream }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 12 }}>{props.label}</p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: 16 }}>{props.heading}</h1>
                <p style={{ fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.8, maxWidth: 512, margin: "0 auto 40px" }}>{props.subtitle}</p>
                <a href={props.storefrontUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-block", padding: "16px 48px", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", background: BRAND.charcoal, color: BRAND.cream, textDecoration: "none", cursor: "pointer" }}>
                    {props.buttonText}
                </a>
            </div>

            {/* Collections Grid */}
            <div style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
                <div style={{ maxWidth: 1024, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
                    {collections.map((col, i) => (
                        <div key={i} style={{ padding: 32, textAlign: "center", background: BRAND.cream, border: `1px solid ${BRAND.blush}`, cursor: "pointer", transition: "transform 0.3s" }}
                             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                            <span style={{ fontSize: "1.875rem", display: "block", marginBottom: 16 }}>{col.emoji}</span>
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: BRAND.charcoal, marginBottom: 4 }}>{col.name}</h3>
                            <p style={{ fontSize: "0.75rem", color: BRAND.taupe }}>{col.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

addPropertyControls(ShopSection, {
    label: { type: ControlType.String, title: "Label", defaultValue: "Shop My Curated Finds" },
    heading: { type: ControlType.String, title: "Heading", defaultValue: "The Signature Shop" },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: "Browse all my curated collections on ShopMy. Every product is personally selected and linked with love." },
    buttonText: { type: ControlType.String, title: "Button Text", defaultValue: "Browse My ShopMy Storefront →" },
    storefrontUrl: { type: ControlType.String, title: "Storefront URL", defaultValue: "https://shopmy.us/collections/your-storefront" },
})
