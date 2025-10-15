import Link from "next/link";
import Image from "next/image";
import Form from 'next/form';
import SerchInputes from "./SerchInputes";


function NavicationHomeSubpage(){
    const mianmenu = [
        { id: 1, title: 'Icons' , link: '/icons'  },
        { id: 2, title: 'Interface Icons' , link: '/interface'  },
        { id: 3, title: 'Stickers' , link: '/interface'  },
        { id: 5, title: 'Animated icons' , link: '/interface'  },
      ];
 return(
     <>
     <header className="sub_header sub-menu-pages home-menus float-start w-100">
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-0">
                <Link className="navbar-brand d-lg-none" href='/'>
                    <Image loading="lazy" src="/icons_guru_logo.svg"
                        alt="iconsguru"
                        width={160}
                        height={34} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ser-listu-lis sub-listu-div01">
                      <SerchInputes/>
                    </div>

                </div>
                <div className="right-menus-div01 ms-auto d-flex align-items-center">
                     <ul className="list-right-btn-div mb-0 d-flex align-items-center justify-content-end">
                        <li>
                           <Link href='/login' className="nav-link me-3 why-menu-btn"> Log in </Link> 
                        </li>
                        <li>
                           <Link href='/register' className="nav-link signup-btn10"> Start for Free </Link> 
                        </li>
                     </ul>
                    {/* <Link href='/login' className="btn me-3">Login</Link>
                    <Link href='/register' className="btn btn-signup01" >Sign Up </Link> */}
                </div>
            </div>
        </nav>
    </header>
     </>
 )
};

export default NavicationHomeSubpage;

