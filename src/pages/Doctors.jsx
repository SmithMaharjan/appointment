import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { specialityData } from '../assets/assets_frontend/assets'

const Doctors = () => {
    const navigate = useNavigate()
    const [isFilteredDoc, setIsFilteredDoc] = useState(false)

    const { speciality } = useParams()
    console.log(speciality)
    console.log("hello")

    const [filterDoctor, setFilterDoctor] = useState([])
    const { doctors } = useContext(AppContext)
    const applyFilter = () => {
        if (speciality) {
            setFilterDoctor(doctors.filter((f) => f.speciality === speciality))
        }
        else {
            setFilterDoctor(doctors)
        }
    }
    useEffect(() => {
        applyFilter()

    }, [doctors, speciality])
    return (
        <div>
            <div className=' flex flex-col sm:flex-row gap-5 items-start mt-5'>
                <div className=' md:sticky md:top-20 flex flex-col gap-2 text-md text-gray-600'>
                    <p className=' text-gray-600 text-[20px]'>Browse through the doctors specialist.</p>
                    {isFilteredDoc ? <div>
                        {
                            specialityData.map((specialitydata) => (

                                <p onClick={() => {
                                    setIsFilteredDoc(false);

                                    speciality === specialitydata.speciality ? navigate("/doctors") :
                                        navigate(`/doctors/${specialitydata.speciality}`)
                                }}
                                    className={` cursor-pointer sm:w-auto border border-gray-400 rounded-md transition-all duration-300 pl-3 pr-16 w-[96vw] py-1.5 
                                    ${specialitydata.speciality === speciality ? "text-black bg-indigo-100" : ""} `}>{specialitydata.speciality}</p>
                            ))

                        }
                    </div> : <button onClick={() => setIsFilteredDoc((prev) => !prev)} className=' max-w-32 border border-gray-400 px-5 py-2 hover:bg-primary hover:text-white transition-all duration-500'>Filter</button>}



                </div>
                <div className=' w-full grid grid-cols-auto gap-4 gap-y-6 '>
                    {
                        filterDoctor.map((doctor, index) => (
                            <div key={index} onClick={() => { navigate(`/appointment/${doctor._id}`); scrollTo(0, 0) }} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                                <img className=' bg-blue-50' src={doctor.image} />
                                <div className=' p-4'>
                                    <div className=' flex items-center gap-2'>
                                        <p className=' bg-green-500 flex h-2 w-2 rounded-full'></p><p>available</p>

                                    </div>
                                    <h1 className=' font-medium  text-lg text-gray-900'>{doctor.name}</h1>
                                    <p className=' text-gray-600 text-sm'>{doctor.speciality}</p>
                                </div>

                            </div>

                        ))

                    }
                </div>
            </div>



        </div>
    )
}

export default Doctors