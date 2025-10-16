'use client';
import Head from "next/head";
import NavicationHome from "./NavicationHome";
import { useEffect, useState } from "react";
import SidebarFilter from "./SidebarFilter";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import SerchInputes from "./SerchInputes";
import NavicationHomeSubpage from "./NavicationHomeSubpage";
import FooterSubpage from "./FooterSubpage";


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

 

  const mianmenu = [
        { id: 1, title: 'Icons' , link: '/icons'  },
        { id: 2, title: 'Interface Icons' , link: '/interface'  },
        { id: 3, title: 'Stickers' , link: '/interface'  },
        { id: 5, title: 'Animated icons' , link: '/interface'  },
  ];
  

  useEffect(() => {
    const fetchIcons = async () => {
      setIsLoading(true);
      try {
        const query = new URLSearchParams();
        query.append("page", page);
        query.append("limit", 20);
  
        if (filters.categories.length) filters.categories.forEach(c => query.append("categories[]", c));
        if (filters.colors.length) filters.colors.forEach(c => query.append("colors[]", c));
        if (filters.types.length) filters.types.forEach(t => query.append("types[]", t));
  
        if (searchKeyword) query.append("search", searchKeyword);
  
        const finalURL = `https://iconsguru.ascinatetech.com/api/icons?${query.toString()}`;
         
        const response = await fetch(finalURL);
        const data = await response.json();
  
        if (data?.icons?.data && Array.isArray(data.icons.data)) {
          setIcons(data.icons.data);
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
      
    <div className={`totals-sections-mains01 ${isToggled ? 'swowpactive' : ''}`}>
        <aside className="sidebars-subpages pe-4 ps-3 pt-3">
            <div className="looso-shape d-flex align-items-center">
              <div className="isons">
               <Image loading="lazy" src="/shape-icons015.svg"
                                  alt="iconsguru"
                                  width={33}
                                  height={34} />
              </div> 
              <div className="text-loghos">
                <Image loading="lazy" src="/full-text015.svg"
                  alt="iconsguru"
                  width={170}
                  height={25} />
                </div>
            </div>
            
            <div className="slider-filtersr-div">
                <button onClick={handleToggle} className="btn w-100 comon_heading01 d-flex align-items-center filters-btn">
                  <span className="icpn-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)">
                      <path d="M5 7C5 6.17157 5.67157 5.5 6.5 5.5C7.32843 5.5 8 6.17157 8 7C8 7.82843 7.32843 8.5 6.5 8.5C5.67157 8.5 5 7.82843 5 7ZM6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5ZM12 8H20V6H12V8ZM16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17ZM17.5 13.5C15.567 13.5 14 15.067 14 17C14 18.933 15.567 20.5 17.5 20.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5ZM4 16V18H12V16H4Z"></path>
                    </svg>
                  </span>
                  <h4 className="ms-2"> Filter <span className='arose'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>  </span> </h4>
               </button>
              <SidebarFilter onFilterChange={setFilters}  showCategoryFilter={false} />
            </div>
        </aside>
        <div className="rights-sections-sub">
          <NavicationHomeSubpage/>
          <main className="listing-pages floate-start w-100 mb-5">
                  
                  
                
                  <div className="main-divs g-col-6">
                    

                    <div className="serchings-div-filets01">
                     <ul className="d-flex align-items-center menus-list01">
                       {mianmenu.map((page) => (
                            <li className="nav-item" key={page.id}>
                               <Link href={page.link} className="nav-link"> {page.title} </Link>
                            </li>
                        ))}
                     </ul>
                    </div>

                    <h2 className="search-listings01 d-flex align-items-center mb-4"> <span> 
                      Showing <strong className="serch-data">{totalIcons}</strong>
                     </span>
                      {searchKeyword ? `${searchKeyword}` : "All Icons"}</h2>
                    



                    
                    <div className="related-iconstext">
                      <div className="d-flex align-items-center">
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
                        
                    <div className="new-icons-bm w-100 mt-0 position-relative">
                            {isLoading ? (
                              <div className="loading-animations">
                                
                              <Image
                                loading="lazy"
                                src="/ser-loader.svg"
                                alt="iconsguru"
                                width={825}
                                height={364}
                              />
                            </div>
                            ) : Array.isArray(icons) && icons.length > 0 ? (
                              icons.map((icon) => (
                                <article key={icon.Id} className="svg-item  position-relative">
                                  <span className="tags-frees">Free</span>
                                  <Link href={`/details/${icon.icon_name.replace(/\s+/g, "-").toLowerCase()}_${icon.Id}`} className="btn icons-list p-0">
                                    <span dangerouslySetInnerHTML={{ __html: icon.icon_svg }}></span>
                                  </Link>
                                  
                                </article>
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

                          {/* Pagination */}
                          {totalPages > 1 && (
                          <div className="d-flex align-items-center justify-content-center my-5 gap-2 flex-wrap">
                            <button
                              className="btn btn-pre"
                              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                              disabled={page === 1}
                            >
                              ← Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => {
                              const pageNum = index + 1;
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setPage(pageNum)}
                                  className={`btn btn-sm ${page === pageNum ? "btn-primary" : "btn-outline-secondary"}`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}

                            <button
                              className="btn btn-next"
                              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                              disabled={page === totalPages}
                            >
                              Next →
                            </button>
                          </div>
                          )}

                    
                    </div>
                  </div>
                
             
           
          </main>

          <FooterSubpage />
        </div>
    </div>
    </>
  );
}
