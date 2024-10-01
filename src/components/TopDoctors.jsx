import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col gap-2 items-center md:mx-10 my-16 text-gray-900'>
            <h1 className=' text-2xl font-medium'>Top Doctors To Book</h1>
            <p className='sm:w-1/3 text-center text-sm '>simply browse through our extensive list of trusted doctors.</p>

            <div className=' grid grid-cols-auto gap-3 pt-5 gap-y-6 sm:px-0 w-full'>
                {doctors.slice(0, 10).map((doctor, index) => (
                    <div key={index} onClick={() => { navigate(`/appointment/${doctor._id}`) }} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                        <img className=' bg-blue-50' src={doctor.image} />
                        <div className=' p-4'>
                            <div className=' flex items-center gap-2'>
                                <p className=' bg-green-500 flex h-2 w-2 rounded-full'></p><p>available</p>

                            </div>
                            <h1 className=' font-medium  text-lg text-gray-900'>{doctor.name}</h1>
                            <p className=' text-gray-600 text-sm'>{doctor.speciality}</p>
                        </div>

                    </div>

                ))}
            </div>
            <button onClick={() => navigate("/doctors")} className=' bg-blue-200 text-gray-600 px-12 py-3 rounded-full mt-10 font-medium text-sm'>more</button>

        </div>
    )
}

export default TopDoctors