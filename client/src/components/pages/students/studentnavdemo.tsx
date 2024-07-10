import { useLocation } from 'react-router-dom';

const Links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "contact",
        path: "/contact"
    }
]


const Nav = () => {
    const location = useLocation();
    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => { 
                return(
                    <>
                        <button key={index} className={`${link?.path === location?.pathname && "text-red border-b-2 border-red-950" } capitalize hover:text-blue-400 transition-all`} >{link.name }</button>
                    </>
                )
            })}
        
        </nav>
    )
}



export default Nav