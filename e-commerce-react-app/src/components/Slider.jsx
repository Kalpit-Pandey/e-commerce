import React from "react";
const sliderItems = [
  { imgUrl: "/img/air.png", title: "AIR FORCE", price: "$129" },
  { imgUrl: "/img/jordan.png", title: "JORDAN", price: "$133" },
  { imgUrl: "/img/blazer.png", title: "BLAZER", price: "$134" },
  { imgUrl: "/img/crater.png", title: "CRATER", price: "$140" },
  { imgUrl: "/img/hippie.png", title: "HIPPIE", price: "$126" },
  { imgUrl: "/img/goldstar.png", title: "GOLDSTAR", price: "$12" },
];
function Slider() {
  return (
    <div className="slider">
      <div className="sliderWrapper">
        {sliderItems.map((item, idx) => (
          <div className="sliderItem" key={idx}>
            <img src={item.imgUrl} alt={item.title} className="sliderImage" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              {item.title} <br />
              NEW <br />
              SEASON
            </h1>
            <h2 className="sliderPrice">{item.price}</h2>
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
