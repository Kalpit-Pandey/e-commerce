//dom elements
const main = document.getElementById("main");

const nav = document.createElement("nav");
nav.id = "nav";

const navTop = document.createElement("div");
navTop.className = "navTop";

const navItem1 = document.createElement("div");
navItem1.className = "navItem";

const logoImg = document.createElement("img");
logoImg.src = "./img/sneakers.png";
logoImg.alt = "Sneakers logo";

navItem1.appendChild(logoImg);
navTop.appendChild(navItem1);

const navItem2 = document.createElement("div");
navItem2.className = "navItem";
const search = document.createElement("div");
search.className = "search";

const inputSearch = document.createElement("input");
inputSearch.placeholder = "Search...";
inputSearch.className = "searchInput";
inputSearch.type = "text";

const searchImg = document.createElement("img");
searchImg.className = "searchIcon";
searchImg.src = "./img/search.png";
searchImg.style.width = "20px";
searchImg.style.height = "20px";

search.appendChild(inputSearch);
search.appendChild(searchImg);
navItem2.appendChild(search);
navTop.appendChild(navItem2);

const navItem3 = document.createElement("div");
navItem3.className = "navItem";
const limitedOffer = document.createElement("span");
limitedOffer.className = "limitedOffer";
limitedOffer.textContent = "Limited Offer!!!";

navItem3.appendChild(limitedOffer);
navTop.appendChild(navItem3);

nav.appendChild(navTop);

//navBottom
const navBottom = document.createElement("div");
navBottom.className = "navBottom";

const menuItem1 = document.createElement("h3");
menuItem1.className = "menuItem";
menuItem1.textContent = "AIR FORCE";
navBottom.appendChild(menuItem1);

const menuItem2 = document.createElement("h3");
menuItem2.className = "menuItem";
menuItem2.textContent = "JORDAN";
navBottom.appendChild(menuItem2);

const menuItem3 = document.createElement("h3");
menuItem3.className = "menuItem";
menuItem3.textContent = "BLAZER";
navBottom.appendChild(menuItem3);

const menuItem4 = document.createElement("h3");
menuItem4.className = "menuItem";
menuItem4.textContent = "CRATER";
navBottom.appendChild(menuItem4);

const menuItem5 = document.createElement("h3");
menuItem5.className = "menuItem";
menuItem5.textContent = "HIPPIE";
navBottom.appendChild(menuItem5);

nav.appendChild(navBottom);
main.appendChild(nav);

const slider = document.createElement("div");
slider.className = "slider";
main.appendChild(slider);

const sliderWrapper = document.createElement("div");
sliderWrapper.className = "sliderWrapper";
slider.appendChild(sliderWrapper);

function createSliderItem(imgUrl, Name, Price) {
  const sliderItem = document.createElement("div");
  sliderItem.className = "sliderItem";

  const sliderImage = document.createElement("img");
  sliderImage.className = "sliderImage";
  sliderImage.src = imgUrl;
  sliderItem.appendChild(sliderImage);

  const sliderBg = document.createElement("div");
  sliderBg.className = "sliderBg";
  sliderItem.appendChild(sliderBg);

  const sliderTitle = document.createElement("h1");
  sliderTitle.className = "sliderTitle";
  sliderTitle.innerHTML = `${Name}<br> NEW <br> SEASON`;
  sliderItem.appendChild(sliderTitle);

  const sliderPrice = document.createElement("h2");
  sliderPrice.className = "sliderPrice";
  sliderPrice.textContent = Price;
  sliderItem.appendChild(sliderPrice);

  const a = document.createElement("a");
  a.href = "#product";

  const buyButton = document.createElement("button");
  buyButton.className = "buyButton";
  buyButton.textContent = "BUY NOW";
  a.appendChild(buyButton);

  sliderItem.appendChild(a);

  return sliderItem;
}

sliderWrapper.appendChild(
  createSliderItem("./img/air.png", "AIR FORCE", "$129")
);
sliderWrapper.appendChild(
  createSliderItem("./img/jordan.png", "JORDAN", "$123")
);
sliderWrapper.appendChild(
  createSliderItem("./img/blazer.png", "BLAZER", "$123")
);
sliderWrapper.appendChild(
  createSliderItem("./img/crater.png", "CRATER", "$123")
);
sliderWrapper.appendChild(
  createSliderItem("./img/hippie.png", "HIPPIE", "$123")
);

const features = document.createElement("div");
features.className = "features";

main.appendChild(features);

