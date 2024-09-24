import { Poppins } from "next/font/google";
import React from 'react'
import localFont from "next/font/local";
import "./globals.css";
import Header from './src/components/Header/Header';
import Footer from './src/components/footer/Footer';

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

export const metadata = {
  title: "SmartFridge.ai",
  description: "Byte sized snacks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <Footer />
    </html>
  );
}
