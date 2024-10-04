import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
    return (
        <div>
            <div className=' text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className=' text-gray-700 font-medium'>US</span> </p>
            </div>
            <div className=' flex flex-col md:flex-row justify-center gap-12 my-10 flex-wrap items-center'>
                <div >
                    <img className=' md:max-w-[360px]' src={assets.about_image} />

                </div>
                <div className='justify-center  flex flex-col gap-3 items-center flex-1 md:w-2/4 md:min-w-72 text-sm text-gray-600'>
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records</p>
                    <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.

                    </p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>
            <div className='text-2xl my-4 sm:text-center '>
                <p>WHY <span className=' text-gray-700'>CHOOSE US</span> </p>

            </div>
            <div className=' flex flex-col sm:gap-6 md:gap-9 justify-center md:flex-row flex-wrap sm:items-center md:items-end'>
                <div className=' border border-gray-400 min-w-[200px] max-w-[250px] rounded-md p-12 justify-center flex flex-col gap-2 hover:bg-primary hover:text-white duration-300 transition-all cursor-pointer h-[200px]'>
                    <b className=''>EFFICIENCY:
                    </b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className=' border border-gray-400 min-w-[200px] max-w-[250px] rounded-md p-12 justify-center flex flex-col gap-2 hover:bg-primary hover:text-white duration-300 transition-all cursor-pointer h-[200px]'>
                    <b className=''>CONVENIENCE:</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className=' border border-gray-400 min-w-[200px] max-w-[250px] rounded-md p-12 justify-center flex flex-col gap-2 hover:bg-primary hover:text-white duration-300 transition-all cursor-pointer h-[200px]'>
                    <b className=''>PERSONALIZATION</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>


        </div>
    )
}

export default About