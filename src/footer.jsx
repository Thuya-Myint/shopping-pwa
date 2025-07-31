import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assests/image/logoBrand.png'

const footer = () => {

    const footerLinks = [
        {name: "Support Center", path: "/support-center"},
        {name: "Invoicing", path: "/invoicing"},
        {name: "Contract", path: "/contract"},
        {name: "Careers", path: "/careers"},
        {name: "Blog", path: "/blog"},
        {name: "FAQs", path: "/faqs"}
  ]

    return (
        <div className='px-30 pt-1 bg-third'>
            <div className='flex'>
                <div className='flex w-2/5 gap-5 pt-3 h-15 items-center gap-'>
                    <img src={logo} alt="logo" className='h-full' />
                    <h1 className='text-3xl font-bold font-serif selectNone'>THREADED</h1>
                </div>
                <div className='flex gap-5 text-center w-3/5 items-center justify-end'>
                    {footerLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className = 'FooterHover font-semibold text-m tracking-wider text-black/60 text-right'
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='pt-3 pb-2'>
                <p className='text-xs text-center text-black/60'>
                    Copyright &#169; 2025 THREADED | All Right Reserved.
                </p>
            </div>
        </div>
  )
}

export default footer