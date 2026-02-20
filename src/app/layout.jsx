import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Signature Studio | By Sarah",
  description:
    "A curated world of chic finds, signature scents, and sparkling things — for women who love beautiful details and intentional living.",
  icons: {
    icon: "/favicon.ico",
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
      </head>
      <body style={{ minHeight: "100vh" }}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
