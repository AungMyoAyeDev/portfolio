import type { Metadata } from "next";
import "./globals.css";




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
        className={` antialiased`}
      >


        {children}

      </body>
    </html>
  );
}
