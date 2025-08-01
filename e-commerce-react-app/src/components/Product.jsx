import React, { useState } from "react";
import getProducts from "../data/fetch-data";
import Payment from "./Payment";

const productList=getProducts()
function Product({selectedIndex}) {
    
    // const productIndex = 0;
    const item = productList[selectedIndex];

    // if(!item){
    //   return <div>Loading product....</div>
    // }

    const [selectedSize,setSelectedSize]=useState(null);
    const [selectedColor,setSelectedColor]=useState(0);
    const [showPayment,setShowPayment]=useState(false);

    const size=[42,43,44];
    
  return (
    <>
        <div className="product" id="product" >
          <img src={item.colors[selectedColor].img} alt={item.title} className="productImg" />
          <div className="productDetails">
            <h1 className="productTitle">{item.title}</h1>
            <h2 className="productPrice">${item.price}</h2>
            <p className="productDesc">
              {item.description ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio saepe exercitationem neque asperiores impedit nesciunt placeat architecto rem voluptatibus repudiandae eaque quod, illum voluptas molestias aliquam earum, voluptate odit. Odio."}
            </p>

            <div className="colors">
              {item.colors.map((color,cidx)=>(
                <div className="color" key={cidx} style={{backgroundColor:color.code}} onClick={()=>{setSelectedColor(cidx)}}></div>
              ))}
            </div>
            <div className="sizes">
              {size.map(((sizeVal,idx)=>(
                <div key={idx} className="size" onClick={()=>{setSelectedSize(sizeVal)}}
                  style={{backgroundColor: selectedSize === sizeVal ? "black" : "white",color: selectedSize === sizeVal ? "white" : "black",}}>{sizeVal} </div>
              )))}

            </div>
            <button className="productButton" onClick={()=>setShowPayment(true)}>BUY NOW</button>
          </div>
        </div>
        {showPayment && <Payment onClose={()=>setShowPayment(false)}/>}
    </>
  );
}

export default Product;
