import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteSwitcher } from "@/components/site-switcher";
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
  title: "shadcn/ui Block Variations",
  description: "Exploring different landing page layouts with shadcn/ui components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteSwitcher />
        <div className="pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
