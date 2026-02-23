import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";




export const metadata: Metadata = {
  title: "Aung Myo Aye's Portfolio",
  description: "A full stack backend focus developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased max-w-6xl mx-auto`}
      >

        <NavBar />

        {children}
        <Footer />

      </body>
    </html>
  );
}
