import { productsList, sliderLogic } from "./script.js";
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
//   setTimeout(() => {
//     console.log("React rendered");
//     sliderLogic();
//   }, 0);

requestAnimationFrame(()=>{
    sliderLogic();
});
}
