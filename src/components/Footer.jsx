import React from 'react'
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faXTwitter,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-start gap-[60px] flex-wrap p-10  justify-between'>
        <div className='w-full flex flex-col gap-3 md:max-w-[300px]'> {/*Social BOx*/}
            <img src={logo} alt="" className='w-[200px]' />
            <p className=''>Sit amet consectetur adipisicing elit. Quis dolorum placeat saepe tempore voluptatibus odio, Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='flex justify-between items-center '>
                <Link to={'/home'}><FontAwesomeIcon icon={faFacebook} className='text-[30px]'/></Link>
                <Link to={'/home'}><FontAwesomeIcon icon={faInstagram} className='text-[30px]'/></Link>
                <Link to={'/home'}><FontAwesomeIcon icon={faXTwitter} className='text-[30px]'/></Link>
                <Link to={'/home'}><FontAwesomeIcon icon={faLinkedin} className='text-[30px]'/></Link>
                <Link to={'/home'}><FontAwesomeIcon icon={faYoutube} className='text-[30px]'/></Link>
                
            </div>
        </div>
        <div className='flex md:gap-30 flex-col md:flex-row gap-5'>
            <div className='w-full uppercase flex flex-col gap-3 border-b-2 py-3 md:border-none md:flex-1'>
                <h2 className='text-xl font-bold'>
                    Quick Links
                </h2>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link to='/home' className='hover:text-accent'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-accent'>About</Link>
                    </li>
                    <li>
                        <Link to='/product' className='hover:text-accent'>Product</Link>
                    </li>
                    <li>
                        <Link to='/blogs' className='hover:text-accent'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='hover:text-accent'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='w-full uppercase flex flex-col gap-3 border-b-2 py-3 md:border-none md:flex-1'>
                <h2 className='text-xl font-bold'>
                    Help & Info
                </h2>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link to='/' className='hover:text-accent'>Track Your Order</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-accent'>Return Policies</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-accent'>Shipping + Delivery</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-accent'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-accent'>FAQs</Link>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-col uppercase border-b-2 py-3 md:border-none md:flex-1'>
                <h2 className='text-xl font-bold'>
                    Contact Us
                </h2>
                <p className='normal-case text-primary'>Do you have any queries or suggestions? <br /><span className='underline font-bold text-primaryText'>mansoury@ltd.sg.com</span></p>
                <p className='normal-case text-primary'>If you need support? Just give us a call. <br /><span className='underline font-bold text-primaryText'>+65 9130 8695</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer