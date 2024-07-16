import Nav from "./studentnavdemo"


const header = () => {
    return (
        <header className="py-0 xl:py-12 bg-platinum ">
            <div className="container mx-4 flex justify-between  ">
                <h1 className="text-4xl text-darkpink font-semibold" >EduFlow<span className="text-darkred">.</span></h1>
                <div className="hidden xl:flex gap-8 items-center ">
                    <Nav />
                    <button className="">Hire ME</button>

                </div>
                <div className="xl:hidden">Mobile Nav</div>

            </div>

        </header>
    )
}


export default header



