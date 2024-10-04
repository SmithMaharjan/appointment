import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "smith",
        image: assets.profile_pic,
        email: "smith@gmail.com",
        phone: "9848483848",
        address: {
            line1: "dallu,kathmandu",
            line2: "somewhere"
        },
        gender: "Male",
        dob: "2006-6-6"
    })
    const [isedit, setIsEdit] = useState(false)
    return (
        <div>
            <img className=' w-36 rounded' src={userData.image} />
            {isedit ? <input className=' bg-gray-50 text-3xl mt-4 max-w-60 font-medium' value={userData.name} onChange={(e) => { setUserData(prev => ({ ...prev, name: e.target.value })) }} type='text' /> : <p className=' font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>}

            <hr className=' bg-zinc-400 h-[1px] border-none' />
            <p className=' text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
            <div className=' grid grid-cols-[1fr_4fr] gap-y-2.5 mt-3 text-neutral-700 '>
                <p>Email id:</p>
                {isedit ? <input className=' bg-gray-100' value={userData.email} onChange={(e) => { setUserData(prev => ({ ...prev, email: e.target.value })) }} type='text' /> :
                    <p className=' text-blue-500 '>{userData.email}</p>
                }

                <p className=' font-medium '>Phone"</p>
                {isedit ? <input className=' bg-gray-100 max-w-52' value={userData.phone} onChange={(e) => { setUserData(prev => ({ ...prev, phone: e.target.value })) }} type='text' /> : <p className=' text-blue-400'>{userData.phone}</p>}
                <p className=' font-medium'>Address:</p>
                {isedit ? <p><input className=' bg-gray-50 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} type='text' value={userData.address.line1} /><br /><input className=' bg-gray-50' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} type='text' /></p> : <p className=' text-gray-500'>
                    {userData.address.line1}<br />{userData.address.line2}
                </p>}





            </div>
            <div>
                <p className=' text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
                <div className=' grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className=' font-medium'>Gender</p>
                    {isedit ? <select className='max-w-20 bg-gray-100 ' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}><option value="Male">Male</option><option value="Female">Female</option></select> : <p className='text-gray-400'>{userData.gender}</p>}
                    <p className='font-medium'>Birthday:</p>
                    {isedit ? <input onChange={(e) => { setUserData(prev => ({ ...prev, dob: e.target.value })) }} value={userData.dob} type='date' /> : <p className=' text-gray-400'>{userData.dob}</p>}


                </div>
            </div>
            <div className=' mt-10 '>
                {isedit ? <button className=' hover:text-white hover:bg-primary transition-all border border-primary rounded-full px-8 py-2' onClick={() => setIsEdit(false)}>save information</button> : <button className=' border border-primary rounded-full px-8 py-2 hover:text-white hover:bg-primary transition-all' onClick={() => setIsEdit(true)}>Edit</button>}
            </div>

        </div>
    )
}

export default MyProfile