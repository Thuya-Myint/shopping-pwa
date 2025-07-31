import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './assests/image/logoBrand.png'
import {navItems} from './constants'

const NavBar = () => {

  

  return (
    <div className='mb-20'>
        <div className='flex place-content-between align-middle bg-navColor h-15'>
            <div className='flex ml-30 py-1 items-center gap-5'>
                <img src={logo} alt="logo" className='h-full' />
                <h1 className='text-3xl font-bold font-serif selectNone'>THREADED</h1>
            </div>

            {/*
              Nav links
            */}
            
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
  )
}

export default NavBar