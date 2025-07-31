import React from 'react'
import { Link } from 'react-router-dom'
import shinyDressImg from './assests/image/pImg1.png'
import NavBar from './NavBar'
//import { FaStar } from "react-icons/fa"

// import NavBar from './NavBar'
// import Footer from './footer'
const New_Arrival = () => {
  
  const categories = [
    {name: "Men's Fashion"},
    {name: "Women's Fashion"},
    {name: "Women Accessories"},
    {name: "Men Accesories"},
    {name: "Discount Deals"}
  ]
  
  const products = [
    {img: shinyDressImg ,title: "Shiny Dress", tag: "AI Karam" , rating: "5 Stars", review: "(4.1k) Customer Reviews", price:"$95.50", itemLeft: "Almost Sold Out"}
  ]

  return (
    <div className='bgColor w-screen h-screen'>
      <NavBar />
      <div className='px-30 py-20'>
        <div className='text-center px-60'>
          <h1 className='font-georgia text-4xl text-txtColor'>
            New Arrivals
          </h1>
          <p className='text-txtColor3 text-base py-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta similique eos fuga porro harum facere deserunt illo! Fuga ipsa soluta est ipsam perferendis, tenetur quibusdam consequatur dolor a libero magnam.
          </p>
        </div>
        <div className='flex gap-5 items-center justify-center text-center'>
          {categories.map(category => (
            <Link
              key = {category.name}
              className='btnHover text-lg p-3 w-50 rounded-lg'
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className='flex rounded-2xl bg-red-600'>
            {products.map(product => (
            <div className='p-5 rounded-xl w-1/3 bg-secondary'>
              <div>
                <img src={product.img} alt={product.title}
                  className='w-full'
                />
              </div>
              <div className='flex pt-3 pb-5'>
                <div className='w-1/2'>
                  <h1
                    key={product.title}
                    className='text-2xl text-txtColor4 font-semibold tracking-wide'
                  >
                    {product.title}
                  </h1>

                  <p
                    key={product.tag}
                    className='text-sm text-txtColor4/70'
                  >
                    {product.tag}
                  </p>

                  <p
                    key={product.review}
                    className='py-4 text-sm text-txtColor4 font-semibold tracking-wide'
                  >
                    {product.review}
                  </p>

                  <p
                    key={product.price}
                    className='text-2xl text-txtColor4 font-semibold tracking-wide'
                  >
                    {product.price}
                  </p>
                </div>
                <div className=''>
                  <div>
                    {product.rating}
                    {/* <ratingIcon /> */}
                  </div>
                  <p>
                    {product.itemLeft}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          View More
        </div>
      </div>
    </div>
  )
}

export default New_Arrival