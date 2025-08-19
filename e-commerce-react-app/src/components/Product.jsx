import React, { useContext, useState } from "react";
import getProducts from "../data/fetch-data";
// import Payment from "./Payment";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const productList=getProducts()
function Product() {
    const {addToCart} = useContext(CartContext)
    
    const {selectedIndex}=useContext(ProductContext);

    const item = productList[selectedIndex];

    const [selectedSize,setSelectedSize]=useState(null);
    const [selectedColor,setSelectedColor]=useState(0);

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
            <button className="productButton" onClick={()=>{
              if(!selectedSize){
                alert("Please select a size.");
                return;
              }
              const itemToAdd={
                ...item,
                size:selectedSize,
                color:item.colors[selectedColor].code
              }
              addToCart(itemToAdd);
              {alert(itemToAdd.title+" is added to cart")}
            }}>Add To Cart</button>
          </div>
        </div>
        
    </>
  );
}

export default Product;
