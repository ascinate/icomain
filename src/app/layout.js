import { Sora, Play, Playfair, Inter, Figtree} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "../app/components/ImportBsJS";


const sorasans = Sora({
  variable: "--font-sora-sans",
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
  weight: ['800'],
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
    
    <html lang="en">
      
      <body>
      <style>{`
        html {
          font-family: ${figtreesans.style.fontFamily};
        }
        .banner-parts01 h2, .form-select{
         font-family: ${sorasans.style.fontFamily};
        }
        button,
        .p-autocomplete-item,
        .comon-cont-head,
        .comon-content-div h3,
        .privacy-page h5,{
         font-family: ${figtreesans.style.fontFamily};
        } 
         .signup-btn10,
         .why-menu-btn,
         .serchings-div-filets01 .nav-link,
         .related-iconstext .btn-mores-tex,
         .comon-footers-div01 h5,
         .comon-links li a,
         .comon-footers-div01,
         .ft-paras,
         .navbar-light .navbar-nav .nav-link,
         .rights-text-div015 .btn-coun-downalod,
         .btn-addtocollections,
         .details-list-modals-lis ul li,
         .rights-text-div015 h4,
         .styleigs-list,
         .main-details-pages01 .styles-icons-div,
         .cions-titels,
         .home-banner-sections .btn-search,
         .favi-icons p,
         .favi-icons li .btn,
         .comon-head,
         .comon-types01 h5,
         .videw-btn,
         .comons-cardscus h3,
         .btn-subcibes{
           font-family: ${figtreesans.style.fontFamily};
         }
        input{
         font-family: ${sorasans.style.fontFamily};
        }
         h5.sub-headings{
           font-family: ${play.style.fontFamily};
         }
        p.text-para1{
          font-family: ${playfa.style.fontFamily};
        }
        h2.comon-head,
        .comon-types01 h5 a,
        .coun-text,
        .btn,
        h5,
        .icon-headings,
        .styles-icons-div h4,
        .comon-heading-sub,{
          font-family: ${inter.style.fontFamily};
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
