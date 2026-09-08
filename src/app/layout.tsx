import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white">{children}</body>
    </html>
  );
}
