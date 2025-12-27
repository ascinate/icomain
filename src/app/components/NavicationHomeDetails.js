import Link from "next/link";
import Image from "next/image";
import SerchInputes from "./SerchInputes";


function NavicationHomeDetails(){
    const mianmenu = [
        { id: 1, title: 'Icons' , link: '/icons'  },
        { id: 2, title: 'Interface Icons' , link: '/interface'  },
        { id: 3, title: 'Stickers' , link: '/interface'  },
        { id: 5, title: 'Animated icons' , link: '/interface'  },
      ];
 return(
     <>
     <header className="sub_header home-menus deatisl-all-page pb-0 float-start w-100">
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" href='/'>
                    <Image loading="lazy" src="/icon-logos.jpg"
                                            alt="iconsguru"
                                            width={223}
                                            height={53} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
             
                <div className="serach-listings-apge d-none d-lg-block">
                     <SerchInputes/>
                </div>
                <div className="right-menus-div01 ms-auto d-none d-lg-flex align-items-center justify-content-end">
                     <ul className="list-right-btn-div d-flex align-items-center mb-0 justify-content-end">
                        <li>
                           <Link href='/login' className="nav-link  why-menu-btn"> Log in </Link> 
                        </li>
                        <li>
                           <Link href='/register' className="nav-link ms-3 signup-btn10"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg> Get Icons </Link> 
                        </li>
                     </ul>
                    {/* <Link href='/login' className="btn me-3">Login</Link>
                    <Link href='/register' className="btn btn-signup01" >Sign Up </Link> */}
                </div>
            </div>

            <div className="serach-listings-apge d-block d-lg-none w-100">
                     <SerchInputes/>
            </div>
        </nav>
    </header>
     </>
 )
};

export default NavicationHomeDetails;

