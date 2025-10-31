import Link from "next/link";
import Image from "next/image";
import Form from 'next/form';


function NavicationSubpage(){

 return(
     <>
     <header className="sub_header float-start w-100">
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href='/'>
                   <Image loading="lazy" src="/icons_guru_logo.webp"
                        alt="iconsguru"
                        width={114}
                        height={18} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="serach-div-home d-inlin-block ms-5">
                    
                    
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link me-3" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link btn-signup01" data-bs-toggle="modal" data-bs-target="#registerModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg> Get Icons </a>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>
    </header>
     </>
 )
};

export default NavicationSubpage;

