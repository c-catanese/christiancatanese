"use client"
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Header from "./Components/header/header"; // Import your header
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
  // const pathname = usePathname();


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-main antialiased`}>
        {/* <Header />  */}
        <div
          className={``}
        >
          <main>{children}</main> 
        </div>
      </body>
    </html>
  );
}


