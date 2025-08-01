import React from "react";
import { useState } from "react";
import getProducts from '../data/fetch-data';

const menuItems =getProducts();

function NavBar({onSelect}) {

  return (
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
          <span className="limitedOffer">Limited Offer!!!</span>
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
  );
}

export default NavBar;
