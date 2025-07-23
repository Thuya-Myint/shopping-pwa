import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/img/logo.png'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav = () => {
  return (
    <div className='px-[150px] shadow-xs'>
        <nav className='flex items-center font-roboto py-5 justify-between'>
          <div className="logo">
            <img src={logo} alt="" className='w-[200px]' />
          </div>
          <div className="menu">
            <ul className='grid grid-cols-5 justify-center items-center gap-[10px]'>
              <li className='flex justify-center items-center hover:border-b-2 hover:border-b-primary active:border-b-3'><Link to={'/home'} className=' p-1'>Home</Link></li>
              <li className='flex justify-center items-center hover:border-b-2 hover:border-b-primary active:border-b-3'><Link to={'/product'} className=' p-1'>Products</Link></li>
              <li className='flex justify-center items-center hover:border-b-2 hover:border-b-primary active:border-b-3'><Link to={'./pages'} className=' p-1'>Pages</Link></li>
              <li className='flex justify-center items-center hover:border-b-2 hover:border-b-primary active:border-b-3'><Link to={'./about'} className=' p-1'>About Us</Link></li>
              <li className='flex justify-center items-center hover:border-b-2 hover:border-b-primary active:border-b-3'><Link to={'./contact'} className=' p-1'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Link to={'/'} className='px-[10px] py-[5px] rounded-md border-1 border-gray-400 hover:border-gray-700 hover:bg-gray-200 '>Register/Login</Link>
            <Link to={'cart'} className='px-[10px] py-[5px] rounded-md border-1 border-gray-400 hover:border-gray-700 hover:bg-gray-200'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to={'cart'} className='px-[10px] py-[5px] rounded-md border-1 border-gray-400 hover:border-gray-700 hover:bg-gray-200'>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </nav>
    </div>
  )
}

export default Nav