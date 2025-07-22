import React from 'react'
import NavBar from './NavBar'
import Carousel from './carousel'
import { Link } from 'react-router-dom'
import image1 from './assests/image/homePage.png'
import image2 from './assests/image/homePage1.png'
import image3 from './assests/image/homePage2.png'
import image4 from './assests/image/homePage3.png'

const Home = () => {
  return (
    <div className='bgColor'>
      <NavBar/>
      <Carousel/>
      <div className='grid grid-cols-3 grid-rows-1 gap-10 rounded-3x mx-10 max-h-[750px]'>
        <div className='bg-[#91a095] rounded-3xl flex items-end justify-center'>
          <img src={image1} alt="image1" />
        </div>
        <div className='grid grid-rows-5 w-full h-full'>
          <div className='bg-[#91a095] rounded-3xl flex align-center items-center px-3 pt-5'>
            <img src={image3} alt="image3" className='w-full h-full rounded-lg' />
          </div>
          <div className='row-span-3 grid grid-rows-4 justify-center items-cente'>
            <div className='text-7xl text-center text-txtColor font-semibold tracking-widest stretchTxt mt-8 selectNone'>ULTIMATE</div>
            <div className='text-9xl text-center tracking-widest font-bold text-transparent txtSale mt-3 selectNone'>SALE</div>
            <div className='text-4xl text-center text-txtColor tracking-wider mt-18 selectNone'>NEW ARRIVAL</div>
            <div className='flex items-center justify-center'>
              <Link to='/products'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2'>SHOP NOW</Link>
            </div>
          </div>
          <div className='bg-secondary rounded-3xl flex align-center items-center px-3'>
            <img src={image4} alt="image3" className='w-full h-full rounded-lg' />
          </div>
        </div>
        <div className='bg-[#91a095] rounded-3xl flex items-end justify-center'>
          <img src={image2} alt="image2" />
        </div>
      </div>
      <div>
        carousel
      </div>
      <div>
        Deals
      </div>
      <div>
        New Arrivals
      </div>
      <div>
        Products
      </div>
    </div>
  )
}
export default Home