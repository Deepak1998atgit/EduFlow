import Nav from "./studentnavdemo"

const header = () => {
    return (
        <header className="py-0 xl:py-12 ">
            <div className="container mx-4 border flex justify-between border-black ">
                <h1 className="text-4xl font-semibold" >Luke<span className="text-accent">.</span></h1>
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



