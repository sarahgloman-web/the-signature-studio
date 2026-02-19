// FRAMER CODE COMPONENT: Brand Pillars — "One Studio, Three Signatures"
// Paste into: Assets > Code > Create Code File > name it "BrandPillars"

import { addPropertyControls, ControlType } from "framer"

const BRAND = {
    cream: "#FAF7F2", warmWhite: "#FDF9F4", blush: "#F0E4DA",
    taupe: "#B8A99A", warmBrown: "#8B7355", charcoal: "#3A3632",
    gold: "#C4A86B", sage: "#B5BFA8", dustyRose: "#C9A9A6",
}

export default function BrandPillars(props) {
    const pillars = [
        { icon: "🛍️", title: props.card1Title, sub: props.card1Sub, desc: props.card1Desc, tag: "LIVE NOW", tagColor: BRAND.sage, href: props.card1Link },
        { icon: "🕯️", title: props.card2Title, sub: props.card2Sub, desc: props.card2Desc, tag: "COMING SOON", tagColor: BRAND.dustyRose, href: props.card2Link },
        { icon: "💎", title: props.card3Title, sub: props.card3Sub, desc: props.card3Desc, tag: "COMING SOON", tagColor: BRAND.gold, href: props.card3Link },
    ]

    return (
        <div style={{ padding: "96px 24px", background: BRAND.warmWhite, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 12 }}>{props.sectionLabel}</p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300, color: BRAND.charcoal }}>{props.sectionTitle}</h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
                    {pillars.map((p, i) => (
                        <a key={i} href={p.href || "#"} style={{ display: "block", padding: 32, background: BRAND.cream, border: `1px solid ${BRAND.blush}`, textDecoration: "none", transition: "transform 0.5s", cursor: "pointer" }}
                           onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                           onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                                <span style={{ fontSize: "1.875rem" }}>{p.icon}</span>
                                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: p.tagColor, border: `1px solid ${p.tagColor}40`, padding: "4px 12px" }}>{p.tag}</span>
                            </div>
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: BRAND.charcoal, marginBottom: 4 }}>{p.title}</h3>
                            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 16 }}>{p.sub}</p>
                            <p style={{ fontSize: "0.85rem", color: BRAND.taupe, lineHeight: 1.8 }}>{p.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

addPropertyControls(BrandPillars, {
    sectionLabel: { type: ControlType.String, title: "Section Label", defaultValue: "The Studio Ecosystem" },
    sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "One Studio, Three Signatures" },
    card1Title: { type: ControlType.String, title: "Card 1 Title", defaultValue: "The Edit" },
    card1Sub: { type: ControlType.String, title: "Card 1 Subtitle", defaultValue: "Curated Shopping Finds" },
    card1Desc: { type: ControlType.String, title: "Card 1 Description", defaultValue: "Weekly handpicked fashion, beauty, home, and lifestyle products. Every item is tried, loved, or obsessively researched before it makes the edit." },
    card1Link: { type: ControlType.String, title: "Card 1 Link", defaultValue: "/blog" },
    card2Title: { type: ControlType.String, title: "Card 2 Title", defaultValue: "Signature Scents" },
    card2Sub: { type: ControlType.String, title: "Card 2 Subtitle", defaultValue: "Custom Rollerball Perfume Bar" },
    card2Desc: { type: ControlType.String, title: "Card 2 Description", defaultValue: "A future bespoke fragrance experience — custom rollerball perfumes for girls' nights, bridal parties, and curated collections available online." },
    card2Link: { type: ControlType.String, title: "Card 2 Link", defaultValue: "/scents" },
    card3Title: { type: ControlType.String, title: "Card 3 Title", defaultValue: "Signature Sparkle" },
    card3Sub: { type: ControlType.String, title: "Card 3 Subtitle", defaultValue: "Charm & Permanent Jewelry Bar" },
    card3Desc: { type: ControlType.String, title: "Card 3 Description", defaultValue: "A future experiential jewelry destination — permanent bracelets, custom charm bars, and sparkling pop-ups for every celebration." },
    card3Link: { type: ControlType.String, title: "Card 3 Link", defaultValue: "/sparkle" },
})
