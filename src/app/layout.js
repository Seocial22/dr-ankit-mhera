// app/layout.js
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Script from "next/script";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import NewYearPopup from "@/components/NewYearPopup";
// import FloatingContact from '@/components/FloatingContact';
 


export const metadata = {
  metadataBase: new URL('https://drankitmehra.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
            name="google-site-verification"
            content="b0QyAvS2sbxXUZzO5BVowB1SlsN9ORDNGwlzsS_wCtg"e
        />
        <Script
         src="https://www.googletagmanager.com/gtag/js?id=G-HQMQMR889V"
         strategy="afterInteractive"
       />
       
       <Script id="google-analytics" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-HQMQMR889V');
         `}
       </Script>
      </head>
      <body>
        {/* Designed and Developed by Jeetendra Singh Rathore (https://jeetdevv.vercel.app/) */}
        <Navbar />
        <main>{children}</main>
        {/* <NewYearPopup/> */}
        {/* <FloatingContact/> */}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
