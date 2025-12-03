import React, { useState,useEffect } from 'react'
import loginBack from './assets/img/Frame 1.png'
import logo from './assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { CgSlack } from 'react-icons/cg'
import loading from './assets/loading/loading.svg'  
import axios from 'axios'
import { toast } from 'react-toastify'
import { setItemToLocalStorage } from './helper/helper'


const Login = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isShowPassword,setisShowPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [isRemember,setisRemember] =useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const navigate  =useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            if(!isLogin &&name.trim() === '' ){
                alert('Please Enter Your Name')
                return
            }
            if(email.trim()===''){
                alert('Please Enter Your Email')
                return
            }else if(!emailRegX.test(email)){
                alert('Please Enter Correct Email.')
                return
            }else if(password.trim()===''){
                alert("Please Enter Your Password")
                return
            }
            const endpoint = !isLogin ? 'http://localhost:8080/api/v1/user/CreateUser' :'http://localhost:8080/api/v1/user/LoginUser'
            const payload = isLogin ? {email,password} : {name,email,password}
            const response = await axios.post(endpoint,payload)
            if(response.data.success){
                setItemToLocalStorage("user-data",response.data)     
                // toast.success(response.data.message)
                navigate('/home')
            }           
            
        }catch(error){
            console.log("Error:",error)
            toast.error(error.response.data.message)
        }
    }
    
    return (
        <>
            <div className={`h-screen w-screen bg-[url('https://wallpapers.com/images/hd/cubed-squares-black-3d-bqeujlzpj3p2e505.jpg')] bg-cover text-white flex justify-center items-center font-roboto`}>
                <div className='flex flex-col gap-5 bg-slate-200/20 lg:py-[30px] lg:px-[70px] p-[20px] md:p-[40px] shadow-xl shadow-white/10 rounded-lg backdrop-blur-xs border-2 border-white/20' >
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt="" className='w-[200px]'/>
                    </div>
                    <h2 className='text-2xl font-bold'>{
                        isLogin?
                            "Login"
                        :
                            "Register"
                        }</h2>
                    <form action="" className='flex flex-col gap-4' onSubmit={(e)=>{handleSubmit(e)}}>

                        {
                            isLogin?
                            ''
                            :
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className=''>Full Name</label>
                                <input required value={name} id='name' type="text" className='bg-white p-2 rounded-md outline-0 text-black' onChange={(e)=>setname(e.target.value)}/>
                            </div>

                        }    

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className=''>Email</label>
                            <input required value={email} id='email' type="email" className='bg-white p-2 rounded-md outline-0 text-black' onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className=''>Password</label>
                            <div className='bg-white p-2 rounded-md flex justify-between items-center'>
                            <input required type={isShowPassword?'text':'password'} value={password} id='password' className='outline-0 text-black' onChange={(e)=>setpassword(e.target.value)}/>
                            <FontAwesomeIcon icon={isShowPassword?faEye :faEyeSlash}  className={`text-black cursor-pointer active:opacity-65`} onClick={()=>setisShowPassword(!isShowPassword)}/>
                            </div>
                        </div>
                        <div className='flex gap-[30px] items-center'>
                            <div className='flex gap-2 items-center text-sm'>
                                <div className={`w-[40px] h-[20px] cursor-pointer transition-all duration-500 ${isRemember?"bg-black":"bg-white "}  rounded-full relative flex items-center px-[3px]`} onClick={()=>setisRemember(!isRemember)}>
                                    <div className={`w-[15px] h-[15px] transition-all duration-500 rounded-full absolute ${isRemember?'left-5 bg-white' :'left-1 bg-black'} `}></div>
                                </div>
                                Remember Me
                            </div>
                            <div className='flex gap-2 text-sm hover:underline cursor-pointer'>
                                Forget Password?
                            </div>
                        </div>
                        <button className='relative bg-gray-800 p-2 rounded-md cursor-pointer hover:opacity-75 active:opacity-80' >
                            {
                                isLogin?
                                "Login"
                                :
                                "Sign Up"
                            }
                        </button>
                    </form>
                    <div className='text-center'>
                        or continue with
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[70px] bg-white rounded-lg py-2 px-5 '>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />
                        </div>
                        <div className='w-[70px] bg-white rounded-lg py-2 px-5 '>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                        </div>
                        <div className='w-[70px] bg-white rounded-lg py-2 px-5 '>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/900px-2023_Facebook_icon.svg.png?20231011122028" alt="" />
                        </div>
                    </div>
                    <div className='text-sm text-center'>
                        Don't have an account? <span className='font-semibold cursor-pointer hover:underline active:opacity-80' onClick={()=>setIsLogin(!isLogin)}> 
                            {
                               isLogin?
                               'Register for free'
                               :
                               'Already have an account?'     
                            }
                            </span>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Login
