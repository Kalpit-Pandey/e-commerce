import React, { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const ProductIndexProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ProductContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      {children}
    </ProductContext.Provider>
  );
};
