import React from 'react'
import NavBar from './NavBar'
import BannerOne from './BannerOne'
import LogoBrands from './LogoBrands'
import DealsOfMonth from './DealsOfMonth'

const Home = () => {
  return (
    <div className='bgColor'>
      <NavBar/>
      <BannerOne />
      <LogoBrands />
      <DealsOfMonth />
      <div>
        {/* <New_Arrival /> */}
      </div>
      <div>
        Products
      </div>
      {/* <Footer/> */}
    </div>
  )
}
export default Home