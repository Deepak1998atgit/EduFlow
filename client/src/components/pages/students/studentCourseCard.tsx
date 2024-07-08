import React from "react"
import ListCourse from "../course-page/list-course";


const StudentCoursecard: React.FC = () => {
    return (
        <>
            <div className="p-7">
                <div className="grid grid-cols-1  md:grid-cols-4  gap-10">
                    < ListCourse />
                    < ListCourse />
                    < ListCourse />
                    < ListCourse />
                    < ListCourse />
                    < ListCourse />
                </div>
            </div>
        </>
    )
}

export default StudentCoursecard;