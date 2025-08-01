import React, { useState,useEffect } from 'react'
import loginBack from './assets/img/Frame 1.png'
import logo from './assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { CgSlack } from 'react-icons/cg'
import loading from './assets/loading/loading.svg'
const Login = () => {
    const mockData =[
        {   
            username:'Kyaw Gyi',
            email:'abcd@gmail.com',
            password:'abcd'
        },
        {
            username:'Ko Ko',
            email:'koko@gmail.com',
            password:'koko'
        },
    ]
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isShowPassword,setisShowPassword] = useState(false)
    const [isRemember,setisRemember] =useState(false)
    const [LoginError, setLoginError] = useState(false)
    const [errorText,seterrorText] =useState('')
    const [isemailError,setisemaiError] =useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)

    const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const navigate  =useNavigate()

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user-data')) || null
        if(userData?.remember){
            // navigate('/home')
            console.log('userdata', userData)
        }
    },[isRemember])

    const handleSubmit =(e)=>{
        e.preventDefault()
        try {   
                setLoginError(false)
                setisemaiError(false)
                setIsPasswordError(false)
                seterrorText('')
            if(email.trim()===''){
                setisemaiError(true)
                seterrorText('Your email is empty')
                return
            }
            if(!emailRegX.test(email)){
                setisemaiError(true)
                seterrorText('Please enter valid email format')
                return
            }
            else if(password.trim()===''){
                setIsPasswordError(true)
                seterrorText('Your Password is empty')
                return
            }
            const isUser = mockData.find(userData=>
                userData.email === email && userData.password === password
            )
            if(isUser){

                localStorage.setItem('user-data',JSON.stringify({
                    username: isUser.username,
                    email:isUser.email,
                    password: isUser.password,
                    remember: isRemember
                }))
                setemail('')
                setpassword('')
                setLoginError(false)
                navigate('/home')
            }else{
                setLoginError(true)              
            }            
        } catch (error) {
            console.log('login error',error)
            setLoginError(true)
        }
        }
    
    return (
        <div className='grid justify-center items-center h-screen lg:grid-cols-2 font-roboto md:bg-gray-500 lg:bg-white'>
            <div className={`lg:grid h-screen lg:col-span-1 px-[20px] items-center justify-center bg-cover hidden bg-[url('https://media.istockphoto.com/id/1140409137/vector/trendy-low-poly-triangles-with-navy-bg.jpg?s=612x612&w=0&k=20&c=vunManM5m2lfkcgYpOd_dIF-gCGUEUL4SjLYe-o9Nng=')]`}>
                <div className=' bg-primary/70 xl:p-[60px] xl:w-xl xl:pr-[200px] p-[30px]'>
                    <p className='xl:text-[45px]/15 text-[40px] text-white capitalize font-bold mb-2'>Destination for the latest <span className='text-[#141414]'>electronics</span></p>
                    <p className='text-[#141414] text-[18px]'>Unlock a smarter lifestyle with top gadgets delivered right to your door.</p>                   
                </div>
            </div>  
            <div className='flex justify-center lg:col-span-1 xl:px-[50px] md:col-span-5 p-5 text-xl bg-white'>
                <div className='xl:px-[40px] xl:py-[20px] gap-[20px] xl:gap-[40px] flex flex-col'>
                    <img src={logo} alt="" className='w-[200px]'/>
                    <div>
                        <p className='text-[32px] font-bold'>Hello,👋</p>
                        <p className='text-[#3E334E] text-[18px]'>Enter your email and password to login.</p>
                    </div>
                    <form className='flex flex-col gap-[20px]' onSubmit={(e)=>handleSubmit(e)}>
                            {LoginError ? <span className='text-red-500 text-xl'>Incorrect Email or Password</span> : ''
                                
                            }
                        <label  htmlFor="email" className='text-[#3E334E] text-[18px]'>Email {isemailError ? <span className='text-red-500'>{errorText}</span>: ''}</label>
                            
                        <input 
                          value={email}
                          placeholder='abc@gmail.com'
                          type="text" 
                          id='email' 
                          className={`border-1 rounded-md ${isemailError ? 'border-red-500': ''} text-[#3E334E]/80 text-[18px] py-[10px] px-[10px] focus:outline-0`}
                          required
                          onChange={(e)=>setemail(e.target.value)}
                          />
                        <label htmlFor="password" className='text-[#3E334E] text-[18px]'>Password {isPasswordError ? <span className='text-red-500'>{errorText}</span>: ''}</label>
                        <div className={`${isPasswordError ? 'border-red-500': ''} flex border-1 rounded-md justify-center items-center `}>
                            <input 
                            value={password}
                            placeholder='•••••••' 
                            type={!isShowPassword ? 'password' : 'text'} 
                            id='password' 
                            onChange={(e)=>setpassword(e.target.value)}
                            className='w-[90%] text-[#3E334E]/80 text-[18px] py-[10px] px-[10px] focus:outline-0' required/>
                            <FontAwesomeIcon icon={!isShowPassword ? faEyeSlash : faEye} className={`hover:cursor-pointer`} onClick={()=>setisShowPassword(!isShowPassword)} />
                        </div>
                        
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className={`relative w-12 h-6  transition-all duration-500 ${isRemember ? 'bg-cyan-400' : 'bg-slate-300'} rounded-full cursor-pointer`} onClick={() => setisRemember(!isRemember)}>
                                    <div
                                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-500 ${isRemember ? 'left-7' : 'left-1'}`}
                                    />
                                </div>
                                <label htmlFor="remember" className='text-lg'>Remember Me</label>
                            </div>
                            <div>
                                <Link to={'/'} className='text-lg underline hover:opacity-50'>Forgot Password?</Link>
                            </div> 
                        </div> 
                        <div className='grid lg:grid-cols-2 gap-[20px]'>
                            <button type="submit" 
                            className={`px-[25px] py-[15px] bg-linear-to-t to-[#646464] from-[#141414] rounded-md flex justify-center items-center hover:cursor-pointer text-white font-semibold hover:opacity-50`}
                            >
                                {IsLoading? <img src={loading} className='w-[25px]'/>: 'Login'}
                            </button>
                            {/* <Link to={'/'} className='px-[25px] py-[15px] border-1 rounded-md flex justify-center items-center font-semibold hover:bg-gray-300'>Sign Up</Link> */}
                            <button type="submit" className='hover:cursor-pointer px-[25px] py-[15px] border-1 rounded-md flex justify-center items-center font-semibold hover:bg-gray-300'>
                                Sign Up
                            </button>
                        </div> 
                        <p className='text-center'>Or, login with</p> 
                        <div className='grid grid-cols-3  gap-[20px]'>
                            <Link to={'/'} className='px-[20px] py-[15px] text-[18px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Facebook</Link>
                            <Link to={'/'} className='px-[20px] py-[15px] text-[18px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Google</Link>
                            <Link to={'/'} className='px-[20px] py-[15px] text-[18px] border-1 rounded-md flex justify-center items-center hover:bg-gray-300'>Linked In</Link>
                        </div>   
            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
