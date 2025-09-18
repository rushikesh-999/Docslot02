import React from 'react';
import { assets } from '../assets/assets'; 
import mainImg from '../assets/main.png'; 



const Header = () => {
return (
  

    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20'>

      {/* --------- Left Side --------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
          Book appointment <br /> With Top & Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-14' src={assets.group_profiles} alt="group" />
          <p>
            Simply browse through our extensive list of doctors, <br className='hidden sm:block' />
            book an appointment with the one that suits you best.
          </p>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all   duration-300'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/* --------- Right Side --------- */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.main_png} alt="main" />
      </div>

    </div>
  
);
};

export default Header;
