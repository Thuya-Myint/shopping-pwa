import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './assests/image/logoBrand.png'
import {navItems} from './constants'
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  
  return (
    window.innerWidth >= 768
    ?
    <div className='mb-20'>
        <div className='flex place-content-between align-middle bg-navColor h-15'>
            <div className='flex ml-30 py-1 items-center gap-5'>
                <img src={logo} alt="logo" className='h-full' />
                <h1 className='text-3xl font-bold font-serif selectNone'>THREADED</h1>
            </div>
            
            <div className='flex gap-3 mr-30 items-center'>
              {navItems.map(link => (
                <div className='navHover w-30 text-lg tracking-wider text-secondary text-center'>
                  <NavLink 
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `group ${isActive ? 'text-txtColor2 font-bold' : ''}`}
                  >
                    {link.name}
                    <span className='transition-discrete duration-500 block w-0 h-[3px] bg-txtColor3 group-hover:w-full'></span>
                  </NavLink>
                </div>
              ))}
            </div>

        </div>
    </div>
    :
    <div className='flex relative items-center place-content-between w-full bg-navColor py-2 px-3'>
      <div className='text-3xl font-bold font-serif selectNone cursor-pointer'>THREADED</div>
        <div>
          <IoMenu className='cursor-pointer text-3xl' />
          <div className='absolute w-1/2 h-screen flex flex-col bg-amber-500 right-0'>
            {navItems.map(item => (
              <div className='navHover text-lg text-secondary text-center'>
                      <NavLink 
                        key={item.name}
                        to={item.path}
                        className=''
                      >
                        {item.name}
                      </NavLink>
                    </div>
            ))}
          </div>
        </div>
    </div>
    
  )
}

export default NavBar