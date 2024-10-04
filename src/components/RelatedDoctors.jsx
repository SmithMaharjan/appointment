import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = (props) => {
    const navigate = useNavigate()
    const { speciality, docId } = props
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    useEffect(() => {
        if (doctors.length && speciality) {

            setRelDoc(doctors.filter((f) => f.speciality === speciality && f._id !== docId))
        }

    }, [docId, speciality])

    return (
        <div>
            <div className=' flex flex-col gap-2 items-center md:mx-10  text-gray-900'>
                <h1 className=' text-2xl font-medium'>Related Doctors</h1>

                <div className=' grid grid-cols-auto gap-3 pt-5 gap-y-6 sm:px-0 w-full'>
                    {relDoc.slice(0, 5).map((doctor, index) => (
                        <div key={index} onClick={() => { navigate(`/appointment/${doctor._id}`), scrollTo(0, 0) }} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
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

            </div>
            <div className='text-center mt-14'>
                <button onClick={() => navigate("/doctors")} className=' bg-blue-200  text-gray-600 px-12 py-3 rounded-full  font-medium text-sm'>more</button>
            </div>

        </div>
    )
}

export default RelatedDoctors