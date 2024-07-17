import MobileNav from "../common/mobile-nav";
import StudentNav from "./student-nav";
const Links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Wishlist",
        path: "/wishlist"
    },
    {
        name: "Cart",
        path: "/cart"
    },
    {
        name: "Community",
        path: "/community"
    },
    {
        name: "Contact",
        path: "/contact"
    },
];

const StudentHeader: React.FC = () => {
    return (
        <header className="py-5  bg-platinum   border border-b-2 xl:h-30">
            <div className="container mx-4 flex justify-between">
                <h1 className="text-4xl text-darkpink font-semibold" >EduFlow<span className="text-darkred">.</span></h1>
                <div className="hidden xl:flex gap-8 items-center">
                    <StudentNav />
                    <button className="sm:hidden">Hire ME</button>
                </div>
                <div className="xl:hidden ">
                    <MobileNav />
                </div>
            </div>
            <nav className='relative mr-0'>
            <div className="text-3xl cursor-pointer" />
           
                <div className="absolute top-14 right-0 h-screen w-48 bg-platinum border-l border-gray-200">
                    {Links.map((link, index) => (
                        <p key={index}  className="block py-2 px-4 text-gray-800 hover:text-darkpink">{link.name}</p>
                    ))}
                </div>
            
        </nav>
        </header>
    );
}




export default StudentHeader;