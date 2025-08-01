import React from 'react'
import { homeImages } from './constants'
import { Link } from 'react-router-dom'

const LogoBrands = () => {
  return (
    window.innerWidth >= 1024 ?
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
    :
    <div>
        small
    </div>
  )
}

export default LogoBrands