import MenuItem from "./components/MenuItem";
import { AnimatePresence, motion } from "framer-motion";
import hero from "./assets/hero.png"
import HeroTypeWritter from "./components/HeroTypeWritter";
const Home = () => {
    return <section id="home"
    className="flex items-center justify-center flex-col gap-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">


            {/* content section */}
            <div className="">
                <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
                    <h2 className="text-3xl lg:text-4xl text-texlight">Hello, It's me <span className="block tracking-wider mt-4">{""} Deepak V S</span></h2>
                    <h2 className="text-2xl lg:text-4xl text-texlight mt-4">And Iam <HeroTypeWritter words={["a Developer","a yotuber","a human"]} speed={100}/></h2>
                </div>   
            </div>


            {/* image section */}
            <div className="w-full h-full flex items-start justify-start lg:item-center">
                <motion.img src={hero}
                    className="w-1/2 h-auto object-contain "
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        repeat: Infinity,
                        duration:2,
                        ease:"linear"
                    }}>
                    
                </motion.img>
            </div>

        </div> 
    </section>
}

export default Home;