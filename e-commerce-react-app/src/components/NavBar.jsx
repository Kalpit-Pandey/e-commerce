import React, { useContext } from "react";
import { useState } from "react";
import getProducts from '../data/fetch-data';
import { ProductContext } from "../context/ProductContext";
import Cart from "./Cart";

const menuItems =getProducts();

function NavBar() {
  const [showCart,setShowCart]=useState(false);
  // function closeCart(){
  //   setShowCart(false)
  // }
  const {setSelectedIndex}=useContext(ProductContext)
  const onSelect=(selectedIndex)=>{
    setSelectedIndex(selectedIndex)
  }

  return (
    <>
    <nav id="nav">
      <div className="navTop">
        <div className="navItem">
          <img src="/img/sneakers.png" alt="Sneakers Logo" />
        </div>
        <div className="navItem">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
            <img
              src="/img/search.png"
              width={20}
              height={20}
              alt="Search Icon"
            />
          </div>
        </div>
        <div className="navItem">
          <img src="/img/cart.png" alt="cartIcon" width={40} height={40} style={{backgroundColor:"white", cursor:"pointer"}} onClick={()=>setShowCart(!showCart)}/>
        </div>
      </div>

      <div id="navBottom">
        {menuItems.map((item, idx) => (
          <h3 className="menuItem" key={idx} onClick={()=>{onSelect(idx)}}>
            {item.title}
          </h3>
        ))}
      </div>
    </nav>
      {showCart &&(
        <div className="cart-container">
          <Cart closeCart={()=>setShowCart(false)}/>
        </div>
      )}
    </>

    
  );
}

export default NavBar;
