// FRAMER CODE COMPONENT: Footer
// Paste into: Assets > Code > Create Code File > name it "FooterSection"

import { addPropertyControls, ControlType } from "framer"

const BRAND = {
    cream: "#FAF7F2", blush: "#F0E4DA", taupe: "#B8A99A",
    warmBrown: "#8B7355", charcoal: "#3A3632", gold: "#C4A86B",
}

export default function FooterSection(props) {
    const columns = [
        { title: "Explore", links: [
            { label: "The Edit (Blog)", href: "/blog" },
            { label: "Shop My Finds", href: "/shop" },
            { label: "Archive", href: "/archive" },
            { label: "About", href: "/about" },
        ]},
        { title: "The Studio", links: [
            { label: "Signature Scents", href: "/scents" },
            { label: "Signature Sparkle", href: "/sparkle" },
            { label: "Digital Products", href: "/shop" },
        ]},
        { title: "Connect", links: [
            { label: "Pinterest", href: props.pinterestUrl || "#" },
            { label: "TikTok", href: props.tiktokUrl || "#" },
            { label: "Email Newsletter", href: "#" },
        ]},
    ]

    return (
        <div style={{ padding: "64px 24px", background: BRAND.charcoal, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
                    {/* Brand column */}
                    <div>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", fontWeight: 300, letterSpacing: "0.35em", color: BRAND.cream }}>THE SIGNATURE STUDIO</span>
                        <p style={{ marginTop: 16, fontSize: "0.8rem", color: BRAND.taupe, lineHeight: 1.8 }}>{props.tagline}</p>
                    </div>

                    {/* Link columns */}
                    {columns.map((col, i) => (
                        <div key={i}>
                            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 16 }}>{col.title}</p>
                            {col.links.map((link, j) => (
                                <a key={j} href={link.href} style={{ display: "block", marginBottom: 12, fontSize: "0.8rem", color: BRAND.taupe, textDecoration: "none" }}>{link.label}</a>
                            ))}
                        </div>
                    ))}
                </div>

                <div style={{ borderTop: "1px solid rgba(184,169,154,0.2)", paddingTop: 32, textAlign: "center" }}>
                    <p style={{ fontSize: "0.65rem", color: "rgba(184,169,154,0.4)", letterSpacing: "0.15em" }}>{props.copyright}</p>
                </div>
            </div>
        </div>
    )
}

addPropertyControls(FooterSection, {
    tagline: { type: ControlType.String, title: "Tagline", defaultValue: "Curating the chicest finds for women who love beautiful things." },
    copyright: { type: ControlType.String, title: "Copyright", defaultValue: "© 2026 The Signature Studio. All rights reserved. This site contains affiliate links." },
    pinterestUrl: { type: ControlType.String, title: "Pinterest URL", defaultValue: "#" },
    tiktokUrl: { type: ControlType.String, title: "TikTok URL", defaultValue: "#" },
})
