import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "The Signature Studio | By Sarah",
  description:
    "A curated world of chic finds, signature scents, and sparkling things — for women who love beautiful details and intentional living.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Signature Studio",
    description:
      "Curated shopping finds, signature scents, and sparkling things.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" title="The Signature Edit" href="/feed.xml" />

        {/* Pinterest domain verification — replace PINTEREST_CODE with your code from Pinterest settings */}
        {/* <meta name="p:domain_verify" content="PINTEREST_CODE" /> */}

        {/* Google Search Console verification — replace GSC_CODE with your code from Search Console */}
        {/* <meta name="google-site-verification" content="GSC_CODE" /> */}
      </head>
      <body style={{ minHeight: "100vh" }}>
        <GoogleAnalytics />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
