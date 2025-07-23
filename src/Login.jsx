import React from 'react'
import stars from './assets/image/undraw_stars_5pgw.svg'

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-xl">

                <div className='w-full h-full flex items-center justify-center p-10'>
                    <img
                        src={stars}
                        alt="Login Visual"
                        className="  hidden md:block"
                    />
                </div>

                <form className="flex flex-col justify-center gap-6 p-8">
                    <h1 className="text-3xl font-extrabold text-center text-gray-800">
                        Login to Shomyn
                    </h1>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-sm text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="p-2 rounded-xl border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 rounded-lg border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 rounded-lg border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
