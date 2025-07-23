import React, { useEffect, useState } from 'react'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({children: slides, autoSlide=false, autoSlideInterval=3000}) => {
    const  [curr,setCurr] = useState(0)
    const prev =() =>setCurr(curr === 0 ? slides.length -1 : curr-1)
    const next =() =>setCurr(curr === slides.length-1 ? 0 : curr+1)
    useEffect(()=>{
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    },[])

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>
            {slides}
        </div>
        <div className='absolute inset-0 flex justify-between items-center p-4'>
            <button onClick={prev} className='p-2 rounded-full bg-white/80  '>
                <FontAwesomeIcon icon={faChevronLeft} className='text-xl'/>
            </button>
            <button onClick={next} className=' p-2 rounded-full bg-white/80'>
                <FontAwesomeIcon icon={faChevronRight} className='text-xl'/>
            </button>
        </div>
        <div className='absolute bottom-4 left-0 right-0'>
            <div className='flex justify-center items-center gap-2'>
                {slides.map((_,i)=>(<div 
                className={`transition-all w-[30px] h-1  
                    ${curr === i ? 'bg-primary' : 'bg-white ' }`}
                />))}
            </div>
        </div>
    </div>
  )
}

export default Carousel