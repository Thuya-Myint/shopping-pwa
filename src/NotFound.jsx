import React from 'react'
import { Link } from 'react-router-dom'
import notFound from './assets/img/notFound.svg'
const NotFound = () => {
  return (
    <div>
        <div className='flex items-center justify-center h-screen font-roboto gap-20'>
            <div className='p-[30px] '>
                <p className='text-3xl font-roboto font-bold mb-5'>Opps....</p>
                <p className='text-2xl mb-2'>Page not found</p>
                <p className='text-sm text-gray-600 mb-10'>The page doesn't exist or was removed! <br />We suggest you back to home</p>
                <Link to={'/home'} className='bg-primary px-[25px] py-[13px] rounded-md text-white active:bg-primary/60'>Back to Home</Link>
            </div>
            <div>
                <img src={notFound} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NotFound