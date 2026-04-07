import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zychor Biologicals | Pharmaceutical Solutions for Healthcare",
  description: "Zychor Biologicals provides advanced pharmaceutical solutions across osteoporosis, osteoarthritis, pain management, antiinfective, gastro care, and wound management.",
  keywords: [
    "Zychor Biologicals",
    "pharmaceutical company",
    "osteoporosis treatment",
    "osteoarthritis solutions",
    "pain management",
    "antiinfective treatment",
    "gastro care",
    "wound management",
    "biological solutions",
    "healthcare products",
    "calcium metabolism",
    "joint care",
    "GERD treatment",
    "infection control",
    "bone health",
    "cartilage protection",
    "analgesic therapy",
    "PPI medication",
    "tissue regeneration"
  ],
  authors: [{ name: "Zychor Biologicals" }],
  openGraph: {
    title: "Zychor Biologicals | Pharmaceutical Solutions",
    description: "Advanced biological solutions across multiple therapeutic segments for healthcare needs.",
    url: "https://www.zychorbiologicals.com",
    siteName: "Zychor Biologicals",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