function createFeature(imgUrl, title, desc) {
  const feature = document.createElement("div");
  feature.className = "feature";

  const featureImg = document.createElement("img");
  featureImg.className = "featureImg";
  featureImg.src = imgUrl;
  feature.appendChild(featureImg);

  const featureTitle = document.createElement("span");
  featureTitle.className = "featureTitle";
  featureTitle.textContent = title;
  feature.appendChild(featureTitle);

  const featureDesc = document.createElement("span");
  featureDesc.className = "featureDesc";
  featureDesc.textContent = desc;
  feature.appendChild(featureDesc);

  return feature;
}

features.appendChild(
  createFeature(
    "./img/shipping.png",
    "FREE SHIPPING",
    "Free worldwide shipping on all orders."
  )
);
features.appendChild(
  createFeature(
    "./img/return.png",
    "30 DAYS RETURN",
    "No question return and easy refund in 14 days."
  )
);
features.appendChild(
  createFeature(
    "./img/gift.png",
    "GIFT CARDS",
    "Buy gift cards and use coupon codes easily."
  )
);
features.appendChild(
  createFeature(
    "./img/contact.png",
    "CONTACT US",
    "Keep in touch via email and support system."
  )
);

const product = document.createElement("div");
product.className = "product";
product.id = "product";
main.appendChild(product);

const productImg = document.createElement("img");
productImg.className = "productImg";
productImg.src = "./img/air.png";
product.appendChild(productImg);

//productDetails
const productDetails = document.createElement("div");
productDetails.className = "productDetails";
product.appendChild(productDetails);

const productTitle = document.createElement("h1");
productTitle.className = "productTitle";
productTitle.textContent = "AIR FORCE";
productDetails.appendChild(productTitle);

const productPrice = document.createElement("h2");
productPrice.className = "productPrice";
productPrice.textContent = "$129";
productDetails.appendChild(productPrice);

const productDesc = document.createElement("p");
productDesc.className = "productDesc";
productDesc.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est eius consectetur reprehenderit quam, unde qui illum, rem explicabo eum sed quae omnis optio consequuntur. Commodi sunt fugit quod. Doloremque.";
productDetails.appendChild(productDesc);

const colors = document.createElement("div");
colors.className = "colors";
productDetails.appendChild(colors);

const color1 = document.createElement("div");
color1.className = "color";
colors.appendChild(color1);

const color2 = document.createElement("div");
color2.className = "color";
colors.appendChild(color2);

const sizes = document.createElement("div");
sizes.className = "sizes";
productDetails.appendChild(sizes);

const size1 = document.createElement("div");
size1.className = "size";
size1.textContent = "42";
sizes.appendChild(size1);

const size2 = document.createElement("div");
size2.className = "size";
size2.textContent = "43";
sizes.appendChild(size2);

const size3 = document.createElement("div");
size3.className = "size";
size3.textContent = "44";
sizes.appendChild(size3);

const productButton = document.createElement("button");
productButton.className = "productButton";
productButton.textContent = "BUY NOW";
productDetails.appendChild(productButton);

//payment
const payment = document.createElement("div");
payment.className = "payment";
main.appendChild(payment);

const payTitle = document.createElement("h1");
payTitle.className = "payTitle";
payTitle.textContent = "Personal Information";
payment.appendChild(payTitle);

const fName = document.createElement("label");
fName.textContent = "Full Name";
payment.appendChild(fName);

const fullName = document.createElement("input");
fullName.className = "payInput";
fullName.type = "text";
fullName.placeholder = "John Doe";
payment.appendChild(fullName);

const phoneNo = document.createElement("label");
phoneNo.textContent = "Phone Number";
payment.appendChild(phoneNo);

const pn = document.createElement("input");
pn.className = "payInput";
pn.type = "text";
pn.placeholder = "+1 234 5678";
payment.appendChild(pn);

const address = document.createElement("label");
address.textContent = "Address";
payment.appendChild(address);

const addr = document.createElement("input");
addr.className = "payInput";
addr.type = "text";
addr.placeholder = "Elton St 21 22-145";
payment.appendChild(addr);

const card = document.createElement("h1");
card.className = "payTitle";
card.textContent = "Card Information";
payment.appendChild(card);

const cardIcons = document.createElement("div");
cardIcons.className = "cardIcons";
payment.appendChild(cardIcons);

const visa = document.createElement("img");
visa.className = "cardIcon";
visa.src = "./img/visa.png";
visa.style.width = "40px";
cardIcons.appendChild(visa);

const master = document.createElement("img");
master.className = "cardIcon";
master.src = "./img/master.png";
master.style.width = "40px";
cardIcons.appendChild(master);

const pass = document.createElement("input");
pass.className = "payInput";
pass.placeholder = "Card Number";
pass.type = "password";
payment.appendChild(pass);

