import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu =({category, setCategory}) =>{

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Crave It? We’ve Got It : Menu</h1>
      <p className='explore-menu-text'>"Crafting joy through food — one flavor-packed moment at a time. <br />
"Bringing you comfort, flavor, and delight — one delicious plate at a time."</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
             
            <p className={category===item.menu_name?"active":""}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
     
    </div>
  )
}

export default ExploreMenu
