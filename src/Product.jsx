import React  from 'react'
import Nav from './components/nav'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import banner from './assets/img/banner.png'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const Product = () => {
  const location =useLocation()
  const {state} =location
  const category = state?.category
  return (
    <div className='flex flex-col gap-5'>
      <div className='sticky top-0 z-20 bg-white shadow-md'><Nav /></div>
      <div className='flex lg:justify-around justify-center lg:px-[100px] items-center bg-background gap-5'> {/* Banner Container*/}
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[15px]'>
            <p className='md:text-[20px] text-xl'>---- 10% OFF</p>
            <p className='md:text-[40px] text-2xl'>NEW YEAR SALE</p>
          </div>
          <div className='flex '>
            <Link to={'/product'} className='md:px-[40px] md:py-[10px] px-4 py-2 bg-black text-white text-xl hover:bg-primay'> SHOP SALE</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={banner} alt="" className='md:w-[200px] w-[150px]' />
        </div>
      </div>   
      <h2 className='p-5 text-5xl'>
        {category?<span>Filter by: {category}</span> :'All Items'}
        </h2>   
      <ProductList category={category} />

      <Footer />
    </div>
  )
}

export default Product