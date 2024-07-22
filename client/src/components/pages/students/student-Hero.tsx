import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroTypeWritter from "../../common/typeWriteronHero";

const StuentHero: React.FC = () => {
    return (
        <section className="h-full p-4">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24 ">
                    {/* Text */}
                    <div className="text-center  xl:text-left order-2 xl:order-none">
                        <span className="">
                        EduFlow.
                        </span>
                        <h1 className="h1 mb-6"> Learning   Knows<br />
                            <span className="inline-block "><HeroTypeWritter words={["No Bounds", "No Limits", "Open Horizons"]} speed={100} /></span></h1>
                        <p className="max-w-[500px] mb-4">
                            EduFlow believe in transforming education through innovative digital experiences. Our goal is to empower learners with knowledge that open new horizons and unlock their full potential.
                        </p>
                        <div className="flex flex-col items-center xl:flex-row gap-5 ">
                            <button className="uppercase gap-3 flex border rounded-3xl w-44  items-center justify-center h-10"><span>View Courses</span><FaDownload /></button>
                            <div>Socials</div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="order-1 xl:oreder-none mb-8 xl:mb-0 ">
                        <div className="w-full h-full relative">
                            <motion.div
                                initial={
                                    {
                                        opacity: 0,
                                    }}
                                animate={
                                    {
                                        opacity: 1,
                                        transition: {
                                            delay: 2,
                                            duration: 0.4,
                                            ease: "easeIn"
                                        }
                                    }
                                }>
                                <motion.div  initial={
                                    {
                                        opacity: 0,
                                    }}
                                animate={
                                    {
                                        opacity: 1,
                                        transition: {
                                            delay: 2.4,
                                            duration: 0.4,
                                            ease: "easeInOut"
                                        }
                                    }
                                } className="xl:top-9 top-6 left-6 xl:left-9 w-[254px] h-[254px] xl:w-[434px] xl:h-[434px]  mix-blend-lighten absolute">
                                    <img
                                        className=" object-cover w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D" alt="" />
                                </motion.div>
                                <motion.svg className="w-[300px] xl:w-[506px]  h-[300px] xl:h-[506px] " fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                                    <motion.circle className="" cx="253" cy="253" r="220" stroke="#80AF81" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}>
                                    </motion.circle>
                                </motion.svg>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default StuentHero;