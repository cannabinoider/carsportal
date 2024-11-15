import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AdminNavbar from './(navbar)/dashboard/Navbar'; 
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cars Portal",
  description: "Project to register cars",
  icons: {
    icon: "/Images/truck2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/truck2.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminNavbar />
        {children}
      </body>
    </html>
  );
}