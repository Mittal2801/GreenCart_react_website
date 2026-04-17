import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import AllProduct from './components/AllProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import Footer from './components/Footer'
import CategoryProduct from './components/CategoryProduct'
import Login from './components/Login'
import Register from './components/Register'
import { UserProvider } from './context/UserContexct'
import Homesec1 from './components/Homesec1'
import AddToCart from './components/AddToCart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <UserProvider>
          <BrowserRouter>
          {/* <Homesec1 /> */}
          <Nav />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/allproduct' element={<AllProduct/>} />
              <Route path='/more/:id/:category' element={<SingleProduct/>} />
              <Route path='/cat/:category' element={<CategoryProduct />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<AddToCart />} />  
            </Routes>
          </BrowserRouter>
          <Footer />
          <Toaster>
            
          </Toaster>
     </UserProvider>
    </>
  )
}

export default App
