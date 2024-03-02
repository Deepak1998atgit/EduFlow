import React from "react"
import { AnimatePresence, motion } from "framer-motion";
import hero from "./common/assets/hero.png"
import HeroTypeWritter from "../../common/typeWriteronHero";
import ParticlesComponent from "../../common/reactBackgroundParticles";
import HeroBrainImage from "../../../../public/HeroBrainImage.jpg"
const StudentHero: React.FC = () => {
    return (
        <>
          <section id="home"
                className="flex items-center justify-center flex-col gap-12 relative lg:px-48 lg:py-32">
                 <ParticlesComponent/>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
       
            {/* content section */}
            <div className="">
                <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
                    <h2 className="text-3xl lg:text-4xl text-[#061c3a]">Hello, It's me <span className="block tracking-wider mt-4">{""} Deepak V S</span></h2>
                    <h2 className="text-2xl lg:text-4xl text-[#061c3a] mt-4">And Iam <HeroTypeWritter words={["a Developer","a yotuber","a human"]} speed={100}/></h2>
                </div>   
            </div>


            {/* image section */}
            <div className="w-full h-full flex items-start justify-start lg:item-center">
                <motion.img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-auto h-auto object-contain border rounded-full shadow-md"
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
        </>
    );
}

export default StudentHero;