import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import VantaNetBackground from "@/components/ui/Vantabg";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//need to update

export const metadata: Metadata = {
  title: "KhatraTech",
  description: "KhatraTech offers innovative web design, web development, website development,graphics design, UI/UX, app development, digital marketing, and IT consulting services tailored for your business success.",
  metadataBase: new URL("https://www.khatratech.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // {/* remove black after using vantajs and use bg-transparent*/}

        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* <VantaNetBackground options={{mouseControls:true,touchControls:true}}> */}
        <Navbar />

        {/* <About/> */}
        {children}

        <Footer />
        {/* </VantaNetBackground> */}
      </body>
    </html>
  );
}
