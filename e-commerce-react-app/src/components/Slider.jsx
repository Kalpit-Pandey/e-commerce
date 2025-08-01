import React from "react";
import getProducts from "../data/fetch-data";

const sliderItems = getProducts();

function Slider({selectedIndex}) {
  return (
    <div className="slider">
      <div className="sliderWrapper" style={{transform:`translateX(${-100*selectedIndex}vw)`}}>
        {sliderItems.map((item, idx) => (
          <div className="sliderItem" key={idx}>
            <img src={item.colors[0].img} alt={item.title} className="sliderImage" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              {item.title} <br />
              NEW <br />
              SEASON
            </h1>
            <h2 className="sliderPrice">${item.price}</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
