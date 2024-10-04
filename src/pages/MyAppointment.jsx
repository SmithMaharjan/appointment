import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
    const { doctors } = useContext(AppContext)
    return (
        <div>
            <p className=' pb-3 mt-12 font-medium border-b text-zinc-700'>My Appointment</p>
            <div>
                {doctors.slice(0, 3).map((item, index) => (
                    <div className=' grid grid-cols-[1fr_2fr] sm:flex gap-4  sm:gap-6 py-2 border-b' key={index}>
                        <div>
                            <img className=' w-32 bg-indigo-50' src={item.image} />
                        </div>
                        <div className=' flex-1 text-sm text-zinc-600'>
                            <p className=' text-neutral-800 font-semibold'>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className=' text-zinc-700 font-medium mt-1'>Address:</p>
                            <p className=' text-xs'>{item.address.line1}</p>
                            <p className=' text-xs'>{item.address.line2}</p>
                            <p className=' text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & time:</span>1,jan,2080| 8:30</p>

                        </div>
                        <div>
                            <div className='h-full flex flex-col gap-2 justify-end '>
                                <button className=' text-sm text-stone-500 border px-8 py-2 w-48 hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                                <button className=' text-sm text-stone-500 border px-8 py-2 w-48 hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default MyAppointment