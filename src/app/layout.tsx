import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GurkhasLabs – Transform Tech, Inspiring Solutions",
  keywords :[
  
  // Web Design
  "web design",
  "website design",
  "website redesign services",
  "responsive web design",
  "UI/UX design services",
  "creative website design",
  "mobile-friendly web design",
  "professional website design",
  "custom web design",
  "landing page design",
  "ecommerce website design",
  "portfolio website design",
  "CMS web design",
  "WordPress website design",
  "Shopify website design",

  // Web Development
  "web development",
  "full-stack web development",
  "front-end development",
  "back-end development",
  "custom web development",
  "MERN stack development",
  "web application development",
  "API integration services",
  "progressive web apps",
  "web portal development",
  "React web development",
  "Next.js development",
  "Node.js development",
  "HTML5 web design",
  "CSS3 styling",
  "JavaScript development",

  // SEO & Marketing
  "seo",
  "search engine optimization services",
  "local SEO services",
  "on-page SEO",
  "off-page SEO",
  "technical SEO",
  "SEO-friendly website design",
  "content marketing services",
  "keyword research services",
  "digital marketing services",

  // Branding & Graphic Design
  "logo design services",
  "brand identity design",
  "business card design",
  "brochure design",
  "creative graphic design",

  // Location-Based (Nepal)
  "web design Nepal",
  "website design Kathmandu",
  "Nepal web development company",
  "SEO company Nepal",
  "digital marketing Kathmandu",
],

  description: "GurkhasLabs offers innovative web design, web development, website development, graphics design, UI/UX, app development, digital marketing, and IT consulting services tailored for your business success.",
  metadataBase: new URL("https://www.gurkhaslabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

