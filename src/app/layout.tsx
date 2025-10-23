// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dynafrique Solutions — Empowering Mpumalanga",
  description: "Connecting quality leads with accredited suppliers and affordable renewable energy solutions in Mpumalanga.",
  openGraph: {
    title: "Dynafrique Solutions",
    description: "Empowering Mpumalanga with renewable energy solutions and trusted suppliers.",
    url: "https://yourdomain.co.za",
    siteName: "Dynafrique",
    images: [{ url: "https://yourdomain.co.za/assets/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Dynafrique Solutions" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dynafrique Solutions",
              url: "https://yourdomain.co.za",
              logo: "https://yourdomain.co.za/assets/logo.png",
              telephone: "+27 600 000 000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sabie",
                addressRegion: "Mpumalanga",
                addressCountry: "ZA",
              },
            }),
          }}
        />
      </head>
      <body className="pt-16 bg-[#0b0b0b] text-[#F5F5F5]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
