"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Components/header"; // Import your header
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-main antialiased`}>
        <Header /> {/* Static header that does not transition */}
        <div
          className={`${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          } transition-all duration-500`}
        >
          <main>{children}</main> {/* Only this content transitions */}
        </div>
      </body>
    </html>
  );
}


