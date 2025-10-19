import "./globals.css";
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Dynafrique Solutions — Empowering Mpumalanga",
  description: "Dynafrique connects homeowners and businesses to accredited solar, battery and fuel suppliers across Mpumalanga and South Africa."
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
