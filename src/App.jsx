import React from 'react'
import Home from './Home'
import Login from './Login'
import Product from './product'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/product' element={<Product />} />

        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
