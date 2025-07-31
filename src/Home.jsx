import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'
import New_Arrival from './New_Arrival'
import { Link } from 'react-router-dom'
import { homeImages, carouselImages } from './constants'

const Home = () => {
  return (
    <div className='bgColor'>
      <NavBar/>
      <div className='grid grid-cols-7 grid-rows-1 gap-10 rounded-3x mx-30 max-h-[750px]'>
        <div className='bg-[#91a095] rounded-3xl grid col-span-2 items-end justify-center'>
          <img src={homeImages[0]} alt="image1" />
        </div>
        <div className='flex col-span-3 w-full h-full mx-3'>
          <div className='bg-[#91a095] rounded-3xl grid row-span-2 align-center items-center px-3 pt-5'>
            <img src={homeImages[2]} alt="image3" className='w-full h-full rounded-lg' />
          </div>
          <div className='row-span-3 grid grid-rows-4 justify-center'>
            <div className='text-7xl text-center text-txtColor font-semibold tracking-widest stretchTxt mt-8 selectNone'>ULTIMATE</div>
            <div className='text-9xl text-center tracking-widest font-bold text-transparent txtSale mt-3 selectNone'>SALE</div>
            <div className='text-4xl text-center text-txtColor tracking-wider mt-18 selectNone'>NEW ARRIVAL</div>
            <div className='flex items-center justify-center'>
              <Link to='/products'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2'>SHOP NOW</Link>
            </div>
          </div>
          <div className='bg-secondary rounded-3xl flex align-center items-center px-3'>
            <img src={homeImages[3]} alt="image4" className='w-full h-full rounded-lg' />
          </div>
        </div>
        <div className='grid col-span-2 bg-[#91a095] rounded-3xl items-end justify-center'>
          <img src={homeImages[1]} alt="image2" />
        </div>
      </div>
      <div className='grid grid-cols-5 mx-30 my-20 gap-5'>
        <Link to='/products' className='grid grid-flow-col justify-items-start'>
          <img src={homeImages[4]} alt="brand logo 1" />
        </Link>
        <Link to='/products' className='grid grid-flow-col justify-items-center'>
          <img src={homeImages[5]} alt="brand logo 2" />
        </Link>
        <Link to='/products' className='grid grid-flow-col justify-items-center'>
          <img src={homeImages[6]} alt="brand logo 3" />
        </Link>
        <Link to='/products' className='grid grid-flow-col justify-items-center'>
          <img src={homeImages[7]} alt="brand logo 4" />
        </Link>
        <Link to='/products' className='grid grid-flow-col justify-items-end'>
          <img src={homeImages[8]} alt="brand logo 5" />
        </Link>
      </div>
      <div className='grid grid-cols-3 max-h-[550px] mx-30'>
        <div className='grid grid-rows-2 h-full'>
          <div className=''>
            <h1 className='font-georgia text-4xl text-txtColor'>
              Deals Of The Month
            </h1>
            <p className='text-justify mt-7 mb-10 text-txtColor3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae, vel ducimus est, nihil, eveniet repudiandae praesentium quasi laudantium incidunt minima cupiditate impedit soluta.
            </p>
            <Link to='/deals'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2'>Buy NOW</Link>
          </div>
          <div>
            <h2 className='font-roboto text-3xl py-10 text-txtColor'>
              Hurry, Before It's Too Late!
            </h2>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='flex'>
            <div className='grid grid-rows-1 grid-cols-2 w-1/8 justify-center items-end h-[550px]'>
              <button className='flex items-center justify-center cursor-pointer bg-third w-[50px] h-[50px] rounded-full text-3xl text-txtColor2 pb-2'>
                &lt;
              </button>
              <button className='flex items-center justify-center cursor-pointer bg-third w-[50px] h-[50px] rounded-full text-3xl text-txtColor2 pb-2'>
                &gt;
              </button>
            </div>
            <div className='flex w-7/8 gap-5'>
              <div className='flex w-1/2 h-[550px]'>
                <img src={carouselImages[0]} alt="Carousel Image 1" className='' />
              </div>
              <div className='relative w-1/2 h-[550px]'>
                <div className='flex gap-5 overflow-hidden'>
                  <img src={carouselImages[1]} alt="Carousel Image 2" className='w-[300px]' />
                  <img src={carouselImages[2]} alt="Carousel Image 3" className='w-[300px]' />
                </div>
                <div className='absolute bottom-0 left-0'>
                  pagination
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <New_Arrival />
      </div>
      <div>
        Products
      </div>
      <Footer/>
    </div>
  )
}
export default Home