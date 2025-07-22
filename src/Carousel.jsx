import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide1 from './assests/image/slide1.png'
import slide2 from './assests/image/slide2.png'
import slide3 from './assests/image/slide3.png'
import slide4 from './assests/image/slide4.png'
import slide5 from './assests/image/slide5.png'

const Carousel = () => {
  return (
    <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
        <SwiperSlide>
            <img src={slide1} alt="slide1" className='bg-secondary p-5 rounded-2xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="slide2" className='bg-secondary p-5 rounded-2xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="slide3" className='bg-secondary p-5 rounded-2xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="slide4" className='bg-secondary p-5 rounded-2xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="slide5" className='bg-secondary p-5 rounded-2xl' />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel