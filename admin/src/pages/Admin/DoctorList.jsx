import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)

useEffect(()=>{
  if (aToken) {
    getAllDoctors()

  }
},[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
       <h1 className='text-lg font-medium'>All Doctors</h1>
       <div className='w-full grid grid-cols-5 gap-3'>
        {
          doctors.map((item,index)=>(
            <div className='border border-indigo-100 rounded-x1 max-56 overflow-hidden cursor-pointer group' key={index}>
             <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
             <div className='p-4'>
              <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
              <p className='text-zinc-600 text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-2'>
                <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
             </div>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default DoctorList