import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assests/image/logoBrand.png'

const NavBar = () => {
  return (
    <div className='mb-20'>
        <div className='flex place-content-between align-middle bg-navColor h-15'>
            <div className='flex ml-10 py-1 items-center gap-5'>
                <img src={logo} alt="logo" className='h-full' />
                <h1 className='text-3xl font-bold font-serif selectNone'>THREADED</h1>
            </div>
            <div className='flex gap-3 mr-7 items-center'>
                <Link to={'/home'} className='navHover w-32 text-lg tracking-wider text-secondary text-center'>Home</Link>
                <Link to={'/deals'} className='navHover w-32 text-lg tracking-wider text-secondary text-center'>Deals</Link>
                <Link to={'/new-arrival'} className='navHover w-32 text-lg tracking-wider text-secondary text-center'>New Arrival</Link>
                <Link to={'/products'} className='navHover w-32 text-lg tracking-wider text-secondary text-center'>Products</Link>
                <Link to={'/'} className='navHover w-32 text-lg tracking-wider text-secondary text-center'>Log In</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar