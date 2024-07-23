import { Rating } from "@material-tailwind/react";
import react, { useState } from "react"
import { CourseInterface } from "../../../types/course";
import { motion } from "framer-motion";

const CourseCard: React.FC<CourseInterface> = ({ rating, price, about, isPaid, title, thumbnail, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showText, setShowText] = useState(false);
    const StarRating = () => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 24 24" stroke="#F7DC6F" fill=" #F7DC6F">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" />
            </svg>
        ));
        return (
            <div className="flex">
                {stars}
            </div>
        );
    };
    return (
        <div className="shadow-md  mb-8 rounded-xl w-80  xl:w-80 cursor-pointer flex flex-col justify-center items-center">
            <div className="relative">
                <img
                    src='./crown.png'
                    alt="Crown Icon"
                    className='w-4  h-4 top-2 left-2 absolute '
                />
                <img
                    src={thumbnail?.url}
                    alt="Course Image"
                    className='w-80  h-48 z-10 rounded-t-xl'
                />
                <button className="bg-[#dfefe4] text-black text-base h-11 w-full flex items-center justify-center">
                    Add to cart
                </button>
            </div>
            <div className='pl-3 h-52'>
                <p className='font-medium leading-6 mt-5 text-xl'>{title}</p>
                <p className='font-light mt-1 text-sm text-[#566c45]'>Dr.Arman</p>
                <div className='flex items-center mt-3 relative'>
                    <img src="./rupee.jpg" alt="Rupee Symbol" className='w-6 absolute' />
                    <p className='text-xl z-10 ml-4'>{price}</p>
                </div>
                <div className='flex mt-1'>
                    <p className='mr-2'>4.7</p><StarRating /><p className='ml-2 font-thin text-[#4C5E64]'>(7727)</p>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;