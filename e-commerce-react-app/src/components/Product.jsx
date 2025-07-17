import React from "react";
const productList = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Goldstar",
    price: 12,
    colors: [
      {
        code: "white",
        img: "/img/goldstar.png",
      },
    ],
    description:
      "Step into comfort, durability, and iconic Nepali style with Goldstar Shoes – the footwear trusted for generations across the country. Whether you're navigating the busy streets of Kathmandu, trekking hillside trails, or walking to school or work, Goldstar shoes deliver unmatched reliability and everyday comfort.",
  },
];
function Product() {
    
    const productIndex = 0;
    const item = productList[productIndex];

  return (
    <>
        <div className="product" id="product" >
          <img src={item.colors[0].img} alt={item.title} className="productImg" />
          <div className="productDetails">
            <h1 className="productTitle">{item.title}</h1>
            <h2 className="productPrice">${item.price}</h2>
            <p className="productDesc">
              {item.description ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio saepe exercitationem neque asperiores impedit nesciunt placeat architecto rem voluptatibus repudiandae eaque quod, illum voluptas molestias aliquam earum, voluptate odit. Odio."}
            </p>

            <div className="colors">
              {item.colors.map((color,cidx)=>(
                <div className="color"key={cidx} style={{backgroundColor:color.code}}></div>
              ))}
            </div>
            <div className="sizes">
              <div className="size">42</div>
              <div className="size">43</div>
              <div className="size">44</div>
            </div>
            <button className="productButton">BUY NOW</button>
          </div>
        </div>
    </>
  );
}

export default Product;
