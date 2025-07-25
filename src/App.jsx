import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)


  return (<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
   
  )
}

export default App
