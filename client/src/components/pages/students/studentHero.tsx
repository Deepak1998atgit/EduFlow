import React from "react"
import { AnimatePresence, motion } from "framer-motion";
import hero from "./common/assets/hero.png"
import HeroTypeWritter from "../../common/typeWriteronHero";
import ParticlesComponent from "../../common/reactBackgroundParticles";
import HeroBrainImage from "../../../../public/HeroBrainImage.jpg"

const StudentHero: React.FC = () => {
    return (
        <>
            <section id="home" className="flex items-center justify-center  flex-col gap-4 p-20 h-screen">
                {/* <ParticlesComponent/> */}
                <div className="h-full w-full bg-gradient-to-br from-[#6c8eb0] to-[#fce56c]  rounded-br-[200px] lg:p-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
                    {/* content section */}
                    <div>
                        <div className="flex justify-between">
                            <motion.img src="https://www.svgrepo.com/show/492788/book-and-person-winter.svg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="w-auto h-20 object-contain"
                                initial={{ x: 0 }}
                                animate={{ x: 300 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "backInOut"
                                }}>
                            </motion.img>
                            <motion.img src="https://www.svgrepo.com/show/171870/bookmark.svg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="w-auto  object-contain h-16 mr-24 md:mr-24"
                                initial={{ y: 0 }}
                                animate={{ y:[-10,10,-10]}}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: "linear"
                                }}>
                            </motion.img>
                        </div>
                        <motion.div className="w-full h-full flex flex-col items-center lg:items-start justify-center mt-0"
                        initial={{ y: 0 }}
                        animate={{ y:[-50,30,-30]}}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "linear"
                        }}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#061c3a]">Learning Knows <span className="block tracking-wider mt-4">No Limits,</span></h2>
                            <h2 className="text-2xl lg:text-4xl font-semibold text-[#061c3a]  mt-4"><HeroTypeWritter words={["Empowering Minds", "Enriching Futures", "Unlock Your Potential"]} speed={100} /></h2>
                        </motion.div>
                    </div>
                    {/* image section */}
                    <div className="w-full h-full mt-28 md:mt-0 flex items-start justify-start lg:item-center">
                        <motion.img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-auto ml-16 md:ml-0 h-36 md:h-auto object-contain border rounded-full shadow-md"
                            initial={{ y: 0 }}
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear"
                            }}>
                        </motion.img>
                    </div>
                    </div>
                    </div>
            </section>
        </>
    );
}

export default StudentHero;