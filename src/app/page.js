import Image from "next/image";
import styles from "./page.module.css";
import CategorySlider from "./components/CategorySlider";
import NavicationHome from "./components/NavicationHome";
import BannerHome from "./components/BannerHome";
import Link from "next/link";
import Footer from "./components/Footer";
import Head from "next/head";
import Script from 'next/script';

async function getTotalIcons() {
  try {
    const res = await fetch("http://iconsguru.ascinatetech.com/api/icons/total-count", {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.total || 0;
  } catch (err) {
    console.error("Server icon count error:", err);
    return 0;
  }
}

export default async function Home() {
  const totalIcons = await getTotalIcons();

        const icontypes = [    { id: 1, title: 'Arrow' , counting: '144', tag:"", img: '/arrow.svg', link: '/icons/arrow'  },    { id: 2, title: 'Business' , counting: '65', tag:"New", img: '/business.svg', link: '/icons/business'  },    { id: 3, title: 'Device' , counting: '118', tag:"", img: '/device.svg', link: '/icons/device'  },    { id: 4, title: 'Music' , counting: '200', tag:"", img: '/Music.svg', link: '/icons/music'  },    { id: 5, title: 'home' , counting: '49', tag:"", img: '/home.svg', link: '/icons/home'  },    { id: 6, title: 'Interface' , counting: '89', tag:"", img: '/interface.svg', link: '/icons/interface'  }, { id: 7, title: 'Contracts' , counting: '89', tag:"", img: '/Contracts.svg', link: '/icons/contracts'  }, { id: 8, title: 'Delivery' , counting: '89', tag:"", img: '/my-icons.png', link: '/icons/delivery'  },  ];  
    const categorytypes = [    { id: 1, title: 'Thin' , counting: '450', tag:"", img: '/tine1.svg', link: '/icons/thin'  },    { id: 2, title: 'Solid' , counting: '590', tag:"New", img: '/solid1.svg', link: '/icons/solid'  },    { id: 3, title: 'Regular' , counting: '387', tag:"", img: '/regulari.svg', link: '/icons/regular'  }  ];
    const icontypeslist = [    { id: 1, title: 'Arrow' , counting: '144', tag:"", img: '/arrows-button-red-icon.svg', link: '/icons/arrow'  },    { id: 2, title: 'Business' , counting: '65', tag:"New", img: '/businessi1.svg', link: '/icons/business'  },    { id: 3, title: 'Device' , counting: '118', tag:"", img: '/device01.svg', link: '/icons/device'  },    { id: 4, title: 'Music' , counting: '200', tag:"", img: '/mus.svg', link: '/icons/music'  },    { id: 5, title: 'home' , counting: '49', tag:"", img: '/home-color-icon.svg', link: '/icons/home'  },    { id: 6, title: 'Interface' , counting: '89', tag:"", img: '/pen-drawing-icon.svg', link: '/icons/interface'  }, { id: 7, title: 'Agriculture' , counting: '89', tag:"", img: '/18363994.png', link: '/icons/agriculture'  }, { id: 8, title: 'Calender' , counting: '89', tag:"", img: '/16090543.png', link: '/icons/calender'  },  ]; 

  
  return (
    <>
     <Head>

       <script
            id="gtm-script"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PMWJ9TM8');`,
            }}
          />
    
        <title>Free Icons, Vector Icons - SVG, PNG, WEBP</title>
        <meta name="description" content="Download free, high-quality SVG icons for your website or app. IconsGuru provides a comprehensive library of free and premium icons that you can instantly download and customize to any size. Perfect for designers, developers, and creatives looking for high-quality, scalable icons to enhance their projects. Discover icons that fit your design needs seamlessly." />
        <meta name="keywords" content="vector icons, UI icons, free svg icons, free svg download, free icon download, icon sets, icon download, icon png, svg icons, free vector icons, vector free, interface icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3151409433055188" crossorigin="anonymous"></script>
        <link rel="canonical" href="https://iconsguru.com/icons" />
        <link rel="icon" href="/favicon.ico" />
    
    </Head>

    <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17029656376"
      />
     <Script id="google-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17029656376');
        `}
      </Script>

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
    <body className="home-pages-sp">  
      <NavicationHome/>
      <BannerHome totalIcons={totalIcons} />

      <main className="float-start w-100 main-body home-templates-mains">
           

            <section className="float-start fetures-acountins-sections w-100">
                <div className="container">
                  <div className="row">
                     <div className="col-lg-7">
                            <h2 className="comon-head"> Explore Trending Collections </h2>
                     </div>
                     <div className="col-lg-5 d-grid justify-content-end">
                        <Link href="/icons" className="vides-btn">View All </Link>
                     </div>
                  </div>
                    

                      <div className="row row-cols-1 row-cols-lg-4 gy-4 g-lg-4 mt-4">

                        {icontypes.map((type) => (
                                  <div className="col" key={type.id}>
                                    <article className="d-inline-block w-100 comon-types01 position-relative">
                                    <span className="tagsd">{type.tag}</span>
                                      <figure className="text-center mx-auto d-block mb-1">
                                        <Link href={type.link}> <Image loading="lazy" src={type.img}
                                              alt="user"
                                              width={260}
                                              height={178} /> </Link>
                                      </figure>
                                      <span className="icon-list-name w-100 mt-2 ms-2 d-inline-block">
                                          <h5 className="mb-0"> 
                                            <Link href={type.link}> 
                                              {type.title}
                                            </Link>
                                          </h5>
                                          <p className="coun-text mt-2 d-block"> 
                                               {type.counting} Icons with source files
                                          </p>

                                           <Link className="videw-btn btn d-flex align-items-center" href={type.link}> 
                                               View Collections 
                                              <span className="ms-2">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg>
                                               </span>
                                           </Link>


                                          
                                      </span>
                                    </article>
                                  </div>
                              ))}
                          
                      </div>

                </div>
            </section>

            <section className="float-start w-100 categorise-sections">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-7">
                            <h2 className="comon-head m-0"> Popular Categories </h2>
                     </div>
                     <div className="col-lg-5 d-grid justify-content-end">
                        <Link href="/icons" className="vides-btn d-table ms-auto">View All  </Link>
                     </div>
                  </div>

                     <div className="row row-cols-1 row-cols-lg-4 gy-4 g-lg-4 mt-4">

                        {icontypeslist.map((type) => (
                                  <div className="col" key={type.id}>
                                    <article className="d-inline-block  w-100 comon-categorisg position-relative">
                                    <span className="tagsd">{type.tag}</span>
                                     <Link className="text-decoration-none inside-links" href={type.link}> 
                                      <div className="d-flex align-items-start">
                                       
                                            <figure className="text-center mb-1">
                                                 <Image loading="lazy" src={type.img}
                                              alt="user"
                                              width={50}
                                              height={50} />
                                           </figure>
                                           
                                           <span className="icon-list-name ps-3  mt-2 ms-0 d-inline-block">
                                              <h5 className="mb-0"> 
                                              
                                                  {type.title}
                                               
                                              </h5>
                                              <p className="coun-text mt-1 d-block"> 
                                                  {type.counting} Icons
                                              </p>
                                           </span>
                                      </div>
                                      </Link>
                                      
                                      
                                    </article>
                                  </div>
                              ))}
                          
                      </div>

               </div>
                
            </section>

            <section className="float-start about-sections-features01 bg-light comon-short-parts w-100">
                <aside className="container">
                   <h2 className="comon-head text-center"> Customize Icons Instantly </h2>
                    <div className="row row-cols-1 row-cols-lg-3 gx-lg-4 align-items-center mt-4">
                        <div className="col">
                           <div className="comons-cardscus min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg> </span> Change Color </h3>
                                   <p> Tweak fills and strokes to match your brand with one click. </p>
                                   <Link href="/" className="btn"> Try Now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg> </Link>
                               </div>
                           </div>
                        </div>
                        <div className="col">
                             <div className="comons-cardscus min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg> </span> Upload & Remix </h3>
                                   <p> Upload SVGs and remix with styles, outlines, and effects. </p>
                                   <Link href="/" className="btn"> Try Now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg> </Link>
                               </div>
                             </div>
                        </div>
                        <div className="col">
                             <div className="comons-cardscus min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> </span> Generate </h3>
                                   <p> Create consistent icon sets from text prompts instantly. </p>
                                   <Link href="/" className="btn"> Try Now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg> </Link>
                               </div>
                             </div>
                        </div>
                    </div>
                </aside>
            </section>

            <section className="trusted-list float-start w-100">
                <div className="container">
                   <div className="row align-items-center">
                       <div className="col-lg-6 text-center">
                           <h2 className="comon-head left-head"> Trusted by 50,000+ designers worldwide </h2>
                              <figure className="m-0 mx-auto text-center d-block comons-logs">
                                    <Image loading="lazy" src="/shofyi-logo.png"
                                                        alt="iconsguru"
                                                        width={681}
                                                        height={332} />
                                 </figure>
                           
                       </div>
                       <div className="col-lg-6">
                          <div className="subscribes-div01 w-100 mx-auto d-table text-center">
                              <h2 className="comon-head"> Lets Keep in touch </h2>  
                              <p> Subscribe to keep up with fresh news exciting updates. <br/>
                              We promise not to spam you!</p>
                              <div className="col-lg-8 mx-auto d-table">
                                <div className="w-100 mt-4 getst-div justify-content-center d-flex align-items-center">
                                  <input type="text" className="form-control" placeholder="Enter your address"/>
                                  <button type="submit" className="btn btn-subcibes"> Subscribe </button>
                                </div>
                              </div>
                         
                          </div>
                       </div>
                   </div>

                   

                </div>
            </section>

            

          

              
            
      </main>
      <Footer/>
    </body> 
    </>
  );
}
