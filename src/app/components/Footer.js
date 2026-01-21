import Link from "next/link";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Image from "next/image";

function Footer(){
    const mianmenu = [
        { id: 1, title: 'Why us' , link: '/whyus'  },
        { id: 2, title: 'Blog' , link: 'https://blog.icontrove.com/'  },
        { id: 3, title: 'Pricing' , link: '/pricing'  },
        
    ];
    const categorymenu = [
        { id: 1, title: 'Bold' , link: '/'  },
        { id: 2, title: 'Solid' , link: '/'  },
        { id: 3, title: 'Regular' , link: '/'  },
        { id: 4, title: 'Thin' , link: '/'  },
    ];
    const topicons = [
        { id: 1, title: 'Sports' , link: '/icons/Sports'  },
        { id: 2, title: 'Health' , link: '/icons/Health'  },
        { id: 3, title: 'Music' , link: '/icons/Music'  },
        { id: 4, title: 'Weather' , link: '/icons/Weather'  },
    ];
    const supports = [
        { id: 1, title: 'Help & Support' , link: '/help'  },
        { id: 2, title: 'FAQ' , link: '/faq'  },
        { id: 3, title: 'Privacy policy' , link: '/privacy'  },
    ];

    const request = [
        { id: 1, title: 'Icon' , link: '/'  },
        { id: 2, title: 'Illustration' , link: '/'  },
        { id: 3, title: 'Feature' , link: '/'  },
    ];

    const developmenrs = [
        { id: 1, title: 'Icons API' , link: '/'  },
        { id: 2, title: 'Illustrations API' , link: '/'  },
        { id: 3, title: 'Music API' , link: '/'  },
    ];
    const onlinetools = [
        { id: 1, title: 'Mega Creator' , link: '/'  },
        { id: 2, title: 'Smart Upscaler' , link: '/'  },
        { id: 3, title: 'Background Remover' , link: '/'  },
    ];
    const lincesn = [
        { id: 1, title: 'Free license' , link: '/'  },
        { id: 2, title: 'Paid license' , link: '/'  },
        { id: 3, title: 'Pricing' , link: '/'  },
    ];
    
    return(
        <>
        <footer className="float-start  comon-short-parts w-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="comon-footers-div01 mb-0">
                            <Link href='/'>
                                <Image loading="lazy" src="/footer-1l.svg"
                                        alt="iconsguru"
                                        width={174}
                                        height={46} />
                            </Link>
                            <p className="text-white ft-paras"> Empowering creativity through icons</p>
                          
                          <div className="row row-cols-1 row-cols-lg-3 mt-4">
                              <div className="col">
                                 <div className="comon-ctegories01 d-inline-block w-100">
                                    <h5 className="text-white"> Company </h5>
                                    <ul className="p-0 m-0 mt-3">
                                        <li>
                                            <Link href='https://ascinatetech.com/about' target="_blank" className="trust01">About</Link>
                                        </li>
                                        <li>
                                            <Link href='https://ascinatetech.com/careers' target="_blank" className="trust01">Careers</Link>
                                        </li>
                                        <li>
                                            <Link href='https://ascinatetech.com/blog' target="_blank" className="trust01">Blog</Link>
                                        </li>
                                    </ul>
                                 </div>
                              </div>

                              <div className="col">
                                 <div className="comon-ctegories01 d-inline-block w-100">
                                    <h5 className="text-white"> Resources </h5>
                                    <ul className="p-0 m-0 mt-3">
                                        <li>
                                            <Link href='/privacy' className="trust01">Tutorials</Link>
                                        </li>
                                        <li>
                                            <Link href='/terms' className="trust01">ΑΡΙ</Link>
                                        </li>
                                        <li>
                                            <Link href='/privacy' className="trust01">Docs</Link>
                                        </li>
                                    </ul>
                                 </div>
                              </div>

                              <div className="col">
                                 <div className="comon-ctegories01 d-inline-block w-100">
                                    <h5 className="text-white"> Community </h5>
                                    <ul className="p-0 m-0 mt-3">
                                        <li>
                                            <Link href='https://www.facebook.com/profile.php?id=61586573832038' target="_blank" className="trust01">Facebook</Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.instagram.com/icons_geek/' target="_blank" className="trust01">Instagram</Link>
                                        </li>
                                        <li>
                                            <Link href='https://x.com/home' className="trust01" target="_blank">Twitter</Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.linkedin.com/in/icons-geek-b6b1963a7/' target="_blank" className="trust01">LinkedIn</Link>
                                        </li>
                                    </ul>
                                 </div>
                              </div>

                          </div>

                        </div>
                    </div>
                    <div className="col-lg-4 d-grid">
                        <div className="categires d-inline-block w-100">
                             <h4 className="text-white"> Popular Categories </h4>
                             <ul className="mt-0 flex-wrap lisu015-lis ps-0">
                                <li>
                                    <Link href='/icons/Sports' className="trust01">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(255,255,255,1)"><path d="M12.366 13.366L14.1407 14.3911C13.05 16.8036 12.9953 19.4669 13.8296 21.8314C13.2375 21.9426 12.6255 22 12 22C10.5353 22 9.14414 21.6851 7.89054 21.1193L12.366 13.366ZM15.8835 15.3976L20.1168 17.8423C19.0224 19.3601 17.5128 20.5586 15.7543 21.2714C15.1047 19.511 15.0756 17.5348 15.7624 15.7017L15.8835 15.3976ZM8.85892 11.3417L10.634 12.366L6.15773 20.1168C4.5194 18.9355 3.25309 17.2704 2.56813 15.3308C4.92702 14.8924 7.11579 13.6115 8.65334 11.6179L8.85892 11.3417ZM21.9051 10.6165C21.9677 11.0687 22 11.5306 22 12C22 13.4647 21.6851 14.8559 21.1193 16.1095L16.8838 13.6649C18.1057 12.0497 19.8575 11.0078 21.7497 10.6436L21.9051 10.6165ZM2.8807 7.89054L7.11588 10.3356C5.86043 11.9949 4.0458 13.0491 2.09489 13.3854C2.03239 12.932 2 12.4698 2 12C2 10.5353 2.3149 9.14414 2.8807 7.89054ZM17.8423 3.88318C19.4803 5.06428 20.7465 6.72901 21.4315 8.66817C19.0721 9.108 16.8836 10.3891 15.3463 12.3826L15.1407 12.6588L13.366 11.634L17.8423 3.88318ZM12 2C13.4647 2 14.8559 2.3149 16.1095 2.8807L11.634 10.634L9.85892 9.60983C10.95 7.19703 11.0048 4.53332 10.1704 2.16848C10.7625 2.05742 11.3745 2 12 2ZM8.24679 2.72936C8.89548 4.48945 8.92444 6.46595 8.2373 8.2992L8.11613 8.60335L3.88318 6.15773C4.93611 4.69744 6.37339 3.53272 8.04682 2.81177L8.24679 2.72936Z"></path></svg> </span> Sports </Link>
                                </li>
                                <li>
                                    <Link href='/icons/Health' className="trust01">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(255,255,255,1)"><path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C5.51545 2.99926 8.09315 2.56029 10.2605 3.44044L6.34315 7.35843L7.75736 8.77264L12 4.53L11.9872 4.51617C11.9918 4.52028 11.9964 4.5244 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path></svg> </span> Health </Link>
                                </li>
                                <li>
                                    <Link href='/icons/Music' className="trust01">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(255,255,255,1)"><path d="M13 9.17071C12.6872 9.06015 12.3506 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V2.4578C19.0571 3.73207 22 7.52236 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.3375 2 12.6711 2.01672 13 2.04938V9.17071Z"></path></svg> </span> Music </Link>
                                </li>
                                <li>
                                    <Link href='/icons/Weather' className="trust01">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(255,255,255,1)"><path d="M17 7C13.5705 7 10.6449 9.15804 9.50734 12.1903L11.3805 12.8927C12.2337 10.6185 14.4278 9 17 9C17.6983 9 18.3687 9.11928 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2C15.242 2 17.9693 4.20399 18.7652 7.19539C18.1973 7.0675 17.6065 7 17 7Z"></path></svg> </span> Weather </Link>
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>
               
                <hr className="my-4"/>
                
                <div className="row row-cols-1 row-cols-lg-2 g-lg-0">
                   
                   <div className="col "> <p className="text-white copy-text1 copt-lisk"> &copy; {new Date().getFullYear()} iconsgeek.com | All Rights Reserved. <Link href="https://ascinatetech.com/" className="links-btn01"> Ascinate Technology Project. </Link>  </p> </div>
                   <div className="col d-grid justify-content-lg-end">
                      <ul className="d-flex align-items-center copy-text1 p-0 m-0 copt-lisk">
                        <li>
                            <Link href='/terms' className="trust01"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></Link>
                        </li>
                        <li className="mx-3">
                            <Link href='/terms' className="trust01"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg></Link>
                        </li>
                        <li>
                            <Link href='/terms' className="trust01"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M5.33317 5.33333C5.33317 3.49238 6.82556 2 8.6665 2H11.9997H11.9998H15.333C17.174 2 18.6663 3.49238 18.6663 5.33333C18.6663 7.17428 17.174 8.66667 15.333 8.66667H11.9998H11.9997L11.9997 12L11.9997 15.3333V18.6667C11.9997 20.5076 10.5073 22 8.66634 22C6.82539 22 5.33301 20.5076 5.33301 18.6667C5.33301 16.8257 6.82539 15.3333 8.66634 15.3333C6.82539 15.3333 5.33301 13.841 5.33301 12C5.33301 10.1591 6.82539 8.66667 8.66634 8.66667H8.6665C6.82555 8.66667 5.33317 7.17428 5.33317 5.33333ZM11.9997 12C11.9997 13.841 13.4921 15.3333 15.333 15.3333C17.174 15.3333 18.6663 13.841 18.6663 12C18.6663 10.1591 17.174 8.66667 15.333 8.66667C13.4921 8.66667 11.9997 10.1591 11.9997 12Z"></path></svg></Link>
                        </li>
                      </ul>
                   </div>
                </div>
            </div>
        </footer>
     


       

        </>
    )
   };
   
   export default Footer;
