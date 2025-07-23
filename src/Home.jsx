import React from 'react'
import Product from './product'
import Nav from './nav'
import Carousel from './Carousel'
import Footer from './Footer'
import { faShoppingCart,faAward,faTag,faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import image from './assets/img/iphone16.jpg'
import image2 from './assets/img/iphone-16-pro.jpg'
import image3 from './assets/img/iphone16e.jpg'
import image4 from './assets/img/iphone15.jpg'
import banner from './assets/img/banner.png'
import blog1 from './assets/img/blog1.jpg'
import blog2 from './assets/img/blog2.jpg'
import blog3 from './assets/img/blog3.jpg'

const blogs=[
  {
    title:'Get Some Cool Gadget in 2025',
    date: 'July 23 2025',
    category: 'Gadgets',
    image:blog1
  },
    {
    title:'Technology Hacks You Wont Get',
    date: 'July 21 2025',
    category: 'Technology',
    image:blog2
  },
    {
    title:'Top 10 small camera in the world',
    date: 'July 1 2025',
    category: 'Camera',
    image:blog3
  }
]
const watchImages = import.meta.glob('./assets/watch images/*.jpg',{eager:true,as:'url'});
const watchData = Object.values(watchImages)


const watches=[
  {
    text:'Apple Watch SE',
    price:'349',
    image:watchData[0]
  },
  {
    text:'Apple Watch Series 10A',
    price:'599',
    image:watchData[1]
  },
    {
    text:'Apple Watch Series 10T',
    price:'1049',
    image:watchData[2]
  },
    {
    text:'Apple Watch Ultra 2',
    price:'1199',
    image:watchData[3]
  }
]
const slides=[
 {
  title: 'Beyond Devices. Experience True Harmony.',
  buttonText: 'Shop Now',
  image: './assets/img/applewatch.png'
 },
  {
  title: 'Beyond Devices. Experience True Harmony.',
  buttonText: 'Shop Now',
  image: './assets/img/applewatch.png'
 }
]
const images = [
  {
    text:'Iphone 16',
    price: "1299",
    img: image
  },
    {
    text:'Iphone 16 Pro',
    price: "1599",
    img: image2
  },
    {
    text:'Iphone 16e',
    price: "949",
    img: image3
  },
      {
    text:'Iphone 15 ',
    price: "1099",
    img: image4
  }
]

const Home = () => {
  return (
      <div className='text-primaryText'>
        <Nav/>
        {/* <Carousel autoSlide={true} > */}
          {/* {slides.map((s,index)=>(
            <div key={index} className='flex p-[50px] bg-gray-300 w-full'>
              <div>
                <h2 className=''>{s.title}</h2>
                <Link to='/product'>{s.buttonText}</Link>
              </div>
              <div className=''>
                <img src={s.image} alt="Slide image" className='' />
              </div>
            </div>
            ))} */}
        {/* </Carousel> */}
        
        <div className='py-[80px] px-[150px] flex flex-col gap-[100px]'> {/* Top Container*/}
          <div className='flex justify-between items-center'>
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
          <div className='uppercase flex flex-col gap-4'> {/* Mobile product container*/}
            <div className='flex justify-between items-end py-2'> {/* Upper Header Line*/}
              <p className='text-3xl font-bold'>Mobile Products</p>
              <Link to={'/product'} className='underline'>Go To Shop</Link>
            </div>
            <div className='flex gap-[20px] items-stretch'> {/* Mobile Container*/}
              {images.map((content, index) => (
                <div key={index} className='flex flex-1 flex-col gap-2 h-full'>
                  <div className='relative h-full flex-1'>
                    <img src={content.img} alt="" className='object-cover w-full h-full' />
                    <div className='absolute inset-0 flex justify-center items-end text-white px-[20px] pb-5'>
                      <Link to={'/cart'} className='flex justify-center items-center gap-3 bg-black px-7 py-3'>
                        Add To Cart 
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </Link>
                  </div>
                  </div>
                  <div>
                    <p className='flex justify-between text-xl'>
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
          <div className='uppercase flex flex-col gap-4'> {/* Watches container*/}
            <div className='flex justify-between items-end py-2'> {/* Upper Header Line*/}
              <p className='text-3xl font-bold'>Watches</p>
              <Link to={'/product'} className='underline'>Go To Shop</Link>
            </div>            
            <div className='flex gap-[20px] items-stretch'> {/* Watch Container*/}
              {watches.map((content, index) => (
                <div key={index} className='flex flex-1 flex-col gap-2'>
                  <div className='relative flex-1'>
                    <img src={content.image} alt="" className='object-cover w-full h-full' />
                    {/* <div className='absolute inset-0 flex justify-center items-end text-white px-[20px] pb-5'>
                      <Link to={'/cart'} className='flex justify-center items-center gap-3 bg-black px-7 py-3'>
                        Add To Cart 
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </Link>
                    </div> */}
                  </div>
                  <div>
                    <p className='flex justify-between text-xl'>
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
        </div>

        <div className='flex justify-end items-center bg-background pl-[300px] '> {/* Banner Container*/}
          <div className='flex flex-1/2 flex-col gap-[30px]'>
            <div className='flex flex-col gap-[15px]'>
              <p className='text-[30px]'>---- 10% OFF</p>
              <p className='text-[50px]'>NEW YEAR SALE</p>
            </div>
            <div className='flex '>
              <Link to={'/product'} className='px-[px] py-[10px] bg-black text-white text-xl hover:bg-primay'> SHOP SALE</Link>
            </div>
          </div>
          <div className='flex-1/2 flex justify-center items-center'>
            <img src={banner} alt="" className='w-[400px]' />
          </div>
        </div>

        <div className='py-[80px] px-[150px] flex flex-col gap-[100px]'> {/* Bottom Container*/}

          <div className='uppercase flex flex-col gap-4'> {/* Post container*/}
            <div className='flex justify-between items-end py-2'> {/* Upper Header Line*/}
              <p className='text-3xl font-bold'>Latest Posts</p>
              <Link to={'/product'} className='underline'>Read Blogs</Link>
            </div>            
            <div className='flex gap-[20px] items-stretch'> {/* Watch Container*/}
              {blogs.map((content, index) => (
                <div key={index} className='flex flex-1 flex-col gap-2 hover:translate-y-1 hover:cursor-pointer hover: opacity-85'>
                  <div className='flex-1'>
                    <img src={content.image} alt="" className='object-cover w-full h-full' />
                  </div>
                  <div>
                    <p className='flex items-center gap-[20px] text-primary/70'>{content.date} 
                      <span className='block w-[5px] h-[5px] bg-primary rounded-full'></span> 
                      <span>{content.category}</span>
                    </p>
                    <p className='text-xl'>{content.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='py-[60px] px-[100px] flex justify-center items-center bg-primaryText text-white'>{/* Subscribe Container*/ }
              <div className='flex-1/2 flex flex-col gap-2'>
                <p className='text-3xl'>Subscribe Us Now</p>
                <p className='text-s normal-case'>Get latest news, updates and deals directly mailed to your inbox.</p>
              </div>
              <div className='flex-1/2'>
                <form className='flex flex-1/2'>
                  <input type="text" className='flex-1/2 p-3 bg-white placeholder:text-primary outline-0' placeholder='Your Email Address Here'/>
                  <Link to={'/'} className='flex-1 bg-accent flex justify-center items-center'>Subscribe</Link>
                </form>
              </div>
            </div>
        </div>
        <Footer />
      </div>
  )
}

export default Home