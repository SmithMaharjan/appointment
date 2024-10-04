import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

    const [singleDoctor, setSingleDoctor] = useState("")
    const [docSlot, setDocSlot] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState("")
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    const { docId } = useParams()
    const { doctors, currencySymbol } = useContext(AppContext)
    const findDoctor = () => {
        setSingleDoctor(doctors.find((f) => f._id === docId))
    }
    const getAvailableSlots = async () => {
        setDocSlot([])
        //getting current date
        let today = new Date()
        for (let i = 0; i < 7; i++) {
            // getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            //seting and time of the date with 

            let endTime = new Date(today)
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)
            console.log(currentDate.getDate() === today.getDate())

            //setiing hours
            if (currentDate.getDate() === today.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            }
            else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = []
            while (currentDate < endTime) {

                let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                //add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                //increment current time by 30 min
                currentDate.setMinutes(currentDate.getMinutes() + 30)

            }
            setDocSlot(prev => ([...prev, timeSlots]))
        }


    }
    useEffect(() => {
        getAvailableSlots()

    }, [singleDoctor])
    useEffect(() => {
        findDoctor()

    }, [docId])
    useEffect(() => {
        console.log(docSlot)

    }, [docSlot])


    return (
        <>
            <div className=' flex flex-col md:flex-row flex-wrap gap-4 '>
                <div className=' flex md:w-full lg:w-auto justify-center   '>
                    <img className=' bg-primary  rounded-lg  md:max-w-96  lg:max-w-80 px-7  ' src={singleDoctor.image} />
                </div>
                <div className=' text-justify sm:mx-0 md:mx-12 lg:mx-0 md:mt-0 bg-white sm:max-w-full md:min-w-80  flex-1 border rounded-2xl border-gray-800 p-5'>
                    <div className=' flex gap-2'>
                        <p className=' text-2xl font-medium text-gray-700'>{singleDoctor.name}</p>
                        <img src={assets.verified_icon} />
                    </div>
                    <div className='pt-2 items-center flex gap-2 text-gray-600 text-sm'>
                        <p>{singleDoctor.degree} - {singleDoctor.speciality}</p>
                        <button className=' border border-gray-600 rounded-full px-2 py-0.5 text-xs'>{singleDoctor.experience}</button>
                    </div>
                    <div>
                        <p className=' flex items-center text-sm font-medium text-gray-900 gap-2 pt-2'>About <img src={assets.info_icon} /></p>
                        <p className=' text-sm text-gray-800 max-w-[700px] mt-1'>{singleDoctor.about}</p>
                    </div>
                    <p className=' pt-2'>
                        Appointment fee: <span>{currencySymbol}{singleDoctor.fees}</span>
                    </p>


                </div>
                {/* booking slot */}


            </div>
            <div className=' lg:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className=' flex gap-3 w-full mt-4 overflow-x-scroll items-center mb-3'>{docSlot.length && docSlot.map((item, index) => (
                    <div onClick={() => { setSlotIndex(index) }} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-500"}`} key={index}>
                        <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                        <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>

                ))}</div>
                <div className=' flex items-center gap-3 overflow-x-scroll w-full mb-3'>{docSlot.length && docSlot[slotIndex].map((item, index) => (
                    <p onClick={() => { setSlotTime(item.time) }} className={` text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "border border-gray-500 "}`} key={index}>
                        {item.time.toLowerCase()}
                    </p>

                ))}</div>
                <button className=' bg-primary px-12 text-sm py-4 text-white font-medium rounded-full'>Book an appointment</button>

                {/* listing related doctors */}
                <RelatedDoctors docId={docId} speciality={singleDoctor.speciality} />

            </div>
        </>
    )
}

export default Appointment