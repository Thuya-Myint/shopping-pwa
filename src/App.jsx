import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Deals from './Deals'
import Product from './Product'
import New_Arrival from './New_Arrival'
import NotFound from './NotFound'
import ForgotPsw from './ForgotPsw'
import SignUp from './SignUp'
import NavBar from './NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/deals' element={<Deals />}/>
        <Route path='/new-arrival' element={<New_Arrival />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='forgot-psw' element={<ForgotPsw />}/>

        <Route path='nav-bar' element={<NavBar />}/>
        
        
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App