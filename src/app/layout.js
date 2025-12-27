import { Sora, Play, Playfair, Inter, Figtree, Onest} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "../app/components/ImportBsJS";


const sorasans = Sora({
  variable: "--font-sora-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
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
  weight: ['800','700', '500', '300', '400', '200', '600'],
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
    
    <html lang="en" className={`${onest.variable}`}>
      
      <body>

      <style>{`
       
         h5.sub-headings{
           font-family: ${play.style.fontFamily};
         }
        p.text-para1{
          font-family: ${playfa.style.fontFamily};
        }
               
        .search-listings01 span,
        .spaceing-lefts {
          font-family: var(--font-inter-sans), sans-serif !important;
        }
        .navbar-light .navbar-nav .nav-link{
              font-family: ${onest.style.fontFamily};   
        }
        .why-menu-btn{
            font-family: ${onest.style.fontFamily}; 
        }
        body{
             font-family: ${onest.style.fontFamily} !important;
        }
        .signup-btn10{
           font-family: ${onest.style.fontFamily} !important;
        }
           article.comon-categorisg h5 a{
           font-family: ${onest.style.fontFamily} !important;
           }
      `}
      </style>
         <noscript
            id="gtm-noscript"
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMWJ9TM8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        <ImportBsJS/>
        {children}
      </body>
    </html>
  );
}