const cardInfo = document.createElement("div");
cardInfo.className = "cardInfo";
payment.appendChild(cardInfo);

const month = document.createElement("input");
month.className = "payInput sm";
month.type = "text";
month.placeholder = "mm";
cardInfo.appendChild(month);

const year = document.createElement("input");
year.className = "payInput sm";
year.type = "text";
year.placeholder = "yyyy";
cardInfo.appendChild(year);

const cvv = document.createElement("input");
cvv.className = "payInput sm";
cvv.type = "text";
cvv.placeholder = "cvv";
cardInfo.appendChild(cvv);

const payButton = document.createElement("button");
payButton.className = "payButton";
payButton.textContent = "Checkout!";
payment.appendChild(payButton);

const close = document.createElement("span");
close.className = "close";
close.textContent = "X";
payment.appendChild(close);

//gallery
const gallery = document.createElement("div");
gallery.className = "gallery";
main.appendChild(gallery);

//gallery item1
const galleryItem1 = document.createElement("div");
galleryItem1.className = "galleryItem";
gallery.appendChild(galleryItem1);

const galleryTitle1 = document.createElement("h1");
galleryTitle1.className = "galleryTitle";
galleryTitle1.textContent = "Be Yourself";
galleryItem1.appendChild(galleryTitle1);

const galleryImg1 = document.createElement("img");
galleryImg1.className = "galleryImg";
galleryImg1.src =
  "https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem1.appendChild(galleryImg1);

//gallery item 2
const galleryItem2 = document.createElement("div");
galleryItem2.className = "galleryItem";
gallery.appendChild(galleryItem2);

const galleryImg2 = document.createElement("img");
galleryImg2.className = "galleryImg";
galleryImg2.src =
  "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem2.appendChild(galleryImg2);

const galleryTitle2 = document.createElement("h1");
galleryTitle2.className = "galleryTitle";
galleryTitle2.textContent = "This is the First Day of Your New Life";
galleryItem2.appendChild(galleryTitle2);

//gallery item 3
const galleryItem3 = document.createElement("div");
galleryItem3.className = "galleryItem";
gallery.appendChild(galleryItem3);

const galleryTitle3 = document.createElement("h1");
galleryTitle3.className = "galleryTitle";
galleryTitle3.textContent = "Just Do it!";
galleryItem3.appendChild(galleryTitle3);

const galleryImg3 = document.createElement("img");
galleryImg3.className = "galleryImg";
galleryImg3.src =
  "https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem3.appendChild(galleryImg3);

//new season
const newSeason = document.createElement("div");
newSeason.className = "newSeason";
main.appendChild(newSeason);

//nsItem1
const nsItem1 = document.createElement("div");
nsItem1.className = "nsItem";
newSeason.appendChild(nsItem1);

const nsImg1 = document.createElement("img");
nsImg1.className = "nsImg";
nsImg1.src =
  "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
nsItem1.appendChild(nsImg1);

//nsItem2
const nsItem2 = document.createElement("div");
nsItem2.className = "nsItem";
newSeason.appendChild(nsItem2);

const nsTitleSm = document.createElement("h3");
nsTitleSm.className = "nsTitleSm";
nsTitleSm.textContent = "WINTER NEW ARRIVALS";
nsItem2.appendChild(nsTitleSm);

const nSeason = document.createElement("h1");
nSeason.className = "nsTitle";
nSeason.textContent = "New Season";
nsItem2.appendChild(nSeason);

const nCollection = document.createElement("h1");
nCollection.className = "nsTitle";
nCollection.textContent = "New Collection";
nsItem2.appendChild(nCollection);

const aNewSeason=document.createElement('a')
aNewSeason.href='#nav'
nsItem2.appendChild(aNewSeason)

const nsButton=document.createElement('button')
nsButton.className='nsButton'
nsButton.textContent="CHOOSE YOUR STYLE"
aNewSeason.appendChild(nsButton)

//nsItem3
const nsItem3 = document.createElement("div");
nsItem3.className = "nsItem";
newSeason.appendChild(nsItem3);

const nsImg3 = document.createElement("img");
nsImg3.className = "nsImg";
nsImg3.src =
  "https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
nsItem3.appendChild(nsImg3);

//footer
const footer = document.createElement("footer");
main.appendChild(footer);

//footer left
const footerLeft = document.createElement("div");
footerLeft.className = "footerLeft";
footer.appendChild(footerLeft);

//footer menu 1
const footerMenu1 = document.createElement("div");
footerMenu1.className = "footerMenu";
footerLeft.appendChild(footerMenu1);

const fMenuTitle1 = document.createElement("h1");
fMenuTitle1.className = "fMenuTitle";
fMenuTitle1.textContent = "About Us";
footerMenu1.appendChild(fMenuTitle1);

