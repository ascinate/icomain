"use client";
import { useEffect, useState } from "react";
import NavicationHome from "../components/NavicationHome";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ModalDeatils from "../components/ModalDeatils";

export default function InterfaceIconsPage() {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("interface");
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [isIconActive, setIsIconActive] = useState(false);

  useEffect(() => {
    const fetchInterfaceIcons = async () => {
      try {
        const res = await fetch(
          "https://iconsguru.ascinatetech.com/api/icons/interface"
        );
        const json = await res.json();
        if (json.status && Array.isArray(json.data)) {
          setIcons(json.data);
        }
      } catch (err) {
        console.error("Error fetching Interface icons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInterfaceIcons();
  }, []);

  return (
    <>
      <Head>
        <title>Interface Icons</title>
        <meta
          name="description"
          content="Free Interface icons from IconsGuru"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`full-bodys ${isIconActive ? "modals-body" : ""}`}>
        
          <NavicationHome />
          <section className="sub-banners sub-banners2 d-inline-block w-100 float-start">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2>
                    {" "}
                    Discover High-Quality  <br />
                    Interface Icons{" "}
                  </h2>
                  <p className="col-lg-8 mt-3">
                    {" "}
                    The largest collection of hand-crafted interface icons available in SVG, PNG, EPS, PSD, and IconFont formats. {" "}
                  </p>
                  <Link
                                    href={`/icons/${encodeURIComponent(
                                      category.toLowerCase()
                                    )}`}
                                    className="btn btn-primary btn-mores-btn px-4 py-2"
                                  >
                                    Browse Interface Icons
                                  </Link>
                </div>
                {/* <div className="col-lg-6">
                              <Image loading="lazy" src="/category-banner.svg"
                                    alt="iconsguru"
                                    width={511}
                                    height={299} />
                          </div> */}
              </div>
            </div>
          </section>
        <div className="totals-sections-mains01">
          <main className="pricing-pages-part interface-bgs float-start w-100">
            <section className="float-start w-100 pt-0">
              <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 gx-lg-5">
                    <div className="col">
                         <div className="comon-cate-list trending-icons d-inline-block w-100">
                            <h2 className="text-left comon-head cmg-heading m-0">
                              Explore Our Interface Icons
                            </h2>
                            <p> Browse our collection of high-quality interface icons for UI/UX design, available in multiple
                               formats like SVG, PNG, EPS, PSD, and IconFont.  </p>
                               

                            {loading ? (
                              <div className="d-block w-100">
                                <div className="text-center my-5 d-block w-100">
                                  <div className="loading-animations w-100 show-grids">
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                    <div className="df01"></div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className="t-ind-icons mt-4">
                                  <div className="new-icons-bm new-six-cols news-colors-div news">
                                    {icons.map((icon) => (
                                      <div
                                        key={icon.Id}
                                        onClick={() => {
                                          setIsIconActive(true);
                                        }}
                                        className="svg-item position-relative interfcae-text"
                                      >
                                        <button
                                          className="tags-frees"
                                          onClick={() => setSelectedIconId(icon.Id)}
                                        >
                                          {" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                          >
                                            <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
                                          </svg>
                                        </button>

                                        <span className="btn icons-list min-cats015 sm-icons015 p-0">
                                          <span
                                            dangerouslySetInnerHTML={{
                                              __html: icon.icon_svg,
                                            }}
                                          ></span>
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="text-center mt-5">
                                  <Link
                                    href={`/icons/${encodeURIComponent(
                                      category.toLowerCase()
                                    )}`}
                                    className="btn btn-primary btn-mores-btn px-4 py-2"
                                  >
                                    Show More
                                  </Link>
                                </div>
                              </>
                            )}

                  
                         </div>
                    </div>

                    <div className="col">
                      <div className="rights-images01">
                       <Image loading="lazy" src="/ig.png"
                                    alt="iconsguru"
                                    width={511}
                                    height={299} />
                      </div>
                    </div>
                </div>
               
              </div>
            </section>

            <section className="float-start about-sections-features01 comon-short-parts w-100 pb-0">
                <aside className="container">
                   <h2 className="comon-head"> Why Choose IconsGuru? </h2>
                    <div className="row row-cols-1 row-cols-lg-3 gx-lg-4 align-items-center mt-4">
                        <div className="col">
                           <div className="comons-cardscus new-heights min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg> </span> High-Quality </h3>
                                   <p> All icons are meticulcusly designed to be pixel-perfect. </p>
                                  
                               </div>
                           </div>
                        </div>
                        <div className="col">
                             <div className="comons-cardscus new-heights min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span className="last2"> <Image loading="lazy" src="/16534273.png" alt="iconsguru"
                                    width={35}
                                    height={35}/> </span> Fully Customizable </h3>
                                   <p> Easily change colors, size and stroke widtts to suit your needs. </p>
                                   
                                   
                               </div>
                             </div>
                        </div>
                        <div className="col">
                             <div className="comons-cardscus new-heights min-heights015 d-inline-block w-100">
                               <div className="text-div015 d-inline-block w-100">
                                   <h3> <span className="last3"> <Image loading="lazy" src="/3940079.png" alt="iconsguru"
                                    width={35}
                                    height={35}/> </span> Multiple Formats </h3>
                                   <p> Download icons in SVG, PNG, EPS, PSD, and IconFont formats. </p>

                               </div>
                             </div>
                        </div>
                    </div>
                </aside>
            </section>
          </main>
        </div>
          <ModalDeatils
            id={selectedIconId ?? null}
            onClose={() => {
              setIsIconActive(false);
            }}
          />

          <Footer />
     
      </div>

    </>
  );
}
