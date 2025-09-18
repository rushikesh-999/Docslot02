import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
       
       <div className='text-center text-2xl pt-10 text-fray-500'>
        <p className='text-gray-500 font-semibold'>CONTACT US</p>
        <p className='text-gray-600 text-xs font-serif'>We’re here to help! Whether you have a question, feedback, or need support — feel free to reach out.</p>
       </div>

       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 w-full md:w-1/2'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>DocSlot HealthTech Pvt. Ltd. <br /> 123 Health Avenue, Mumbai, Maharashtra, India – 400001</p>
          <p className='text-gray-500'>Email: support@docslot.com <br />(We usually respond within 24 hours.)</p>
          <p className='text-gray-500'>Phone <br />+91 98765 43210 (Monday – Friday, 9 AM – 8 PM)</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at DOCSLOT</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

       </div>

    </div>
  );
};

export default Contact
