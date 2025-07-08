import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/header"
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap', 
  weight: ['400', '500', '700'], 
})

export const metadata: Metadata = {
  title: "FJ Collado | Web Designer & Frontend Developer Portfolio",
  description: "Web designer and developer FJ (Francis Joshua) creates websites that ignite results. Specializing in custom web design and development with passionate precision to fuel your business growth online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      > 
 
        <Header />
        {children}
      </body>
    </html>
  );
}
