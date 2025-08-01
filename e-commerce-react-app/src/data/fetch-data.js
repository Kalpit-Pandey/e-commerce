// import fs from "fs";
import products from "./product.json";
const getProducts = () => {
  //     fetch('https://example.com/data.json')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error fetching data:', error));
  
  return products
};
export default getProducts;