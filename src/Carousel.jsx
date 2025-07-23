import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img4 from './assets/homeImage/home4.jpg'
import img5 from './assets/homeImage/home5.jpg'
import img6 from './assets/homeImage/home6.jpg'
import img7 from './assets/homeImage/home7.jpg'

const images = [img4, img5, img6, img7]
const texts = [
    "Japan's train system is world-renowned for its punctuality, efficiency, and safety. From local commuter lines to high-speed shinkansen, trains play a vital role in daily transportation and tourism.",
    "The shinkansen, or bullet train, connects major cities at speeds exceeding 300 km/h. Known for smooth rides, frequent departures, and spotless cleanliness, it exemplifies Japanese innovation and attention to detail.",
    "Urban rail networks like Tokyo Metro and Osaka's subway are complex but extremely reliable. Stations are clearly marked, announcements are bilingual, and trains arrive within seconds of their scheduled time.",
    "Trains in Japan aren't just transit—they reflect culture. From themed sightseeing trains to station bento boxes, the experience blends utility with charm, making rail travel both convenient and uniquely enjoyable."
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(Math.floor(Math.random() * 4))
        }, 4000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-3xl mx-auto mt-10 relative rounded-xl overflow-hidden shadow-xl ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="h-[500px]"
                effect='fade'
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className='p-4 absolute w-full   bottom-2 z-50 '>
                            <div className='bg-black/30 text-white w-full h-full p-4  bottom-0 m-2 mx-auto backdrop-blur-[5px] rounded-2xl' >
                                {texts[index]}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Swiper Styling */}
            <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          background: rgba(200, 200, 200, 0.3);
          border-radius: 9999px;
          padding: 8px;
          box-shadow: 0 0px 20px 20px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          border-radius: 30%;
          transition: all 1s, transform 1s;
        }

        .swiper-pagination-bullet-active {
          background: #fff;
          rotate:90deg
        }
      `}</style>

        </div>
    )
}

export default Carousel
