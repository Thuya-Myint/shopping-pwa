import React,{useState,useEffect} from 'react'
import {products} from '../constants'
import { FaRegStar, FaStar,FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const ProductList = ({category}) => {
    const navigate=useNavigate()
    const filiteredProduct = products.filter(item=>!category || item.category===category)


  return (
    <>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 p-[30px] gap-5'>
            {filiteredProduct.length === 0 ? (
                <>
                <div className='col-span-4 text-2xl flex justify-center items-center p-4 '>
                    There is no product in {category || 'this category'}
                </div>
                {/* <h2 className='text-5xl col-span-4'>These are our products</h2>
                <div className='col-span-4'>
                    <ProductList />
                </div> */}
                </>
                ) :(
                filiteredProduct.map((item)=>{

                    const rating = item.rating
                    const fullStars=Math.floor(rating) 
                    const hasHalf = rating % 1 >= 0.5
                    const emptyStars=5-fullStars-(hasHalf ? 1 : 0)
                    
                    return(
                    <div key={item.id} className='flex flex-col gap-3 bg-white p-4 '>
                        <div className=''>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='font-roboto flex flex-col gap-3'>
                            <p className='text-xl font-bold flex justify-between'>
                                {item.name} 
                                
                                <span>${parseInt(item.price)}<span className='text-sm align-top font-semibold'>.{item.price.toFixed(2).split('.')[1]} </span>
                                </span>
                            </p>
                            <p className='text-gray-600'>{item.detail}</p>
                            <div className='flex gap-3 items-center'>
                                {
                                    [...Array(fullStars)].map((_,i)=>(
                                        <FaStar key={i} className=' text-xl'/>
                                    ))
                                }
                                {
                                    hasHalf && <FaStarHalfAlt className='text-xl'/>
                                }
                                {
                                    [...Array(emptyStars)].map((_,i)=>(
                                        <FaRegStar key={i} className='text-xl'/>                              
                                    ))                                
                                }
                                <p>({item.ratingCount})</p>
                            </div>
                        </div>
                        <div className='py-4 flex justify-center md:justify-start'>
                            <button className='rounded-full px-[50px] py-2 border-primary border-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer'>Add to Cart</button>
                        </div>
                    </div>
                )})
            )
    
            }
        </div>
        {category && (
        <div className='flex justify-center items-center p-3'>
            <button className='px-[40px] py-[20px] text-xl bg-black text-white hover:bg-gray-700 hover:cursor-pointer active:opacity-40'
            onClick={()=>{
                window.scrollTo(0,0)
                navigate('/product')
                }}>Browse More</button>
        </div>
       )}
    </>
  )
}

export default ProductList