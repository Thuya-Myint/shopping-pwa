import React from 'react'
import loginImage from './assests/image/loginImg.svg'
const Login = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="bg-secondary w-3/5 h-3/4 rounded-3xl grid grid-cols-5">
                <div className='bg-primary rounded-tl-3xl rounded-bl-3xl col-span-3 p-3'>
                    <img src={loginImage} alt="Login Image" className='w-full h-full' />
                </div>
                <div className=' bg-secondary rounded-tr-3xl rounded-br-3xl col-span-2'>
                    <div className='pt-5'>
                        <h1 className='text-center text-2xl font-mono font-bold text-txtColor mb-5'>Nice to see you again</h1>
                        <div className='grid pl-7 pr-7 gap-4'>
                            <input type="text" placeholder='Email or phone number' className='bg-primary/70 rounded-lg h-10 pl-2' />
                            <input type="password" placeholder='Enter password' className='bg-primary/70 rounded-lg h-10 pl-2' />
                        </div>
                        <div className='flex place-content-between'>
                            <div className='flex'>
                                <button>Button</button>
                                <p>Remember me</p>
                            </div>
                            <p>Forgot password?</p>
                        </div>
                        <table>
                            <thead>
                            </thead>
                            <tbody>
                                    <tr>
                                        <button>Sign In</button>
                                    </tr>
                                    <tr>
                                        <button>Sign In with Google</button>
                                    </tr>
                            </tbody>
                        </table>
                        <div>
                            <p>Don't have an account?</p>
                            <a href="">Sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
