import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/ui/header";
import { MenuProvider } from "./_components/context/MenuContext";
import Footer from "./_components/ui/footer";
const manrope = Manrope({ 
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap', 
  weight: ['400', '500', '700'], 
})

export const metadata: Metadata = {
  title: "Francis Joshua Collado | Portfolio",
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
        <MenuProvider>
          <Header />
          {children}
          <Footer/>
        </MenuProvider>
      </body>
    </html>
  );
}
