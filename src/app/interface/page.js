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
        const res = await fetch("https://iconsguru.ascinatetech.com/api/icons/interface");
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
        <meta name="description" content="Free Interface icons from IconsGuru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavicationHome />
      <section className="sub-banners d-inline-block w-100 float-start">
                <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                          <h2> Browse High-Quality <br/>
                          Icons by Category </h2>
                          <p className="col-lg-8 mt-3"> The largest database of vector icons available for download
                          SVG, EPS, PSD and BASE 64 formats. </p>
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

      <main className="pricing-pages-part float-start w-100">
        <section className="float-start w-100 pt-0">
          <div className="container">

            <div className="comon-cate-list trending-icons d-inline-block w-100">
              <h2 className="text-left comon-head cmg-heading m-0">Interface Icons</h2>
              

              {loading ? (
                <div className="d-block w-100">
                          <div className="text-center my-5 d-block w-100">
                              <div className="loading-animations w-100 show-grids">
                                <div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div>
                                <div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div>
                                <div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div><div className="df01"></div>
                              </div>
                          </div>
                </div>
              ) : (
                <>
                <div className="t-ind-icons mt-4">
                  <div className="new-icons-bm-bg news-colors-div news">
                    {icons.map((icon) => (
                      <div key={icon.Id}  onClick={() => {
                                    setIsIconActive(true);
                                  }} className="svg-item position-relative interfcae-text">
                        <button  data-bs-toggle="modal" onClick={() => setSelectedIconId(icon.Id)} data-bs-target="#exampleModal" className="tags-frees">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path></svg>
                        </button>
                        
                          <span className="btn icons-list sm-icons015 p-0">
                            <span dangerouslySetInnerHTML={{ __html: icon.icon_svg }}></span>
                          </span>
                       </div>
                     
                    ))}
                  </div>
                </div>

                  <div className="text-center mt-5">
                    <Link
                      href={`/icons/${encodeURIComponent(category.toLowerCase())}`}
                      className="btn btn-primary btn-mores-btn px-4 py-2"
                    >
                      Show More
                    </Link>
                  </div>

                 
                </>
              )}

                 <section className="float-start about-sections mt-5 w-100">
                        <aside className="container">
                            <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                              <div className="col">
                                  <div className="ab-left">
                                    <h2 className="comon-head"> Edit never <span className="d-lg-block"> beed to easy </span> </h2>
                                    <p className="col-lg-8 mt-3"> We’ve developed from scratch our tools to browse, customize and quickly use our assets.
                                       Drop our icons and illustration right into your workflow.   </p>
                                     <Link href='' className="btn btn-explore mt-2">Explore now</Link>
                                  </div>
                              </div>
                              <div className="col">
                                  <figure className="m-0">
                                      <Image loading="lazy" src="/color-12.svg"
                                            alt="user"
                                            width={390}
                                            height={310} />
                                  </figure>
                              </div>
                            </div>
                        </aside>
                  </section>
            </div>
          </div>
        </section>
      </main>

      <ModalDeatils id={selectedIconId ?? null} onClose={() => {
                setIsIconActive(false);
              }} />

      <Footer />                                     
    </>
  );
}
