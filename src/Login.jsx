import React from 'react'
import loginBack from './assets/img/Frame 1.png'
import logo from './assets/img/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='grid h-screen grid-cols-5 font-roboto'>
            <div className='grid col-span-3 items-center justify-center bg-cover' style={{ backgroundImage: `url(${loginBack})` }}>
                <div className=' bg-primary/70 p-[60px] w-xl pr-[200px]'>
                    <p className='text-[45px]/15 text-white capitalize font-bold mb-2'>Destination for the latest <span className='text-[#141414]'>electronics</span></p>
                    <p className='text-[#141414] text-[18px]'>Unlock a smarter lifestyle with top gadgets delivered right to your door.</p>                   
                </div>
            </div>
            <div className='col-span-2 flex justify-center px-[50px]'>
                <div className='w-xl px-[40px] py-[20px] gap-[40px] flex flex-col'>
                    <img src={logo} alt="" className='w-[200px]'/>
                    <div>
                        <p className='text-[32px] font-bold'>Hello,👋</p>
                        <p className='text-[#3E334E] text-[18px]'>Enter your email and password to login.</p>
                    </div>
                    <form className='flex flex-col gap-[20px]'>
                        <label htmlFor="email" className='text-[#3E334E] text-[18px]'>Email</label>
                        <input type="text" id='email' className='border-1 rounded-md text-[#3E334E]/80 text-[18px] py-[10px] px-[10px] focus:outline-0' required/>
                        <label htmlFor="password" className='text-[#3E334E] text-[18px]'>Password</label>
                        <input type="password" id='password' className='border-1 rounded-md text-[#3E334E]/80 text-[18px] py-[10px] px-[10px] focus:outline-0' required/>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <input type="checkbox" id="remember" className='transform scale-150 mr-[5px] hover:cursor-pointer'/>  
                                <label htmlFor="remember" className=''>Remember Me</label>
                            </div>
                            <div>
                                <Link to={'/'} className='underline hover:opacity-50'>Forgot Password?</Link>
                            </div> 
                        </div> 
                        <div className='grid grid-cols-2 gap-[20px]'>
                            <Link to={'/home'} className='px-[25px] py-[15px] bg-linear-to-t to-[#646464] from-[#141414] rounded-md flex justify-center items-center text-white font-semibold hover:opacity-50'>Login</Link>
                            <Link to={'/'} className='px-[25px] py-[15px] border-1 rounded-md flex justify-center items-center font-semibold hover:bg-gray-300'>Sign Up</Link>
                        </div> 
                        <p className='text-center'>Or, login with</p> 
                        <div className='grid grid-cols-3  gap-[20px]'>
                            <Link to={'/'} className='px-[25px] py-[15px] text-[14px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Google</Link>
                            <Link to={'/'} className='px-[25px] py-[15px] text-[14px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Facebook</Link>
                            <Link to={'/'} className='px-[25px] py-[15px] text-[14px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Linked In</Link>
                        </div>             
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
