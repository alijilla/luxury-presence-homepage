import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Realtor",
  description:
    "Marci Metzger of The Ridge Realty Group helps buyers and sellers in Pahrump, Nevada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white">{children}</body>
    </html>
  );
}
