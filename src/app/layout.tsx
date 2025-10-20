import "./globals.css";
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Dynafrique Solutions – Empowering Mpumalanga",
  description: "Connecting quality leads with accredited suppliers and clean energy financing in South Africa.",
  openGraph: {
    title: "Dynafrique Solutions",
    description: "Empowering Africa through clean energy and smart financing.",
    url: "https://dynafrique.co.za",
    siteName: "Dynafrique",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
