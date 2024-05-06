import React from "react"
import { BookingCard } from "./common/components/card";

const StudentCoursecard: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
                <BookingCard/>
                <BookingCard/>
                <BookingCard/>
                <BookingCard />
                <BookingCard />
                <BookingCard/>
            </div>
        </>
    )
}

export default StudentCoursecard;