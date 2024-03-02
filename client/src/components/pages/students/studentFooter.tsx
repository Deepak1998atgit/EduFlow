import React from 'react'
import { NavLink } from 'react-router-dom'

export default function studentFooter() {
    return (
        <>
            <div className=" bottom-0 h-45 flex left-0 w-full bg-gray-800 text-white border-b border-solid border-gray-300 p-4">
                <div className='flex-1 '>
                 <h2>Teach the world online</h2>
                 <p className='mt-4'>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <div className='flex-2'>
                <NavLink to='/instructor-welcome' className='w-36  text-white border-blue-500 rounded-none'>Teach on EduFlow</NavLink >
                </div>
            </div>
            <div className=" bottom-0 h-45 flex left-0 w-full bg-gray-800 text-white border-b border-solid border-gray-300 p-4">
                <div className='flex-1 mt-2'>
                 <h1>Top companies choose Udemy Business to build in-demand career skills.</h1>
                </div>
                <div className='flex-2 flex items-center'>
                 <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
                 <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
                 <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
                 <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
                 <img className='ml-4' src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
                </div>
            </div>
            
            <div className="flex left-0 w-full  bg-gray-800 text-white  p-4">
                <div className='flex-1 h-40'>
                 <h2>EDUFLOW</h2>
                </div>
                <div className='flex-2'>
                © 2023 EDUFLOW, Inc.
                </div>
            </div>
        </>
    )
}
