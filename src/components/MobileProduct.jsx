import React  from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const MobileProduct = ({images,title}) => {

  const [currentScreen,setCurrentScreen] =useState(window.innerWidth)
  const [hoveredIndex,sethoveredIndex] =useState(null)

  useEffect(()=>{
    const handleResize =()=> setCurrentScreen(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  },[])
  
  const limit = currentScreen <=768 ? 2 : images.length
  return (
          <div className='uppercase flex flex-col gap-4 p-5'> {/* Mobile product container*/}
            <div className='flex justify-between items-end py-2'> {/* Upper Header Line*/}
              <p className='md:text-3xl text-xl font-bold'>{title}</p>
              <Link to={'/product'} className='underline'>Go To Shop</Link>
            </div>
            <div className='flex md:gap-[20px] gap-6 items-stretch flex-wrap'> {/* Mobile Container*/}
              {images.slice(0,limit).map((content, index) => (
                <div key={index} className='flex flex-1 flex-col gap-2 h-full overflow-hidden hover:cursor-pointer'
                    onMouseEnter={()=>sethoveredIndex(index)}
                    onMouseLeave={()=>sethoveredIndex(null)}
                    >
                  <div className='relative h-full flex-1 overflow-hidden'>
                    <img src={content.image} alt="" className='object-cover w-full h-full' />
                    <div className={`absolute transition-all duration-200 inset-0 bottom-5 ${hoveredIndex===index?'md:bottom-5':'md:bottom-[-100%]'}  flex justify-center items-end text-white px-[20px]`}>
                      <Link to={'/cart'} className={`flex justify-center items-center gap-3 bg-black lg:px-7 lg:py-3 px-4 py-2 hover:opacity-80 hover:bg-[# 72aec8]`}>
                        Add To Cart 
                        {/* <FontAwesomeIcon icon={faShoppingCart}  className='hidden md:inline'/> */}
                      </Link>
                    </div>
                  </div>
                  <div className='static z-4'>
                    <p className='flex justify-between md:text-xl text-lg'>
                      {content.text}
                      <span className='text-accent '>${content.price}</span>
                    </p>
                  </div>
                </div>

              ))}
            </div>
            <div className='flex justify-center items-center py-4 gap-4'> {/* Circle Identifier*/}
              <div className='w-[15px] h-[15px] bg-primary rounded-full' />
              <div className='w-[10px] h-[10px] bg-gray-300 rounded-full' />
              <div className='w-[10px] h-[10px] bg-gray-300 rounded-full' />
            </div>
          </div>
  )
}


export default MobileProduct