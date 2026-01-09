"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SerchInputes from "./SerchInputes";


function NavicationHome() {
    const mianmenu = [
        { id: 1, title: 'Icons', link: '/icons' },
        { id: 2, title: 'Interface Icons', link: '/interface' },
        { id: 3, title: 'Stickers', link: '/interface' },
        { id: 5, title: 'Animated icons', link: '/interface' },
    ];

    const mobilenmenu = [
        { id: 1, title: 'Icons', link: '/icons' },
        { id: 2, title: 'Interface Icons', link: '/interface' },
        { id: 3, title: 'Stickers', link: '/interface' },
        { id: 5, title: 'Animated icons', link: '/interface' },
        { id: 5, title: 'Log in', link: '/login' },
        { id: 6, title: 'Sign up', link: '/register' },

    ];

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

    return (
        <>
            <header className="sub_header home-menus float-start w-100">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand" href='/'>
                            <Image loading="lazy" src="/icon-logos.jpg"
                                alt="iconsguru"
                                width={223}
                                height={53} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {mianmenu.map((page) => (
                                    <li className="nav-item" key={page.id}>
                                        <Link href={page.link} className="nav-link"> {page.title} </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="right-menus-div01 ms-auto d-none d-lg-flex align-items-center">
                            <ul className="list-right-btn-div d-flex align-items-center mb-0 justify-content-end">
                                {!isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link href='/login' className="nav-link why-menu-btn"> Log in </Link>
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
                </nav>
            </header>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="dropdown mt-3">
                        <Link className="navbar-brand" href='/'>
                            <Image loading="lazy" src="/icon-logos.jpg"
                                alt="iconsguru"
                                width={223}
                                height={53} />
                        </Link>
                        <ul className="dropdown-menu-mob">
                            {mobilenmenu.map((page) => (
                                <li className="nav-item" key={page.id} data-bs-dismiss="offcanvas">
                                    <Link href={page.link} className="nav-link"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(31,177,65,1)"><path d="M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11Z"></path></svg> {page.title} </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NavicationHome;