const fList1 = document.createElement("ul");
fList1.className = "fList";
footerMenu1.appendChild(fList1);

let fListItems1 = ["Company", "Contact", "Careers", "Affiliates", "Stores"];
fListItems1.forEach((element) => {
  const fListItem1 = document.createElement("li");
  fListItem1.className = "fListItem";
  fListItem1.textContent = element;
  fList1.appendChild(fListItem1);
});

//footer menu2
const footerMenu2 = document.createElement("div");
footerMenu2.className = "footerMenu";
footerLeft.appendChild(footerMenu2);

const fMenuTitle2 = document.createElement("h1");
fMenuTitle2.className = "fMenuTitle";
fMenuTitle2.textContent = "Useful Links";
footerMenu2.appendChild(fMenuTitle2);

const fList2 = document.createElement("ul");
fList2.className = "fList";
footerMenu2.appendChild(fList2);

let fListItems2 = ["Support", "Refund", "FAQ", "Feedback", "Stories"];
fListItems2.forEach((element) => {
  const fListItem2 = document.createElement("li");
  fListItem2.className = "fListItem";
  fListItem2.textContent = element;
  fList2.appendChild(fListItem2);
});

//footer menu3
const footerMenu3 = document.createElement("div");
footerMenu3.className = "footerMenu";
footerLeft.appendChild(footerMenu3);

const fMenuTitle3 = document.createElement("h1");
fMenuTitle3.className = "fMenuTitle";
fMenuTitle3.textContent = "Products";
footerMenu3.appendChild(fMenuTitle3);

const fList3 = document.createElement("ul");
fList3.className = "fList";
footerMenu3.appendChild(fList3);

let fListItems3 = ["Air Force", "Air Jordan", "Blazer", "Crater", "Hippie"];
fListItems3.forEach((element) => {
  const fListItem3 = document.createElement("li");
  fListItem3.className = "fListItem";
  fListItem3.textContent = element;
  fList3.appendChild(fListItem3);
});

//footer right
const footerRight = document.createElement("div");
footerRight.className = "footerRight";
footer.appendChild(footerRight);

const footerRightMenu1 = document.createElement("div");
footerRightMenu1.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu1);

const fRMenuTitle1 = document.createElement("h1");
fRMenuTitle1.className = "fMenuTitle";
fRMenuTitle1.textContent = "Subscribe to our news letter";
footerRightMenu1.appendChild(fRMenuTitle1);

const fMail = document.createElement("div");
footerRightMenu1.appendChild(fMail);

const fInput = document.createElement("input");
fInput.className = "fInput";
fInput.type = "mail";
fInput.placeholder = "your@email.com";
fMail.appendChild(fInput);

const fButton = document.createElement("button");
fButton.className = "fButton";
fButton.textContent = "Join!";
fMail.appendChild(fButton);

//footer right menu2
const footerRightMenu2 = document.createElement("div");
footerRightMenu2.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu2);

const fRMenuTitle2 = document.createElement("h1");
fRMenuTitle2.className = "fMenuTitle";
fRMenuTitle2.textContent = "Follow Us";
footerRightMenu2.appendChild(fRMenuTitle2);

const fIcons = document.createElement("div");
fIcons.className = "fIcons";
footerRightMenu2.appendChild(fIcons);

let icons = [
  "./img/facebook.png",
  "./img/twitter.png",
  "./img/instagram.png",
  "./img/whatsapp.png",
];
icons.forEach((element) => {
  const fIcon = document.createElement("img");
  fIcon.className = "fIcon";
  fIcon.src = element;

  fIcons.appendChild(fIcon);
});

//footer right menu 3
const footerRightMenu3 = document.createElement("div");
footerRightMenu3.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu3);

const copyright = document.createElement("span");
copyright.className = "copyright";
copyright.textContent = "@Nike Store. All rights reserved. 2025";
footerRightMenu3.appendChild(copyright);


//old script logic
const wrapperLogic=document.querySelector(".sliderWrapper");
const menuItemsLogic=document.querySelectorAll(".menuItem");

const productsList = [
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
  ];

  let choosenProduct = productsList[0]
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  

menuItemsLogic.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapperLogic.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = productsList[index];

        //change texts of currentProduct
        currentProductTitle.textContent= choosenProduct.title;
        currentProductPrice.textContent= "$"+choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;

        });

    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });


  const productButtonLogic = document.querySelector(".productButton");
  const paymentLogic = document.querySelector(".payment");
  const closeLogic = document.querySelector(".close");
  
  productButtonLogic.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  closeLogic.addEventListener("click", () => {
    payment.style.display = "none";
  });