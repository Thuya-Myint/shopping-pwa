import React from 'react'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './NotFound'
import { ToastContainer } from 'react-toastify'
import VerifyStatus from './components/VerifyStatus'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/product' element={<Product />} />
        <Route path='/verify-email' element={<VerifyStatus />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar ={false}
        closeOnClick={true}
        draggable
        pauseOnHover
        theme='dark'
      />
    </BrowserRouter>
  )
}

export default App
