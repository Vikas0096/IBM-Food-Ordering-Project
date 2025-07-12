import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {

  const[menu,setMenu] = useState("Home");

  const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
      <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
     </ul>
     <div className="navbar-right">
    
     
       <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
     
      <button onClick={()=>setShowLogin(true)} >sign in </button>
     </div>
    </div>
  )
}
export default Navbar
