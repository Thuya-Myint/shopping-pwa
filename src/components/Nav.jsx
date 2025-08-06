import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { faCircleUser, faMagnifyingGlass, faPerson, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEyeSlash } from 'react-icons/fa'
import { navItems } from '../constants'
import { useState,useEffect } from 'react'


const userDataString =localStorage.getItem('user-data')
const userData =userDataString? JSON.parse(userDataString) : null



const Nav = () => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [currentScreen,setCurrentScreen] =useState(window.innerWidth)
  useEffect(()=>{
    if(isSideOpen){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  },[isSideOpen])

  useEffect(()=>{
    const handleResize =()=> setCurrentScreen(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  const toggleSide =()=>setIsSideOpen(!isSideOpen)



  return (
    <nav className='relative w-full flex justify-between items-center p-5' >
      <div className="logo">
            <img src={logo} alt="" className='w-[200px]' />
      </div>
      {
        currentScreen >= 1024
        ?
        <div className='flex gap-8 text-xl px-3'>
        {navItems.map(link=>{
          return <NavLink key={link.name} to={link.path} className={({isActive})=>`${isActive? 'border-b-2' :'border-none'} border-black`}>
              {link.name}
          </NavLink>
        })}
        </div>
        :
        <div>
          <FontAwesomeIcon icon={faBars} onClick={toggleSide} className=' text-[25px] active:opacity-60' />
          <div className={`fixed md:w-1/2 w-full h-screen bg-gray-300 top-0 z-30 transition-all duration-150 ${isSideOpen ? 'right-0' :'right-[-100%]'} p-5 flex flex-col justify-start items-center active:opacity-60`}>
            <div className='flex justify-end w-full '><FontAwesomeIcon icon={faClose} onClick={toggleSide} className='text-2xl' /></div>
            <div className={`flex flex-col gap-4 text-xl px-3 w-full `}>
              {navItems.map(link=>{
                return <NavLink key={link.name} to={link.path} className={({isActive})=>
                  `bg-slate p-2 ${isActive?'bg-black/50 border-l-4 border-black text-white' :'block'}`
                }>
                    {link.name}
                </NavLink>
              })}
            </div>
          </div>
          {isSideOpen && (
            <div className="fixed inset-0 bg-black opacity-60 z-20" 
            onClick={(e)=>{
              e.stopPropagation()
              setIsSideOpen(false)
              }
            }
            ></div>
          )}
        </div>

      }
    </nav>
  )
}

export default Nav