import React from 'react'
import loginImage from './assests/image/loginImg.svg'
import { Link } from 'react-router-dom'
import logo from './assests/image/logoBrand.png'

const Login = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-r from-[#78837b] via-[#c3b1b1] to-[#d4d1d1]'>
            <div className="bg-secondary w-3/5 h-3/4 rounded-3xl grid grid-cols-5">
                <div className='bg-primary rounded-tl-3xl rounded-bl-3xl col-span-3 p-3'>
                    <img src={loginImage} alt="Login Image" className='w-full h-full' />
                </div>
                <div className=' bg-secondary rounded-tr-3xl rounded-br-3xl col-span-2 py-10'>
                    <div className='px-7'>
                        <div className='flex items-center justify-center pt-2'>
                            <img src={logo} alt="logo" className='w-[100px]' />
                        </div>
                        <h1 className='text-center text-2xl font-mono font-bold text-txtColor mt-5 mb-3'>Nice to see you again</h1>
                        <div className='grid gap-4 pt-3'>
                            <input type="text" placeholder='Email or phone number' className='bg-primary rounded-lg h-10 pl-2 inputHover' />
                            <input type="password" placeholder='Enter password' className='bg-primary rounded-lg h-10 pl-2 inputHover' />
                        </div>
                        <div className='flex place-content-between my-4'>
                            <div className='flex gap-1.5'>
                                {/* <button htmlFor="remember">Button</button> */}
                                <input type="checkbox" id='remember' className='cursor-pointer' />
                                <label htmlFor="remember" className='text-xs cursor-pointer text-txtColor3 txtHover'>Remember me</label>
                            </div>
                            <Link to="/forgot-psw" className='text-xs text-txtColor3 txtHover'>Forgot password?</Link>
                        </div>
                        <div className='grid'>
                            <Link to="/home" className='w-full pt-1.5 pb-1.5 mb-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover'>Sign in</Link>
                            <div className='flex justify-center items-center'>
                                <p className='text-txtColor font-bold'>OR</p>
                            </div>
                            <Link to="/home" className='w-full pt-1.5 pb-1.5 mt-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover'>Sign in with Google</Link>
                        </div>
                        <div className='flex justify-center items-center mt-4 gap-3'>
                            <Link to={'/sign-up'} className='text-xs text-txtColor3 txtHover'>Don't have an account?</Link>
                            <Link to={'/sign-up'} className='text-xs text-txtColor3 txtHover'>Sign up now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
