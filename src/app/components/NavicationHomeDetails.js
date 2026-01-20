"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SerchInputes from "./SerchInputes";


function NavicationHomeDetails() {
   const router = useRouter();
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const token = localStorage.getItem("access_token");
      const user = localStorage.getItem("user");

      if (token && user) {
         setIsLoggedIn(true);
      } else {
         setIsLoggedIn(false);
      }
   }, []);

   const handleLogout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      setIsLoggedIn(false);
      router.push("/");
   };

   const mianmenu = [
      { id: 1, title: 'Icons', link: '/icons' },
      { id: 2, title: 'Interface Icons', link: '/interface' },
      { id: 3, title: 'Stickers', link: '/stickers' },
   ];


   return (
      <>
         <header className="sub_header home-menus deatisl-all-page pb-0 float-start w-100">
            <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container">
                  <Link className="navbar-brand" href='/'>
                     <Image loading="lazy" src="/mains-logo.svg"
                        alt="iconsgeek"
                        width={136}
                        height={43} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav lefts-colous10 ms-3 mb-2 mb-lg-0">
                        {mianmenu.map((page) => (
                           <li className="nav-item" key={page.id}>
                              <Link href={page.link} className="nav-link"> {page.title} </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="right-menus-div01 ms-auto d-none d-lg-flex align-items-center justify-content-end">
                     <div className="serach-listings-apge d-none d-lg-block">
                        <SerchInputes />
                     </div>
                     <ul className="list-right-btn-div d-flex align-items-center mb-0 justify-content-end">

                        {!isLoggedIn ? (
                           <>
                              <li>
                                 <Link href='/login' className="nav-link  why-menu-btn"> Log in </Link>
                              </li>
                              <li>
                                 <Link href='/register' className="nav-link ms-3 signup-btn10"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg> Get Icons </Link>
                              </li>
                           </>
                        ) : (
                           <>
                              <li>
                                 <button
                                    onClick={handleLogout}
                                    className="nav-link  why-menu-btn"
                                 >
                                    Logout
                                 </button>
                              </li>
                           </>
                        )}

                     </ul>
                  </div>
               </div>

               <div className="serach-listings-apge d-block d-lg-none w-100">
                  <SerchInputes />
               </div>
            </nav>
         </header>
      </>
   )
};

export default NavicationHomeDetails;

