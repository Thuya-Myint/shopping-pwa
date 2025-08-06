import React from 'react'
import Product from './product'
import Nav from './components/nav.jsx'
import Carousel from './components//Carousel'
import Footer from './components//Footer'
import { faShoppingCart,faAward,faTag,faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Blog from './components/Blog.jsx'
import banner from './assets/img/banner.png'
import slideImage from './assets/img/applewatch.png'
import banner2 from './assets/img/banner1.png'
import banner3 from './assets/img/banner3.png'
import {blogs,watches,images,} from './constants.js'
import MobileProduct from './components/MobileProduct.jsx'
import Category from './components/Category.jsx'
import { category } from './constants'


const Home = () => {

  return (
      <div className='text-primaryText min-w-full relative'>
        <div className='sticky top-0 z-20 bg-white shadow-md'><Nav /></div>
        <Carousel autoSlide={true} autoSlideInterval={4000}>
            <div className="min-w-full flex justify-end items-center p-4 bg-background md:pl-[150px] lg:pl-[300px]">
              <div className='flex flex-1/2 flex-col gap-[30px]'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='lg:text-[50px] md:text-[35px] uppercase'>Beyond Devices. Experience True Harmony.</p>
                </div>
                <div className='flex '>
                  <Link to={'/product'} className='px-3 py-2 md:px-[40px] md:py-[10px] bg-black text-white text-lg md:text-xl hover:bg-primay/80'> SHOP NOW</Link>
                </div>
              </div> 
              <div className='flex-1/2 flex justify-center items-center'>
                <img src={slideImage} alt="" className='w-[400px]' />
              </div>   
            </div>
            <div className="min-w-full flex justify-end items-center p-4 bg-background md:pl-[150px] lg:pl-[300px]">
              <div className='flex flex-1/2 flex-col gap-[30px]'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='lg:text-[50px] md:text-[35px] uppercase'>Every essential, in one place.</p>
                </div>
                <div className='flex '>
                  <Link to={'/product'} className='px-3 py-2 md:px-[40px] md:py-[10px] bg-black text-white text-lg md:text-xl hover:bg-primay/80'> SHOP NOW</Link>
                </div>
              </div> 
              <div className='flex-1/2 flex justify-center items-center'>
                <img src={banner2} alt="" className='w-[500px]' />
              </div>   
            </div>
            <div className="min-w-full flex justify-end items-center p-4 bg-background md:pl-[150px] lg:pl-[300px]">
              <div className='flex flex-1/2 flex-col gap-[30px]'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='lg:text-[50px] md:text-[35px] uppercase'>Beyond Durable. Beyond Design.</p>
                </div>
                <div className='flex '>
                  <Link to={'/product'} className='px-3 py-2 md:px-[40px] md:py-[10px] bg-black text-white text-lg md:text-xl hover:bg-primay/80'> SHOP NOW</Link>
                </div>
              </div> 
              <div className='flex-1/2 flex justify-center items-center'>
                <img src={banner3} alt="" className='w-[400px]' />
              </div>   
            </div>

        </Carousel>
        <Category category={category} />

        <div className='xl:py-[80px] xl:px-[150px] flex flex-col md:gap-[100px] gap-10 mb-10'> {/* Top Container*/}
          <div className='flex justify-between items-center flex-wrap p-5'>
            <div className='flex py-4 gap-3'>
                <div className='flex justify-center '>
                  <FontAwesomeIcon icon={faShoppingCart} className='text-3xl text-accent'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-2xl uppercase font-semibold'>Free Delivery</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
            <div className='flex py-4 gap-3'>
                <div className='flex justify-center '>
                  <FontAwesomeIcon icon={faAward} className='text-3xl text-accent'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-2xl uppercase font-semibold'>Quality Gurantee</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
            <div className='flex py-4 gap-3'>
                <div className='flex justify-center '>
                  <FontAwesomeIcon icon={faTag} className='text-3xl text-accent'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-2xl uppercase font-semibold'>Daily Offers</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
            <div className='flex py-4 gap-3'>
                <div className='flex justify-center '>
                  <FontAwesomeIcon icon={faShieldHalved} className='text-3xl text-accent'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-2xl uppercase font-semibold'>100% Secure Payment</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
          </div>
          <MobileProduct images={images} title="Mobile Products"/>
          <MobileProduct images={watches} title="Watches"/>
        </div>

        <div className='flex justify-center items-center bg-background lg:gap-[50px] gap-5'> {/* Banner Container*/}
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[15px]'>
              <p className='md:text-[30px] text-xl'>---- 10% OFF</p>
              <p className='md:text-[50px] text-2xl'>NEW YEAR SALE</p>
            </div>
            <div className='flex '>
              <Link to={'/product'} className='md:px-[40px] md:py-[10px] px-4 py-2 bg-black text-white text-xl hover:bg-primay'> SHOP SALE</Link>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src={banner} alt="" className='md:w-[400px] w-[150px]' />
          </div>
        </div>

        <div className='lg:py-[80px] lg:px-[150px] flex flex-col lg:gap-[100px] gap-10'> {/* Bottom Container*/}

          <Blog blogs={blogs} />
        </div>
        <Footer />
      </div>
  )
}

export default Home