// FRAMER CODE COMPONENT: Coming Soon Page (Scents or Sparkle)
// Paste into: Assets > Code > Create Code File > name it "ComingSoon"

import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const BRAND = {
    cream: "#FAF7F2", warmWhite: "#FDF9F4", blush: "#F0E4DA",
    taupe: "#B8A99A", warmBrown: "#8B7355", charcoal: "#3A3632", gold: "#C4A86B",
}

export default function ComingSoon(props) {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const details = props.bulletPoints.split("\n").filter(Boolean)

    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "96px 24px", background: `linear-gradient(160deg, ${BRAND.warmWhite}, ${BRAND.cream})`, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 576, margin: "0 auto", textAlign: "center" }}>
                <span style={{ fontSize: "3.75rem", display: "block", marginBottom: 32 }}>{props.emoji}</span>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 16 }}>Coming Soon</p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: 8 }}>{props.title}</h1>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontStyle: "italic", color: BRAND.warmBrown, marginBottom: 32 }}>{props.tagline}</p>
                <p style={{ fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.9, marginBottom: 40 }}>{props.description}</p>

                {/* What to Expect */}
                <div style={{ textAlign: "left", maxWidth: 384, margin: "0 auto 48px", padding: 24, background: BRAND.cream, border: `1px solid ${BRAND.blush}` }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.warmBrown, marginBottom: 16 }}>What to Expect</p>
                    {details.map((d, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                            <span style={{ color: BRAND.gold }}>✦</span>
                            <span style={{ fontSize: "0.85rem", color: BRAND.charcoal }}>{d}</span>
                        </div>
                    ))}
                </div>

                {/* Email */}
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: BRAND.taupe, marginBottom: 20 }}>Be the first to know when we launch:</p>
                {!submitted ? (
                    <div style={{ display: "flex", maxWidth: 448, margin: "0 auto" }}>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your email"
                            style={{ flex: 1, padding: "14px 20px", fontSize: "0.85rem", background: "rgba(255,255,255,0.8)", border: `1px solid ${BRAND.blush}`, borderRight: "none", color: BRAND.charcoal, outline: "none", fontFamily: "'Outfit', sans-serif" }} />
                        <button onClick={() => email.includes("@") && setSubmitted(true)}
                            style={{ padding: "14px 24px", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", background: BRAND.charcoal, color: BRAND.cream, border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Join Free</button>
                    </div>
                ) : (
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: BRAND.warmBrown }}>Welcome to The Signature Edit</p>
                )}
            </div>
        </div>
    )
}

addPropertyControls(ComingSoon, {
    emoji: { type: ControlType.String, title: "Emoji", defaultValue: "🕯️" },
    title: { type: ControlType.String, title: "Title", defaultValue: "Signature Scents" },
    tagline: { type: ControlType.String, title: "Tagline", defaultValue: "A Bespoke Fragrance Experience" },
    description: { type: ControlType.String, title: "Description", defaultValue: "Custom rollerball perfume bars for girls' nights, bridal showers, birthday parties, and curated collections online. Because your signature scent should be as unique as you are." },
    bulletPoints: { type: ControlType.String, title: "Bullet Points (one per line)", defaultValue: "Custom rollerball perfume creation\nPop-up scent bars at local events\nBridal party fragrance experiences\nCurated signature scent collections online\nFragrance layering workshops", displayTextArea: true },
})
