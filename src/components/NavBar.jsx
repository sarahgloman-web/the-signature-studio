"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "The Edit" },
  { href: "/shop", label: "Shop" },
  { href: "/archive", label: "Archive" },
  { href: "/scents", label: "Signature Scents" },
  { href: "/sparkle", label: "Signature Sparkle" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${BRAND.blush}` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" light={!scrolled && isHome} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:
                  pathname === link.href
                    ? BRAND.warmBrown
                    : scrolled || !isHome
                    ? BRAND.charcoal
                    : BRAND.cream,
                transition: "color 0.3s",
                textDecoration: "none",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                style={{
                  width: pathname === link.href ? "100%" : "0%",
                  background: BRAND.gold,
                }}
              />
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ width: "0%", background: BRAND.taupe }}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", padding: "8px" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{
                background:
                  scrolled || !isHome ? BRAND.charcoal : BRAND.cream,
                transform: menuOpen
                  ? i === 0
                    ? "rotate(45deg) translate(3px, 5px)"
                    : i === 1
                    ? "scaleX(0)"
                    : "rotate(-45deg) translate(3px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-8 px-6 flex flex-col items-center gap-6"
          style={{
            background: "rgba(250,247,242,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${BRAND.blush}`,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:
                  pathname === link.href ? BRAND.warmBrown : BRAND.charcoal,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
