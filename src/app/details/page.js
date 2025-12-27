'use client';
import Head from "next/head";
import { Suspense } from 'react';
import Searchlisting from "../components/Searchlisting";
import Script from 'next/script';


export default function Page() {
  
  return (
    <>
   
    <Head>
        <title>Free Icons, Vector Icons - SVG, PNG, WEBP</title>
        <meta name="description" content="Download free, high-quality SVG icons for your website or app. IconsGuru provides a comprehensive library of free and premium icons that you can instantly download and customize to any size. Perfect for designers, developers, and creatives looking for high-quality, scalable icons to enhance their projects. Discover icons that fit your design needs seamlessly." />
        <meta name="keywords" content="icon downloads, customizable icons, high-quality vector icons, free icons for websites, premium icons for designers, icon size customization, icon resources, digital design icons, creative icons, UI icons, scalable icons, instant icon downloads, professional icon library, free svg icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-172NZPGYKZ" 
        strategy="afterInteractive" 
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-172NZPGYKZ');
        `}
      </Script>
     
         <body className="tags-filters">
          <Suspense fallback={<div>Loading...</div>}>
            
            <Searchlisting />
            
          </Suspense>
        </body>
    </>
  );
}
