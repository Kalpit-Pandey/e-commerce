import { productsList } from "./script.js";
import React from "react";
import { createRoot } from "react-dom/client";

const menuItems = [
  "AIR FORCE",
  "JORDAN",
  "BLAZER",
  "CRATER",
  "HIPPIE",
  "GOLDSTAR",
];

const menuItemElements = menuItems.map((text, index) =>
  React.createElement("h3", { className: "menuItem", key: index }, text)
);

const container = document.getElementById("navBottom");
if (!container) {
  console.error("NavBottom not found");
} else {
  const root = createRoot(container);
  root.render(React.createElement(React.Fragment, null, ...menuItemElements));

  setTimeout(() => {
    console.log("React rendered");

    var wrapperLogic = document.querySelector(".sliderWrapper");
    var menuItemsLogic = document.querySelectorAll(".menuItem");
    var chosenProduct = productsList[0];
    var currentProductImg = document.querySelector(".productImg");
    var currentProductTitle = document.querySelector(".productTitle");
    var currentProductPrice = document.querySelector(".productPrice");
    var currentProductColors = document.querySelectorAll(".color");
    var currentProductSizes = document.querySelectorAll(".size");
    var currentProductDesc = document.querySelector(".productDesc");
    menuItemsLogic.forEach(function (item, index) {
      item.addEventListener("click", function () {
        //change the current slide
        wrapperLogic.style.transform = "translateX(".concat(
          -100 * index,
          "vw)"
        );
        //change the chosen product
        chosenProduct = productsList[index];
        //default description
        var defaultDesc =
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est eius consectetur reprehenderit quam, unde qui illum, rem explicabo eum sed quae omnis optio consequuntur. Commodi sunt fugit quod. Doloremque.";
        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;
        currentProductDesc.textContent =
          chosenProduct.description || defaultDesc;
        // assign new colors
        currentProductColors.forEach(function (color, index) {
          color.style.backgroundColor = chosenProduct.colors[index].code;
        });
      });
    });
    currentProductColors.forEach(function (color, index) {
      color.addEventListener("click", function () {
        currentProductImg.src = chosenProduct.colors[index].img;
      });
    });
    currentProductSizes.forEach(function (size, index) {
      size.addEventListener("click", function () {
        currentProductSizes.forEach(function (size) {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
    });
  }, 0);
}
