import React, { use, useContext } from 'react'
import {assets} from '../assets/assets'
import logo from '../assets/DOCSLOT-logo.png';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {

 const{aToken,setAToken}= useContext(AdminContext)
 const {dToken, setDToken}= useContext(DoctorContext)

 const navigate = useNavigate()


const Logout = ()=> {
  navigate('/')
  aToken && setAToken('')
  aToken && localStorage.removeItem('aToken')
  dToken && setDToken('')
  dToken && localStorage.removeItem('dToken')
}

  return (
    <div className='flex justify-between item-center px-4 sm:px-10 py-3 border-b bg-white'>
       <div className='flex items-center gap-2 text-xs'>
         <img className='w-20 sm:w-40 cursor-pointer' src={logo} alt="docs logo" />
         <p className='border px-2.5 py-0.5 rounded-full border-black text-gray-600'>{aToken ? 'Admin' : 'Doctor'} </p>
        </div>
        <button onClick={Logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button> 
    </div>
  )
}

export default Navbar