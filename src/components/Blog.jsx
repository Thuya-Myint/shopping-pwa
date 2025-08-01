import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Blog = ({blogs}) => {
      const [currentScreen,setCurrentScreen] =useState(window.innerWidth)
    
      useEffect(()=>{
        const handleResize =()=> setCurrentScreen(window.innerWidth)
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
      },[])
    const limit = currentScreen <=640 ? 2 : blogs.length
  return (
          <div className='uppercase flex flex-col gap-4 p-5'> {/* Post container*/}
            <div className='flex justify-between items-end py-2'> {/* Upper Header Line*/}
              <p className='lg:text-3xl text-xl font-bold'>Latest Posts</p>
              <Link to={'/product'} className='underline'>Read Blogs</Link>
            </div>            
            <div className='flex justify-center w-full lg:gap-[20px] gap-4 items-center flex-wrap'> {/* Blog Container*/}
              {blogs.slice(0,limit).map((content, index) => (
                <div key={index} className='flex flex-col justify-center sm:flex-1 gap-2 hover:-translate-y-1 hover:cursor-pointer hover:opacity-85'>
                  <div className='md:w-full'>
                    <img src={content.image} alt="" className='object-cover w-full h-full' />
                  </div>
                  <div>
                    <p className='flex items-center gap-[20px] text-[14px] lg:text-[20px] text-primary/70'>{content.date} 
                      <span className='block w-[5px] h-[5px] bg-primary rounded-full'></span> 
                      <span>{content.category}</span>
                    </p>
                    <p className='text-sm lg:text-xl'>{content.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Blog