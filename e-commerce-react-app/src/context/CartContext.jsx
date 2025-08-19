import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => 
    prev
    .map((item) => {
        if(item.id === productId)
          if(item.quantity > 1)
            return { ...item, quantity: item.quantity - 1 }
            else return null
        else return item;
      }).filter((item) => item !== null)
    )
  };

  const removeItem=(id)=>{
    setCart((prev)=>prev.filter((item)=>item.id!==id))
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const totalQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        totalPrice,
        totalQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
