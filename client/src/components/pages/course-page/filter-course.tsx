import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Range, getTrackBackground } from "react-range";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightSLine } from "react-icons/ri";
import {IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PiSquaresFourLight } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
 
import {
    Input,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";


interface Category {
    id: number;
    name: string;
    subcategories: string[];
}


interface SelectedPathItem {
    name: string[];
    categoryId: string;
    parentCategory?: string;
}

const FilterCourse: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        if (isOpen) { return null }
        setIsOpen(true);
    };
    const courseData = [
        {
            id: 1,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        }, {
            id: 2,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        }, {
            id: 3,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        }, {
            id: 4,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        }, {
            id: 5,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        }, {
            id: 6,
            title: "AWS Certified Solutions Architect",
            tag: "Design",
            duration: "3 Months",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Lina",
            originalPrice: "$100",
            discountedPrice: "$80",
            imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzfGVufDB8fDB8fHww",
            authorImg: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        },
        // Repeat this object 7 more times with different data or use the same for simplicity
        // You can customize data for each course if needed.
    ];

    const CourseCard = ({ course }: { course: any }) => {
        return (
            <Card className="w-1/4 p-4 shadow-lg rounded-lg m-4">
                {/* Image Section */}
                <img
                    src={course.imgSrc}
                    alt="Course Thumbnail"
                    className="w-full h-40 rounded-3xl border-black object-cover"
                />
                <CardBody className="p-4">
                    {/* Tag and Duration */}
                    <div className="flex items-center  justify-between text-gray-500 space-x-2 text-sm">
                        <div  className="flex items-center gap-1  justify-between">
                        <PiSquaresFourLight /><span>{course.tag}</span>
                        </div>
                        <div  className="flex items-center gap-1 justify-between">
                        <FiClock /><span>{course.duration}</span>
                        </div>
                        
                    </div>
                    {/* Course Title */}
                    <Typography variant="h6" color="blue-gray" className="font-semibold mt-2">
                        {course.title}
                    </Typography>

                    {/* Description */}
                    <Typography color="gray" className="text-sm mt-1">
                        {course.description}
                    </Typography>
                    {/* Author and Price */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                            <Avatar
                                src={course.authorImg}
                                alt="Author"
                                size="sm"
                            />
                            <span className="text-sm font-medium">{course.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400 line-through">{course.originalPrice}</span>
                            <span className="text-green-500 font-semibold">{course.discountedPrice}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    };

    const [values, setValues] = useState([1000, 6000]); // Two values for dual handles
    const [selectedPath, setSelectedPath] = useState<SelectedPathItem[]>([]);
    const min = 1000;
    const max = 6000;
    const categories: Category[] = [
        { name: "Category", id: 1, subcategories: ["Item 1A", "Item 1B", "Item 1C"] },
        { name: "Instructors", id: 2, subcategories: ["Item 2A", "Item 2B", "Item 2C"] },
        { name: "Level", id: 3, subcategories: ["Item 3A", "Item 3B", "Item 3C"] },
        { name: "Free Courses", id: 4, subcategories: ["Item 4A", "Item 4B", "Item 4C"] },
        { name: "Duration", id: 5, subcategories: ["Item 5A", "Item 5B", "Item 5C"] },
        { name: "Popular Courses", id: 6, subcategories: ["Item 6A", "Item 6B", "Item 6C"] },
    ];
    const handleCategoryClick = (subcategory: string[], id: string) => {
        setSelectedPath((prevPath) => {
            const existingIndex = prevPath.findIndex((item) => item.categoryId === id);
            if (existingIndex >= 0) {
                // ID exists, so update the name at that index
                const updatedPath = [...prevPath];
                updatedPath[existingIndex] = { ...updatedPath[existingIndex], name: subcategory };
                return updatedPath;
            } else {
                // ID doesn't exist, so add a new entry
                return [...prevPath, { name: subcategory, categoryId: id }];
            }
        });
    };
    console.log(selectedPath)
    const [active, setActive] = React.useState(1);

    const getItemProps = (index: number) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    } as any);

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    return (
        <>
            <div className="h-full flex flex-col gap-0 items-center justify-center pt-24">
                <div className="rounded-b-3xl flex flex-col items-center justify-center border-2 opacity-60 w-11/12 h-44 bg-center">
                    <div className="flex w-11/12">
                        <Input
                            type="email"
                            placeholder="Search"
                            className="!border-1 focus:outline-none !border-[#49BBBD]"
                            labelProps={{
                                className: "hidden",
                            }}
                            crossOrigin
                        />
                        <Button className="rounded-none bg-[#49BBBD]">Search</Button>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {categories.map((category, index) => (
                            <Menu key={index}>
                                <MenuHandler>
                                    <Button className="flex items-center justify-center">
                                        {category.name}
                                        <MdOutlineKeyboardArrowDown />
                                    </Button>
                                </MenuHandler>
                                <MenuList onClick={toggleDiv} className="z-20">
                                    {category.subcategories.map((subcategory, itemIndex) => (
                                        <MenuItem className="mb-3" key={itemIndex} onClick={() => handleCategoryClick(subcategory, category.id)}> {subcategory}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" flex mb-11  w-full">
                <div className="w-1/4 pl-16  mt-5">
                    <div className="flex flex-col w-full">
                        <Range
                            values={values}
                            step={1}
                            min={min}
                            max={max}
                            onChange={(newValues) => setValues(newValues)}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        height: "6px",
                                        width: "100%",
                                        background: getTrackBackground({
                                            values,
                                            colors: ["#49BBBD", "#49BBBD", "#49BBBD"],
                                            min,
                                            max,
                                        }),
                                        borderRadius: "0px", // Square edges
                                    }}
                                    className="border"
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({ index, props }) => (
                                <div
                                    {...props}

                                    className="flex items-center b h-[30px] focus:outline-none rounded-lg opacity-50 bg-[#49BBBD] round w-[30px] justify-center"
                                />
                            )}
                        />
                        <div className="flex justify-between w-full mt-4">
                            <span className="text-[15px]  flex justify-center items-center">&#x20B9;{values[0]}.0</span>
                            <span className=" text-[15px]   flex justify-center items-center ">&#x20B9;{values[1]}.0</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full pl-10 mt-2  pr-20">
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }} // Start off-screen above
                        animate={{ y: isOpen ? '20%' : '-100%', opacity: isOpen ? 1 : 0 }} // Slide down when open
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="bg-[#49BBBD] rounded-full flex  items-center  w-full pl-4"
                    >
                        <p className="flex flex-row space-x-2">
                            {selectedPath.map((item, index) => (
                                <span
                                    className="text-[15px] flex font-medium items-center justify-center text-white text-opacity-100"
                                    key={index}
                                >
                                    {`${item.name}`} <RiArrowRightSLine size={20} />
                                </span>
                            ))}
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {courseData.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}

            </div>
            <div className="flex w-full items-center mt-6 mb-4 justify-center gap-4">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)} className="rounded-none w-16 flex items-center justify-center h-16">1</IconButton>
                    <IconButton {...getItemProps(2)} className="rounded-none  w-16 flex items-center justify-center h-16">2</IconButton>
                    <IconButton {...getItemProps(3)} className="rounded-none  w-16 flex items-center justify-center h-16">3</IconButton>
                    <IconButton {...getItemProps(4)} className="rounded-none  w-16 flex items-center justify-center h-16">4</IconButton>
                    <IconButton {...getItemProps(5)} className="rounded-none  w-16 flex items-center justify-center h-16">5</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </>
    );
};
export default FilterCourse;

