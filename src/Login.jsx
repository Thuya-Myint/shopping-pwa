import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { LoginImages } from './constants'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isRememberMe, setIsRememberMe] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user-data")) || null
        if(userData?.rememeberMe){
            navigate('/')
        }
    }, [isRememberMe]) //[] means dependancy in which userData updates whenever the value in dependancy change
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email.trim() === "" || !emailRegex.test(email)){
            return alert("Invalid Email!")
        } else if(password.trim() === ""){
            return alert("Invalid Password!")
        }
        try {
            setIsLoading(true);

            // JSON.parse() //convert parameter value to object
            // JSON.stringify() //convert parameter value to string
            localStorage.setItem("user-data", JSON.stringify({
                email: email,
                password: password,
                rememeberMe: isRememberMe,
            }))
            
            setEmail("")
            setPassword("")

            setTimeout(() => {
                setIsLoading(false)
                navigate("/")
            }, [2000]);
        } catch (error) {
            console.log("Login Error!", error)            
        }
    }

    const toggleRememberMe = () => setIsRememberMe(!isRememberMe)

    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-r from-[#78837b] via-[#c3b1b1] to-[#d4d1d1]'>
            <div 
                className="bg-secondary 
                xl:w-3/5
                md:w-[50%] w-[100%] 
                rounded-3xl grid grid-cols-5"
                onSubmit={(e) =>  handleSubmit(e)}
            >
                <div className='bg-primary rounded-tl-3xl rounded-bl-3xl col-span-3 p-3'>
                    <img src={LoginImages[1]} alt="Login Image" className='w-full h-full' />
                </div>
                <form className=' bg-secondary rounded-tr-3xl rounded-br-3xl col-span-2 py-10'>
                    <div className='px-7'>
                        <div className='flex items-center justify-center pt-2'>
                            {/* <img src={LoginImages[0]} alt="logo" className='w-[100px]' /> */}
                        </div>
                        <h1 className='text-center text-2xl font-mono font-bold text-txtColor mt-5 mb-3'>Nice to see you again</h1>
                        <div className='grid w-full gap-4 pt-3'>
                            <input 
                            value={email}
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email or phone number'
                            className='bg-primary rounded-lg py-2 pl-2 inputHover outline-none' />
                            <div className='w-full place-content-between flex items-center bg-primary rounded-lg py-2 px-2 inputHover'>
                                <input 
                                value={password}
                                type={isShowPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Enter password' 
                                className='outline-none' />
                                {
                                    isShowPassword ? 
                                    <FaEye className='active:opacity-50' onClick={() => setIsShowPassword(!isShowPassword)} />
                                    :
                                    <FaEyeSlash className='active:opacity-50' onClick={() => setIsShowPassword(!isShowPassword)} />
                                }
                            </div>
                        </div>
                        <div className='flex place-content-between my-4'>
                            <div className='flex gap-1.5 items-center'>
                                {/* <button htmlFor="remember">Button</button> */}
                                <div 
                                className= {`transition-all duration-500 w-[28px] h-[15px] relative rounded-full flex items-center cursor-pointer ${(isRememberMe ? 'bg-hoverColor' : 'bg-primary')}`}
                                onClick={toggleRememberMe}
                                >
                                    <div className= {`w-[12px] h-[12px] bg-secondary absolute rounded-full ${(isRememberMe ? 'left-3.5 transition-all duration-300' : 'left-0.5 transition-all duration-300')}`}>

                                    </div>
                                </div>
                                <div className='text-xs cursor-pointer text-txtColor3 txtHover' onClick={toggleRememberMe}>Remember me</div>
                            </div>
                            <Link to="/forgot-psw" className='text-xs text-txtColor3 txtHover'>Forgot password?</Link>
                        </div>
                        <div className='grid'>
                            <button type='submit' 
                            className={`w-full pt-1.5 pb-1.5 mb-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover ${isLoading ? 'animate-pulse' : ''} `}>
                                {
                                    isLoading ?
                                    "Loading..."
                                    :
                                    "Sign In"
                                }
                            </button>
                            {/* <Link to="/" className='w-full pt-1.5 pb-1.5 mb-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover'>Sign in</Link> */}
                            <div className='flex justify-center items-center'>
                                <p className='text-txtColor font-bold'>OR</p>
                            </div>
                            <Link to="/" className='w-full pt-1.5 pb-1.5 mt-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover'>Sign in with Google</Link>
                        </div>
                        <div className='flex justify-center items-center mt-4 gap-3'>
                            <Link to={'/sign-up'} className='text-xs text-txtColor3 txtHover'>Don't have an account?</Link>
                            <Link to={'/sign-up'} className='text-xs text-txtColor3 txtHover'>Sign up now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login