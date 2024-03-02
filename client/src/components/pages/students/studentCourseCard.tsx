import React from "react"

const StudentCoursecard: React.FC = () => {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold ml-2 mt-4 mb-10">Top courses in Development</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1   p-4 m-2 w-1/2 max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
                        <a href="#">
                            <img  className="p-8 h-48 rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPGnQVHu78hmHVFfsOEZBayRd4kqe2LCsBfjzT-AcA7EpdpggaztiHO6ZxhW9BPTZt8g&usqp=CAU" alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">React</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹1000</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1  p-4 m-2 w-1/2 max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src="data:image/png;base64,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" alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Python</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹1000</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentCoursecard;