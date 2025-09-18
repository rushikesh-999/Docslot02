import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import logo from '../assets/DOCSLOT-logo.png'; // Assuming you have a logo image in your assets
import { AppContext } from '../context/AppContext';
const Navbar = () => {

  const navigate = useNavigate();

const { token, setToken, userData} = useContext(AppContext)

  const [showmenu, setShowMenu] = React.useState(false);

  const logout = ()=> {
    setToken(false)
    localStorage.removeItem('token')

  }


  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md'>
      <img onClick={() => navigate('/')} src={logo} alt="docs logo" style={{ height: '60px' }} />
      <ul className='hidden md:flex items-center gap-6 text-bold-90'>
        <NavLink to="/">
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/doctors">
          <li className='py-1'>All Doctor</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/about">
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/contact">
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rouned flex flex-col  gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-blue-600 cursor pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='hover:text-blue-600 cursor pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-blue-600 cursor pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-blue-400 text-white px-6  py-3 rounded-full font le'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-5 md:hidden' src={assets.menu_icon} alt="" />
        {/* ----- Mobile Menu -----*/}
        <div className={` ${showmenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={logo} alt="docs logo" style={{ height: '60px' }} />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col justify-items-start gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink  onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded  inline-block'>Home</p></NavLink>
            <NavLink  onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded  inline-block'>All Doctors</p></NavLink>
            <NavLink  onClick={() => setShowMenu(false)} to='/about' > <p className='px-4 py-2 rounded  inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded  inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
