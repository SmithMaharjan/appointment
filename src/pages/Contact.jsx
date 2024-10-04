import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
    return (
        <div>
            <p className=' m-10 text-2xl text-center tracking-wide text-gray-700 font-medium '>CONTACT <span className=' text-gray-900 font-medium'>US</span></p>
            <div className=' flex flex-col md:flex-row gap-10 justify-center flex-wrap'>
                <div>
                    <img className=' md:max-w-96' src={assets.contact_image} />
                </div>
                <div className=' flex flex-col gap-5 pt-6 min-w-60  items-center'>
                    <b className=' '>Our Office</b>
                    <p className=' text-gray-600'>00000 Willms Station<br />
                        Suite 000, Washington, USA</p>
                    <p className=' text-gray-700'>
                        Tel: (000) 000-0000<br />
                        Email: greatstackdev@gmail.com
                    </p>
                    <b className=' text-[17px] text-gray-600'>CAREERS AT PRESCRIPTO</b>
                    <p className=' text-sm '>Learn more about our teams and job openings</p>
                    <button className=' text-sm hover:bg-primary transition-all duration-500 hover:text-white md:max-w-40 border border-gray-500 px-4 py-4'>Explore Now</button>
                </div>
            </div>

        </div>
    )
}

export default Contact