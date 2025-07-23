import React from 'react'
import notFound from './assets/image/notfound.svg'
import { Link } from 'react-router-dom'
const NotFound = () => {

    return (
        <div className='flex flex-col justify-center h-screen items-center gap-6'>
            <img src={notFound} alt="" className='w-[400px]' />
            <div className='flex items-center gap-2'>
                <p className='text-xl'>This page is not available!</p>
                <Link to="/home" className='cursor-pointer bg-primary text-third p-2 active:bg-primary/60 rounded-md'>Go Back</Link>
            </div>

        </div>
    )
}

export default NotFound
