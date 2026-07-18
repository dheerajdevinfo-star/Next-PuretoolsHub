import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pure Tools Hub - Free Finance Calculators & Financial Tools",
  description:
    "Use free online finance calculators including EMI, SIP, Loan, FD, RD, GST, Tax, Investment, Mortgage, Salary, and other financial planning tools. Fast, accurate, and easy to use.",

  keywords: [
    "finance calculator",
    "EMI calculator",
    "SIP calculator",
    "loan calculator",
    "FD calculator",
    "RD calculator",
    "GST calculator",
    "tax calculator",
    "mortgage calculator",
    "investment calculator",
    "salary calculator",
    "financial tools",
    "free calculators",
  ],

  verification: {
    google: "J5M2s7BKCbIj4cS5sULYvElduxwqx2h-PInZGZrlRH4",
  },

  openGraph: {
    title: "Pure Tools Hub - Free Finance Calculators",
    description:
      "Free online finance calculators for EMI, SIP, Loan, FD, RD, GST, Tax, Investment and more.",
    url: "https://puretoolshub.com",
    siteName: "Pure Tools Hub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://puretoolshub.com/images/Black_logo.svg",
        width: 1200,
        height: 630,
        alt: "Pure Tools Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pure Tools Hub - Free Finance Calculators",
    description:
      "Free online finance calculators for EMI, SIP, Loan, FD, RD, GST, Tax, Investment and more.",
    images: ["https://puretoolshub.com/images/Black_logo.svg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};



export default function RootLayout({  children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}