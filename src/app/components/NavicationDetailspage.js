import Link from "next/link";
import Image from "next/image";
import Form from 'next/form';


function NavicationDetailspage(){
    const mianmenu = [
        { id: 1, title: 'Icons' , link: '/icons'  },
        { id: 2, title: 'Interface Icons' , link: '/interface'  },
        { id: 3, title: 'Stickers' , link: '/interface'  },
        { id: 5, title: 'Animated icons' , link: '/interface'  },
      ];
 return(
     <>      
        <ul className="last-navications">
            {mianmenu.map((page) => (
                <li className="nav-item" key={page.id}>
                    <Link href={page.link} className="nav-link"> {page.title} </Link>
                </li>
            ))}
        </ul>     
     </>
 )
};

export default NavicationDetailspage;

