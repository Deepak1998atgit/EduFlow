import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const StuentHero: React.FC = () => {
    return (
        <section className="h-full p-4">
            <div className="container mx-auto  h-full">
                <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24 ">
                    {/* Text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="">
                            Software developer
                        </span>
                        <h1 className="h1 mb-6">Hello Iam <br />
                            <span>Luke Coleman</span></h1>
                        <p className="max-w-[500px] mb-4">
                            I am excel at crafting  elegent digital experiences  and iam proficient in various  programming languages and  technologies.
                        </p>
                        <div className="flex flex-col items-center xl:flex-row gap-5 ">
                            <button className="uppercase gap-3 flex border rounded-3xl w-44  items-center justify-center h-10"><span>View Courses</span><FaDownload /></button>
                            <div>Socials</div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="order-1 xl:oreder-none mb-8 xl:mb-0 ">
                        <motion.div
                            initial={
                                {
                                    opacity: 0,
                                }}
                            animate={
                                {
                                    opacity:1,
                                    transition:{
                                        delay: 2,
                                        duration: 0.4,
                                        ease:"easeIn"
                                    }
                                }
                            }>
                            <div>
                                <img
                                    className=" object-contain mix-blend-lighten  w-[298px] h-[298px] xl:w-[498px]"
                                    src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default StuentHero;