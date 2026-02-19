// FRAMER CODE COMPONENT: About Page Content
// Paste into: Assets > Code > Create Code File > name it "AboutSection"

import { addPropertyControls, ControlType } from "framer"

const BRAND = {
    cream: "#FAF7F2", warmWhite: "#FDF9F4", blush: "#F0E4DA",
    taupe: "#B8A99A", warmBrown: "#8B7355", charcoal: "#3A3632", gold: "#C4A86B",
}

export default function AboutSection(props) {
    return (
        <div style={{ padding: "96px 24px", background: BRAND.warmWhite, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 672, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 12 }}>{props.label}</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal }}>{props.heading}</h1>
                </div>

                <div style={{ fontSize: "0.95rem", color: BRAND.charcoal, lineHeight: 2 }}>
                    {props.bodyText.split("\n\n").map((paragraph, i) => (
                        <p key={i} style={{ marginBottom: 24, ...(i === props.bodyText.split("\n\n").length - 1 ? { color: BRAND.warmBrown, fontStyle: "italic" } : {}) }}>{paragraph}</p>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: 32 }}>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.taupe, marginBottom: 12 }}>Follow the journey</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
                        {[
                            { label: "Pinterest", url: props.pinterestUrl },
                            { label: "TikTok", url: props.tiktokUrl },
                            { label: "ShopMy", url: props.shopmyUrl },
                        ].map((p) => (
                            <a key={p.label} href={p.url || "#"} target="_blank" rel="noopener noreferrer"
                                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.warmBrown, borderBottom: `1px solid ${BRAND.blush}`, paddingBottom: 2, textDecoration: "none", cursor: "pointer" }}>
                                {p.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

addPropertyControls(AboutSection, {
    label: { type: ControlType.String, title: "Label", defaultValue: "Nice to Meet You" },
    heading: { type: ControlType.String, title: "Heading", defaultValue: "About The Signature Studio" },
    bodyText: { type: ControlType.String, title: "Body Text (use double newlines for paragraphs)", defaultValue: "Hi, I'm Sarah — the curator behind The Signature Studio.\n\nThis space is my creative umbrella and the beginning of a long-held dream. The Signature Studio was created to blend my love for creativity, branding, and entrepreneurship — with the hope of growing into something truly special.\n\nRight now, I curate the chicest shopping finds for women who love beautiful things: aesthetic home decor, dainty jewelry, gourmand fragrances, chic fashion pieces, and everything in between. Every product is handpicked, and I only share things I genuinely love.\n\nBut The Signature Studio is bigger than shopping finds. It's an evolving brand with three pillars: The Edit (curated shopping + affiliate finds), Signature Scents (future custom rollerball perfume experiences), and Signature Sparkle (future charm and permanent jewelry bar). Each branch is inspired by creativity, community, and making meaningful experiences.\n\nMy biggest dream in life is to be a mom and wife while still building something meaningful of my own — a creative business that allows flexibility, purpose, and fulfillment. The Signature Studio is how I'm making that dream real, one curated find at a time.\n\nEvery branch of The Signature Studio is inspired by my creative hobbies, love for marketing and design, and desire to create personal, meaningful experiences — all while supporting other entrepreneurs as they build something special of their own.", displayTextArea: true },
    pinterestUrl: { type: ControlType.String, title: "Pinterest URL", defaultValue: "#" },
    tiktokUrl: { type: ControlType.String, title: "TikTok URL", defaultValue: "#" },
    shopmyUrl: { type: ControlType.String, title: "ShopMy URL", defaultValue: "#" },
})
