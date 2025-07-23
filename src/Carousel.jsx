import React, { useEffect, useState } from 'react'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const Carousel = ({children: slides, autoSlide=false, autoSlideInterval=3000}) => {
//     const  [curr,setCurr] = useState(0)
//     const prev =() =>setCurr(curr === 0 ? slides.length -1 : curr-1)
//     const next =() =>setCurr(curr === slides.length-1 ? 0 : curr+1)
//     useEffect(()=>{
//         if (!autoSlide) return
//         const slideInterval = setInterval(next, autoSlideInterval);
//         return () => clearInterval(slideInterval)
//     },[autoSlide,autoSlideInterval,next])
//       if (!slides || slides.length === 0) {
//         return <div>No slides to display</div>;
//     }
//   return (
//     <div className='overflow-hidden relative'>
//         <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>
//             {slides}
//         </div>
//         <div className='absolute inset-0 flex justify-between items-center p-4'>
//             <button onClick={prev} className='p-2 rounded-full bg-white/80  '>
//                 <FontAwesomeIcon icon={faChevronLeft} className='text-xl'/>
//             </button>
//             <button onClick={next} className=' p-2 rounded-full bg-white/80'>
//                 <FontAwesomeIcon icon={faChevronRight} className='text-xl'/>
//             </button>
//         </div>
//         <div className='absolute bottom-4 left-0 right-0'>
//             <div className='flex justify-center items-center gap-2'>
//                 {slides.map((_,i)=>(<div key={i}
//                 className={`transition-all w-[30px] h-1  
//                     ${curr === i ? 'bg-primary' : 'bg-white ' }`}
//                 />))}
//             </div>
//         </div>
//     </div>
//   )
// }
const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)
    
    const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1)
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval])

    if (!slides || slides.length === 0) {
        return <div>No slides to display</div>
    }

    
    return (
        <div className='overflow-hidden relative bg-gray-100'>
            <div 
                className='flex transition-transform ease-out duration-500 h-full' 
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            
            {/* Navigation buttons */}
            <div className='absolute inset-0 flex justify-between items-center p-4 pointer-events-none'>
                <button 
                    onClick={prev} 
                    className='pointer-events-auto transition-colors'
                >
                    <FontAwesomeIcon icon={faChevronLeft} className='text-[50px] text-primary hover:text-primary/80 hover:cursor-pointer'/>
                </button>
                <button 
                    onClick={next} 
                    className='pointer-events-auto transition-colors'
                >

                    <FontAwesomeIcon icon={faChevronRight} className='text-[50px] text-primary hover:text-primary/80 hover:cursor-pointer'/>
                </button>
            </div>
            
            {/* Indicators */}
            <div className='absolute bottom-4 left-0 right-0'>
                <div className='flex justify-center items-center gap-2'>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`transition-all w-8 h-1 rounded-full ${
                                curr === i ? 'bg-accent' : 'bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel