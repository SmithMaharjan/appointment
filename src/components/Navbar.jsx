import React, { useState } from 'react'
import { assets } from "../assets/assets_frontend/assets.js"
import { NavLink, useNavigate } from 'react-router-dom'
import navbar from '../datas/navbar.js'
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className=' flex justify-between py-5 items-center border-b border-b-gray-400 mb-5 text-sm'>
            <img className=' w-44 cursor-pointer' src={assets.hospital} alt="logo" />

            <ul className=' hidden md:flex lg:gap-14 gap-7 items-start font-medium'>
                {navbar.map((navbar, index) => {
                    return (<>
                        <NavLink
                            key={index}
                            to={navbar.href}
                            className="">
                            <li className=' relative group cursor-pointer'>

                                {navbar.name}
                                <div className=' group-hover:bg-primary absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-4/5 '></div>
                                <hr className=' absolute border-none outline-none left-1/2 -bottom-1 transfrom -translate-x-1/2 bg-primary h-0.5 w-4/5  hidden' />

                            </li>
                        </NavLink>


                    </>)

                })}

            </ul>
            <div className=' flex items-start gap-4 md:ml-4'>
                {
                    token ? <div className=' hidden md:flex items-center gap-2 group relative'>
                        <img className=' w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className=' w-2.5' src={assets.dropdown_icon} />
                        <div className=' hidden group-hover:block absolute top-0 right-0 pt-14 font-medium text-gray-600 z-20'>
                            <div className='flex flex-col gap-4 min-w-44 bg-stone-100 p-4'>
                                <p onClick={() => { navigate("/my-profile") }} className=' hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => { navigate("/my-appointment") }} className=' hover:text-black cursor-pointer'>My appointment</p>
                                <p onClick={() => { setToken(false) }} className=' hover:text-black cursor-pointer'>Logout</p>

                            </div>
                        </div>
                    </div> :
                        <button onClick={() => { navigate("/login") }} className='cursor-pointer hidden md:block bg-primary text-white rounded-full px-6 lg:px-8 py-3'>create account</button>

                }
            </div>
            <div className=' text-4xl cursor-pointer block md:hidden'>
                <IoMenuOutline />
            </div>

        </div>
    )
}

export default Navbar