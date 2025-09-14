import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Aung Myo Aye's Portfolio",
  description: "Make with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth 	snap-mandatory">
      <body className="bg-[#111311]">
        <Cursor />

        <div className="max-w-7xl mx-auto">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
