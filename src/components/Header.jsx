import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
    return (
        <div className=' flex flex-col md:flex-row flex-wrap
         bg-primary px-6  rounded-lg md:px-10 lg:px-20 mb-6 '>
            <div className='md:w-1/2 flex flex-col md:items-start items-center justify-center gap-4 py-16 m-auto md:py-[18vh] md:mb-[-30px]'>
                <p className=' text-2xl md:text-3xl lg:text-4xl leading-tight text-white font-semibold '>Book Appointment <br /> With Trusted Doctor<br /></p>
                <div className=' flex flex-col gap-3 items-center md:items-start text-white text-sm font-light'>
                    <img className=' w-28' src={assets.group_profiles} alt='' />
                    <p>simply browse through our extensive list of trusted doctors <br /> schedule your appointment now</p>
                </div>
                <a href='#speciality' className=' flex gap-3 justify-center px-3 py-3 rounded-full bg-white text-primary hover:scale-105 m-auto md:m-0 transition-all duration-300'>
                    Book appointment
                    <img className=' w-3' src={assets.arrow_icon} />

                </a>
            </div>

            {/* right side */}

            <div className=' md:w-1/2 relative '>
                <img className=' bottom-0 md:absolute md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px] ' src={assets.header_img} />
            </div>


        </div>
    )
}

export default Header