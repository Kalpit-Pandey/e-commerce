import React from "react";

const galleryItems = [
  {
    title: "Be Yourself",
    img: "https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    title: "This is the First Day of Your New Life",
    img: "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    title: "Just Do it!",
    img: "https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];
function Gallery() {
  return (
    <div className="gallery">
      {galleryItems.map((item, idx) => (
        <div className="galleryItem" key={idx}>
          {idx === 1 ? (
            <>
              <img src={item.img} alt={item.title} className="galleryImg" />
              <h1 className="galleryTitle">{item.title}</h1>
            </>
          ) : (
            <>
              <h1 className="galleryTitle">{item.title}</h1>
              <img src={item.img} alt={item.title} className="galleryImg" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
