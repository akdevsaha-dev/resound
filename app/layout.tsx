import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/ui/smooth-scroll";
import { ScrollToTop } from "./components/scrollToTop";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resound",
  description:
    "Morning newsletters, whispered in your ear. Sip, listen, repeat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${geistMono.variable} ${openSans.className} antialiased`}
      >
        <ScrollToTop />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
