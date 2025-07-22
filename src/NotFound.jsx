import React from 'react'
import notFound from './assests/image/notFound.svg'
import { Link } from 'react-router-dom'
import Home from './Home'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-5 justify-center h-screen items-center bg-primary'>
        <img src={notFound} alt="404 not found!" className='w-xl mb-5 select-none' />
        <div className='flex gap-4 items-center'>
            <p className='text-lg'>The page you are trying to access is not available!</p>
        <Link to="/home" className='cursor-pointer bg-btn text-lg text-secondary pt-2 pr-4 pb-2 pl-4 rounded-xl active:bg-btn/80'>Go Back</Link>
        </div>
    </div>
  )
}

export default NotFound