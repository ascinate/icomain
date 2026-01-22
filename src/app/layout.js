
import { Sora, Play, Playfair, Inter, Figtree, Onest, Smooch_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "../app/components/ImportBsJS";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const sorasans = Sora({
  variable: "--font-sora-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const smoochsans = Smooch_Sans({
  variable: "--font-smoochsans-sans",
  weight: [ '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans-sans",
  weight: [ '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const basier = localFont({
  src: [
    {
      path: './fonts/BasierSquareMedium.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monasas',
});

const onest = Onest({
  variable: "--font-onest-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const figtreesans = Figtree({
  variable: "--font-figtree-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});


const play = Play({
  variable: "--font-play-sans",
  weight: ['700'],
  subsets: ['latin'],
});

const playfa = Playfair({
  variable: "--font-playfa-sans",
  weight: ['400'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: "--font-inter-sans",
  weight: ['800', '700', '500', '300', '400', '200', '600'],
  subsets: ['latin'],
});

export const metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: "Free Icons, Vector Icons - SVG, PNG, WEBP",
  Keywords: "icon downloads, customizable icons, high-quality vector icons, free icons for websites, premium icons for designers, icon size customization, icon resources, digital design icons, creative icons, UI icons, scalable icons, instant icon downloads, professional icon library.",
  description: "IconsGuru provides a comprehensive library of free and premium icons that you can instantly download and customize to any size. Perfect for designers, developers, and creatives looking for high-quality, scalable icons to enhance their projects. Discover icons that fit your design needs seamlessly.",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={`${dmsans.variable}`}>
      <Head>
        <title>Free Icons, Vector Icons - SVG, PNG, WEBP</title>
        <meta name="description" content="Download free, high-quality SVG icons for your website or app. IconsGuru provides a comprehensive library of free and premium icons that you can instantly download and customize to any size. Perfect for designers, developers, and creatives looking for high-quality, scalable icons to enhance their projects. Discover icons that fit your design needs seamlessly." />
        <meta name="keywords" content="vector icons, UI icons, free svg icons, free svg download, free icon download, icon sets, icon download, icon png, svg icons, free vector icons, vector free, interface icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className="names-bgs">

        <style>{`
       
         h5.sub-headings{
           font-family: ${dmsans.style.fontFamily} !important; 
         }
        p.text-para1{
          font-family: ${playfa.style.fontFamily};
        }
             
        .btn-search,
        .vides-btn{
          font-family: ${dmsans.style.fontFamily} !important; 
        }
        .search-listings01 span,
        .spaceing-lefts {
          font-family: var(--font-inter-sans), sans-serif !important;
        }
        .navbar-light .navbar-nav .nav-link{
              font-family: ${dmsans.style.fontFamily} !important;  
        }
        .why-menu-btn{
             font-family: ${dmsans.style.fontFamily} !important; 
        }
        body{
             font-family: ${onest.style.fontFamily} !important;
        }
        .signup-btn10{
         font-family: ${dmsans.style.fontFamily} !important; 
        }
           article.comon-categorisg h5 a{
           font-family: ${basier.style.fontFamily}; 
           }
           h1, h2, .banner-parts01 h2, .banner-parts01 h2 span{
             font-family: ${smoochsans.style.fontFamily} !important;
           }
      `}
        </style>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111",
              color: "#fff",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "14px",
            },
          }}
        />
        <noscript
          id="gtm-noscript"
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMWJ9TM8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

  <script
  id="ga4-script"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2CHSDT1GF7');
    `,
  }}
/>
          
        <ImportBsJS />
        {children}
      </body>



    </html>
  );
}
