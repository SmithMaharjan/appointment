import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className=' flex rounded-lg sm:px-10 md:px-14 lg:px-12 my-20 px-6 md:mx-10  bg-primary'>
            <div className=' flex flex-col items-center md:items-start flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
                    <p className=' md:text-left text-center'>Book Appointment</p>
                    <p className=' mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => navigate("/login")} className=' bg-white rounded-full text-gray-900 px-8 py-3 hover:scale-105 transition-all duration-200 text-sm mt-3'>Create account</button>

            </div>
            <div className=' hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className=' md:h-[330px] lg:h-auto w-full absolute right-0 bottom-0 max-w-md' src={assets.appointment_img} />
            </div>
        </div>
    )
}

export default Banner