"use client";
import { useEffect, useState } from "react";
import NavicationHomeDetails from "../components/NavicationHomeDetails";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Icons() {
  const [icontypes, setCategoryTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://iconsguru.ascinatetech.com/api/icon-categories-count");
        const json = await res.json();
        if (json.status && Array.isArray(json.data)) {
          const updatedData = json.data.map((item) => ({
            ...item,
            img: `/${item.thumbnail}`,
            link: `/icon/${encodeURIComponent(item.icon_category.trim().toLowerCase())}`
          }));
          setCategoryTypes(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);


  return (
    <>
      <Head>
        <title>Free Icons, icon download | IconsGuru</title>
        <meta name="description" content="Download free, high-quality SVG icons for your website or app. IconsGuru provides a comprehensive library of free and premium icons that you can instantly download and customize to any size. Perfect for designers, developers, and creatives looking for high-quality, scalable icons to enhance their projects. Discover icons that fit your design needs seamlessly." />
        <meta name="keywords" content="vector icons, UI icons, free svg icons, free svg download, free icon download, icon sets, icon download, icon png, svg icons, free vector icons, vector free, interface icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3151409433055188" crossorigin="anonymous"></script>
        <link rel="canonical" href="https://iconsguru.com/icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavicationHomeDetails/>
      <section className="sub-banners icon-cate d-inline-block w-100 float-start">
                <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                          <h2> Browse High-Quality <br/>
                          Icons by Category </h2>
                          <p className="col-lg-8 mt-3"> The largest database of vector icons available for download
                          SVG, EPS, PSD and BASE 64 formats. </p>
                      </div>
                      
                    </div>
                </div>
      </section>
      <main className="pricing-pages-part float-start w-100 mb-5">
        
            <section className="float-start w-100 pt-0">
                  <div className="container">
                     <div className="comon-cate-list trending-icons d-inline-block w-100">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                              <div className="d-flex align-items-center">
                                  <h2 className="text-left comon-head cmg-heading m-0"> Icon Categories </h2> 
                              </div>
                            </div>
                            
                        </div>
                        {loading ? (
                          <div className="text-center my-5 d-block w-100">
                              <div className="loading-animations new-gaps row w-100 show-grids">
                                <div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div>
                                <div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div>
                                <div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div><div className="df01 col-lg-4"></div>
                              </div>
                          </div>
                        ) : (
                             
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 g-lg-4 mt-4">
      
                            {icontypes.map((type) => (
                                    <div className="col" key={type.id}>
                                      <article className="d-inline-block new-typesr-crmsd w-100 comon-types01 position-relative">
                                        <span className="tagsd">{type.tag}</span>
                                          <figure className="text-center mx-auto d-block mb-1">
                                            <Link href={type.link}> <Image loading="lazy" src={type.img}
                                                  alt="name"
                                                  width={260}
                                                  height={178} /> </Link>
                                          </figure>
                                          
                                          <span className="icon-list-name w-100 mt-2 ms-2 d-inline-block">
                                              <h5 className="mb-0"> 
                                                <Link href={type.link}> 
                                                {type.icon_category.trim()}
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
                        )}
                     </div>
      
                  </div>
             </section>
       </main>

      <Footer/>
    </>
  );
}
