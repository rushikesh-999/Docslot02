import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center text-center my-10'>
         <p className='text-gray-700 font-medium'>ABOUT  <span className='text-gray-700 font-medium'>US</span></p>
        </div> 

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col gap-4 text-gray-800 text-sm md:text-base'>
            <p>Welcome to DOCSLOT – your trusted platform for seamless doctor appointment booking. Our mission is to bridge the gap between patients and healthcare professionals by providing a fast, easy, and reliable way to access medical care.</p>
            <p>'DOCSLOT' Founded in 2025, we are a passionate team of developers, designers, and healthcare professionals working together to improve how people interact with medical services. Whether you're seeking a general physician, a specialist, or even a virtual consultation, our platform ensures that the help you need is just a few clicks away.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p> Make healthcare accessible, efficient, and patient-centered by simplifying the process of connecting with doctors anytime, anywhere. To empower individuals to take charge of their health by offering a user-friendly, reliable, and transparent digital platform for scheduling medical appointments.</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-center my-10 text-xl'>
          <p className='text-gray-700 font-medium'>The DOCSLOT Advantage</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 my-10 text-gray-800 text-sm md:text-base'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
             <b>Instant Appointment Booking</b>
             <p>No more waiting on calls or standing in queues — book appointments instantly with just a few clicks.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b> Verified & Trusted Doctors</b>
              <p>All doctors on DocSlot are verified for qualifications and experience, so you always get safe and reliable care.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b> Reminders & Notifications</b>
              <p>Your personal and health information is always encrypted and protected with strict privacy policies.</p>
          </div>
        </div>


    </div>
  )
}

export default about