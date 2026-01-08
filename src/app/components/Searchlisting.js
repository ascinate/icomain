'use client';
import NavicationHomeDetails from "./NavicationHomeDetails";
import { useEffect, useState } from "react";
import SidebarFilter from "./SidebarFilter";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ModalDeatils from "./ModalDeatils";


export default function Searchlisting() {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };

  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("search");

  const [icons, setIcons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ categories: [], colors: [], types: [] });
  const [totalIcons, setTotalIcons] = useState(0);
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [isIconActive, setIsIconActive] = useState(false);


  const pagesToShow = Array.from(
  new Set([1, 2, totalPages].filter(p => p >= 1 && p <= totalPages))
  );



  useEffect(() => {
    const fetchIcons = async () => {
      setIsLoading(true);
      try {
        const query = new URLSearchParams();
        query.append("limit", 20);
        query.append("limit", page === 1 ? 48 : 6);

        if (filters.categories.length) filters.categories.forEach(c => query.append("categories[]", c));
        if (filters.colors.length) filters.colors.forEach(c => query.append("colors[]", c));
        if (filters.types.length) filters.types.forEach(t => query.append("types[]", t));

        if (searchKeyword) query.append("search", searchKeyword);

        const finalURL = `https://iconsguru.ascinatetech.com/api/icons?${query.toString()}`;

        const response = await fetch(finalURL);
        const data = await response.json();

         if (data?.icons?.data && Array.isArray(data.icons.data)) {
          setIcons(prev =>
            page === 1 ? data.icons.data : [...prev, ...data.icons.data]
          );
          setTotalPages(data.icons.last_page || 1);
          setTotalIcons(data.icons.total || 0);
        } else {
          console.error("❌ Unexpected data.icons format:", data);
          setIcons([]);
        }
      } catch (error) {
        console.error("🚨 Error fetching icons:", error);
        setIcons([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, [page, filters, searchKeyword]);


  return (
    <>
    <div className={`full-bodys ${isIconActive ? "modals-body" : ""}`}>
      <div className={`totals-sections-mains01 new-lisiting ${isToggled ? 'swowpactive' : ''}`}>
          <NavicationHomeDetails/>
          <div className="main-listings01 float-start w-100 only-listings01">
              <div className="container">
                  <div className="row align-items-start">
                      <div className="col-lg-3 slil">
                          <aside className="sidebars-subpages p-4 d-inline-block w-100 pt-2">
                              
                              <div className="slider-filtersr-div">
                                  <h4 className="ms-0 filters-text w-100"> Filter <span className='arose'>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                                      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                                      </svg>  </span> </h4>
                          
                                <SidebarFilter onFilterChange={setFilters}  showCategoryFilter={false} />
                              </div>
                          </aside>
                          <aside className="sidebars-subpages cmb-borad01 p-4 d-none d-inline-lg-block w-100 bd-md015 pt-2 mt-5">
                              <Link href="/" >
                                  <div className="sm-logs mt-3 text-center">
                                      <Image loading="lazy" src="/icon-logos.jpg"
                                            alt="iconsguru"
                                            width={223}
                                            height={53} />
                                  </div>
                              
                                  <p className="text-center mb-0 mt-0"> Free accessories that allow you to organize, create and save time on your designs! </p>
                                  <div className="text-center">
                                      <Image loading="lazy" src="/undraw_learning-to-sketch_uaxi.svg"
                                            alt="iconsguru"
                                            width={223}
                                            height={223} />
                                  </div>
                              </Link>
                              <Link href="/icon"  className="btn d-table mx-auto gts-strts-no">
                                Get Started now
                              </Link>
                          </aside>
                      </div>
                      <div className="col-lg-9">
                          <div className="rights-sections-sub no-border">
                                <main className="listing-pages floate-start w-100 mb-5">
                                      
                                        <div className="main-divs g-col-6 pt-0">
                                  


                                          <h2 className="search-listings01 d-flex align-items-center mb-4"> 
                                            <span> 
                                              <button onClick={handleToggle} className="btn px-0 me-3">
                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path></svg>
                                                    
                                              </button>
                                            Showing <strong className="serch-data">{totalIcons}</strong>
                                            </span>
                                            {searchKeyword ? `${searchKeyword}` : "All Icons"}</h2>
                                          



                                          
                                          <div className="related-iconstext">
                                            <div className="d-md-flex align-items-center">
                                              <p className="m-0"> Related: </p>
                                              <ul className="d-flex ms-2 align-items-center flex-wrap mb-0 p-0">
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Design </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Building </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Architecture </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Furniture </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Construction </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Construction </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Property </Link>
                                                </li>
                                                <li>
                                                  <Link href='/' className="btn-mores-tex">  Estate </Link>
                                                </li>
                                              </ul>
                                            </div>  
                                          </div>
                                          <div className="tabsd_divs d-inline-block w-100 mt-4">
                                              
                                          <div className="new-icons-bm news-colors-div w-100 mt-0 position-relative">
                                                  {isLoading ? (
                                                    <div className="loading-animations row w-100 show-grids">
                                                    <div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div>
                                                    <div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div>
                                                    <div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div><div className="df01 col-lg-2"></div>
                                                  </div>
                                                  ) : Array.isArray(icons) && icons.length > 0 ? (
                                                    icons.map((icon) => (
                                                  <div
                                                    key={icon.Id}
                                                    onClick={() => {
                                                    setIsIconActive(true);
                                                     }}
                                                    className="svg-item position-relative">
                                                      <button  onClick={() => setSelectedIconId(icon.Id)} className="tags-frees"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path></svg></button>
                                                      <span className="btn icons-list sm-icons015 p-0">
                                                        {icon.type === "Animated" ? (
                                                          <img
                                                            src={`https://iconsguru.ascinatetech.com/public/uploads/animated/${encodeURIComponent(
                                                              icon.icon_svg
                                                            )}`}
                                                            alt={icon.icon_name}
                                                            style={{ width: "100%", height: "100%" }}
                                                          />
                                                        ) : (
                                                          <span
                                                            dangerouslySetInnerHTML={{
                                                              __html: icon.icon_svg,
                                                            }}
                                                          ></span>
                                                        )}
                                                      </span>
                                                    </div>
                                                    
                                                    ))
                                                  ) : (
                                                    <div className="col no-found-div w-100">
                                                        <div className="not-imgs text-center">
                                                            <figure className="m-0">
                                                              
                                                                <Image
                                                                    loading="lazy"
                                                                    src="/nofound.png"
                                                                    alt="iconsguru"
                                                                    width={249}
                                                                    height={219}
                                                                  />
                                                            </figure>
                                                            <h2> No results found </h2>
                                                            <p> Try updating your search terms or filters </p>
                                                        </div>
                                                    </div>
                                                  )}
                                                </div>


                                              

                                                {totalPages > 1 && (
                                                    <div className="d-flex align-items-center paginnations justify-content-center justify-content-lg-end my-5 gap-2 flex-wrap">

                                                      <div className="text-muted text-shows">
                                                        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                                                      </div>

                                                      {Array.from(
                                                        new Set([
                                                          1,
                                                          2,
                                                          page,        // current page (dynamic)
                                                          totalPages,
                                                        ].filter(p => p >= 1 && p <= totalPages))
                                                      )
                                                        .sort((a, b) => a - b)
                                                        .map((pageNum) => (
                                                          <button
                                                            key={pageNum}
                                                            onClick={() => setPage(pageNum)}
                                                            className={`btn btn-sm ${
                                                              page === pageNum ? "btn-actives" : "btn-outline-secondary"
                                                            }`}
                                                          >
                                                            {pageNum}
                                                          </button>
                                                        ))}


                                                      <button
                                                        className="btn btn-pre"
                                                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                                        disabled={page === 1}
                                                      >
                                                        ←
                                                      </button>

                                                      <button
                                                        className="btn btn-next"
                                                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                                                        disabled={page === totalPages}
                                                      >
                                                        →
                                                      </button>

                                                    </div>
                                                  )}







                                          
                                          </div>
                                        </div>
                                      
                                  
                                
                                </main>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          
      </div>
      
        <ModalDeatils id={selectedIconId ?? null}  onClose={() => {
         setIsIconActive(false);
          }} />
    </div> 
   
    </>
  );
}
