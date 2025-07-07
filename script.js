//dom elements
var main = document.getElementById("main");
var nav = document.createElement("nav");
nav.id = "nav";
var navTop = document.createElement("div");
navTop.className = "navTop";
var navItem1 = document.createElement("div");
navItem1.className = "navItem";
var logoImg = document.createElement("img");
logoImg.src = "./img/sneakers.png";
logoImg.alt = "Sneakers logo";
navItem1.appendChild(logoImg);
navTop.appendChild(navItem1);
var navItem2 = document.createElement("div");
navItem2.className = "navItem";
var search = document.createElement("div");
search.className = "search";
var inputSearch = document.createElement("input");
inputSearch.placeholder = "Search...";
inputSearch.className = "searchInput";
inputSearch.type = "text";
var searchImg = document.createElement("img");
searchImg.className = "searchIcon";
searchImg.src = "./img/search.png";
searchImg.style.width = "20px";
searchImg.style.height = "20px";
search.appendChild(inputSearch);
search.appendChild(searchImg);
navItem2.appendChild(search);
navTop.appendChild(navItem2);
var navItem3 = document.createElement("div");
navItem3.className = "navItem";
var limitedOffer = document.createElement("span");
limitedOffer.className = "limitedOffer";
limitedOffer.textContent = "Limited Offer!!!";
navItem3.appendChild(limitedOffer);
navTop.appendChild(navItem3);
nav.appendChild(navTop);
//navBottom
var navBottom = document.createElement("div");
navBottom.className = "navBottom";
var menuItems = [
    "AIR FORCE",
    "JORDAN",
    "BLAZER",
    "CRATER",
    "HIPPIE",
    "GOLDSTAR"
];
menuItems.forEach(function (text) {
    var menuItem = document.createElement("h3");
    menuItem.className = "menuItem";
    menuItem.textContent = text;
    navBottom.appendChild(menuItem);
});
nav.appendChild(navBottom);
main.appendChild(nav);
var slider = document.createElement("div");
slider.className = "slider";
main.appendChild(slider);
var sliderWrapper = document.createElement("div");
sliderWrapper.className = "sliderWrapper";
slider.appendChild(sliderWrapper);
function createSliderItem(imgUrl, Name, Price) {
    var sliderItem = document.createElement("div");
    sliderItem.className = "sliderItem";
    var sliderImage = document.createElement("img");
    sliderImage.className = "sliderImage";
    sliderImage.src = imgUrl;
    sliderItem.appendChild(sliderImage);
    var sliderBg = document.createElement("div");
    sliderBg.className = "sliderBg";
    sliderItem.appendChild(sliderBg);
    var sliderTitle = document.createElement("h1");
    sliderTitle.className = "sliderTitle";
    sliderTitle.innerHTML = "".concat(Name, "<br> NEW <br> SEASON");
    sliderItem.appendChild(sliderTitle);
    var sliderPrice = document.createElement("h2");
    sliderPrice.className = "sliderPrice";
    sliderPrice.textContent = Price;
    sliderItem.appendChild(sliderPrice);
    var a = document.createElement("a");
    a.href = "#product";
    var buyButton = document.createElement("button");
    buyButton.className = "buyButton";
    buyButton.textContent = "BUY NOW";
    a.appendChild(buyButton);
    sliderItem.appendChild(a);
    return sliderItem;
}
sliderWrapper.appendChild(createSliderItem("./img/air.png", "AIR FORCE", "$129"));
sliderWrapper.appendChild(createSliderItem("./img/jordan.png", "JORDAN", "$133"));
sliderWrapper.appendChild(createSliderItem("./img/blazer.png", "BLAZER", "$134"));
sliderWrapper.appendChild(createSliderItem("./img/crater.png", "CRATER", "$140"));
sliderWrapper.appendChild(createSliderItem("./img/hippie.png", "HIPPIE", "$126"));
sliderWrapper.appendChild(createSliderItem("./img/goldstar.png", "GOLDSTAR", "$12"));
var features = document.createElement("div");
features.className = "features";
main.appendChild(features);
function createFeature(imgUrl, title, desc) {
    var feature = document.createElement("div");
    feature.className = "feature";
    var featureImg = document.createElement("img");
    featureImg.className = "featureImg";
    featureImg.src = imgUrl;
    feature.appendChild(featureImg);
    var featureTitle = document.createElement("span");
    featureTitle.className = "featureTitle";
    featureTitle.textContent = title;
    feature.appendChild(featureTitle);
    var featureDesc = document.createElement("span");
    featureDesc.className = "featureDesc";
    featureDesc.textContent = desc;
    feature.appendChild(featureDesc);
    return feature;
}
features.appendChild(createFeature("./img/shipping.png", "FREE SHIPPING", "Free worldwide shipping on all orders."));
features.appendChild(createFeature("./img/return.png", "30 DAYS RETURN", "No question return and easy refund in 14 days."));
features.appendChild(createFeature("./img/gift.png", "GIFT CARDS", "Buy gift cards and use coupon codes easily."));
features.appendChild(createFeature("./img/contact.png", "CONTACT US", "Keep in touch via email and support system."));
var product = document.createElement("div");
product.className = "product";
product.id = "product";
main.appendChild(product);
var productImg = document.createElement("img");
productImg.className = "productImg";
productImg.src = "./img/air.png";
product.appendChild(productImg);
//productDetails
var productDetails = document.createElement("div");
productDetails.className = "productDetails";
product.appendChild(productDetails);
var productTitle = document.createElement("h1");
productTitle.className = "productTitle";
productTitle.textContent = "AIR FORCE";
productDetails.appendChild(productTitle);
var productPrice = document.createElement("h2");
productPrice.className = "productPrice";
productPrice.textContent = "$129";
productDetails.appendChild(productPrice);
var productDesc = document.createElement("p");
productDesc.className = "productDesc";
productDesc.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est eius consectetur reprehenderit quam, unde qui illum, rem explicabo eum sed quae omnis optio consequuntur. Commodi sunt fugit quod. Doloremque.";
productDetails.appendChild(productDesc);
var colors = document.createElement("div");
colors.className = "colors";
productDetails.appendChild(colors);
var color1 = document.createElement("div");
color1.className = "color";
colors.appendChild(color1);
var color2 = document.createElement("div");
color2.className = "color";
colors.appendChild(color2);
var sizes = document.createElement("div");
sizes.className = "sizes";
productDetails.appendChild(sizes);
var size1 = document.createElement("div");
size1.className = "size";
size1.textContent = "42";
sizes.appendChild(size1);
var size2 = document.createElement("div");
size2.className = "size";
size2.textContent = "43";
sizes.appendChild(size2);
var size3 = document.createElement("div");
size3.className = "size";
size3.textContent = "44";
sizes.appendChild(size3);
var productButton = document.createElement("button");
productButton.className = "productButton";
productButton.textContent = "BUY NOW";
productDetails.appendChild(productButton);
//payment
var payment = document.createElement("div");
payment.className = "payment";
main.appendChild(payment);
var payTitle = document.createElement("h1");
payTitle.className = "payTitle";
payTitle.textContent = "Personal Information";
payment.appendChild(payTitle);
var fName = document.createElement("label");
fName.textContent = "Full Name";
payment.appendChild(fName);
var fullName = document.createElement("input");
fullName.className = "payInput";
fullName.type = "text";
fullName.placeholder = "John Doe";
payment.appendChild(fullName);
var phoneNo = document.createElement("label");
phoneNo.textContent = "Phone Number";
payment.appendChild(phoneNo);
var pn = document.createElement("input");
pn.className = "payInput";
pn.type = "text";
pn.placeholder = "+1 234 5678";
payment.appendChild(pn);
var address = document.createElement("label");
address.textContent = "Address";
payment.appendChild(address);
var addr = document.createElement("input");
addr.className = "payInput";
addr.type = "text";
addr.placeholder = "Elton St 21 22-145";
payment.appendChild(addr);
var card = document.createElement("h1");
card.className = "payTitle";
card.textContent = "Card Information";
payment.appendChild(card);
var cardIcons = document.createElement("div");
cardIcons.className = "cardIcons";
payment.appendChild(cardIcons);
var visa = document.createElement("img");
visa.className = "cardIcon";
visa.src = "./img/visa.png";
visa.style.width = "40px";
cardIcons.appendChild(visa);
var master = document.createElement("img");
master.className = "cardIcon";
master.src = "./img/master.png";
master.style.width = "40px";
cardIcons.appendChild(master);
var pass = document.createElement("input");
pass.className = "payInput";
pass.placeholder = "Card Number";
pass.type = "password";
payment.appendChild(pass);
var cardInfo = document.createElement("div");
cardInfo.className = "cardInfo";
payment.appendChild(cardInfo);
var month = document.createElement("input");
month.className = "payInput sm";
month.type = "text";
month.placeholder = "mm";
cardInfo.appendChild(month);
var year = document.createElement("input");
year.className = "payInput sm";
year.type = "text";
year.placeholder = "yyyy";
cardInfo.appendChild(year);
var cvv = document.createElement("input");
cvv.className = "payInput sm";
cvv.type = "text";
cvv.placeholder = "cvv";
cardInfo.appendChild(cvv);
var payButton = document.createElement("button");
payButton.className = "payButton";
payButton.textContent = "Checkout!";
payment.appendChild(payButton);
var closeButton = document.createElement("span");
closeButton.className = "close";
closeButton.textContent = "X";
payment.appendChild(closeButton);
//gallery
var gallery = document.createElement("div");
gallery.className = "gallery";
main.appendChild(gallery);
//gallery item1
var galleryItem1 = document.createElement("div");
galleryItem1.className = "galleryItem";
gallery.appendChild(galleryItem1);
var galleryTitle1 = document.createElement("h1");
galleryTitle1.className = "galleryTitle";
galleryTitle1.textContent = "Be Yourself";
galleryItem1.appendChild(galleryTitle1);
var galleryImg1 = document.createElement("img");
galleryImg1.className = "galleryImg";
galleryImg1.src =
    "https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem1.appendChild(galleryImg1);
//gallery item 2
var galleryItem2 = document.createElement("div");
galleryItem2.className = "galleryItem";
gallery.appendChild(galleryItem2);
var galleryImg2 = document.createElement("img");
galleryImg2.className = "galleryImg";
galleryImg2.src =
    "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem2.appendChild(galleryImg2);
var galleryTitle2 = document.createElement("h1");
galleryTitle2.className = "galleryTitle";
galleryTitle2.textContent = "This is the First Day of Your New Life";
galleryItem2.appendChild(galleryTitle2);
//gallery item 3
var galleryItem3 = document.createElement("div");
galleryItem3.className = "galleryItem";
gallery.appendChild(galleryItem3);
var galleryTitle3 = document.createElement("h1");
galleryTitle3.className = "galleryTitle";
galleryTitle3.textContent = "Just Do it!";
galleryItem3.appendChild(galleryTitle3);
var galleryImg3 = document.createElement("img");
galleryImg3.className = "galleryImg";
galleryImg3.src =
    "https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
galleryItem3.appendChild(galleryImg3);
//new season
var newSeason = document.createElement("div");
newSeason.className = "newSeason";
main.appendChild(newSeason);
//nsItem1
var nsItem1 = document.createElement("div");
nsItem1.className = "nsItem";
newSeason.appendChild(nsItem1);
var nsImg1 = document.createElement("img");
nsImg1.className = "nsImg";
nsImg1.src =
    "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
nsItem1.appendChild(nsImg1);
//nsItem2
var nsItem2 = document.createElement("div");
nsItem2.className = "nsItem";
newSeason.appendChild(nsItem2);
var nsTitleSm = document.createElement("h3");
nsTitleSm.className = "nsTitleSm";
nsTitleSm.textContent = "WINTER NEW ARRIVALS";
nsItem2.appendChild(nsTitleSm);
var nSeason = document.createElement("h1");
nSeason.className = "nsTitle";
nSeason.textContent = "New Season";
nsItem2.appendChild(nSeason);
var nCollection = document.createElement("h1");
nCollection.className = "nsTitle";
nCollection.textContent = "New Collection";
nsItem2.appendChild(nCollection);
var aNewSeason = document.createElement("a");
aNewSeason.href = "#nav";
nsItem2.appendChild(aNewSeason);
var nsButton = document.createElement("button");
nsButton.className = "nsButton";
nsButton.textContent = "CHOOSE YOUR STYLE";
aNewSeason.appendChild(nsButton);
//nsItem3
var nsItem3 = document.createElement("div");
nsItem3.className = "nsItem";
newSeason.appendChild(nsItem3);
var nsImg3 = document.createElement("img");
nsImg3.className = "nsImg";
nsImg3.src =
    "https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
nsItem3.appendChild(nsImg3);
//footer
var footer = document.createElement("footer");
main.appendChild(footer);
//footer left
var footerLeft = document.createElement("div");
footerLeft.className = "footerLeft";
footer.appendChild(footerLeft);
//footer menu 1
var footerMenu1 = document.createElement("div");
footerMenu1.className = "footerMenu";
footerLeft.appendChild(footerMenu1);
var fMenuTitle1 = document.createElement("h1");
fMenuTitle1.className = "fMenuTitle";
fMenuTitle1.textContent = "About Us";
footerMenu1.appendChild(fMenuTitle1);
var fList1 = document.createElement("ul");
fList1.className = "fList";
footerMenu1.appendChild(fList1);
var fListItems1 = ["Company", "Contact", "Careers", "Affiliates", "Stores"];
fListItems1.forEach(function (element) {
    var fListItem1 = document.createElement("li");
    fListItem1.className = "fListItem";
    fListItem1.textContent = element;
    fList1.appendChild(fListItem1);
});
//footer menu2
var footerMenu2 = document.createElement("div");
footerMenu2.className = "footerMenu";
footerLeft.appendChild(footerMenu2);
var fMenuTitle2 = document.createElement("h1");
fMenuTitle2.className = "fMenuTitle";
fMenuTitle2.textContent = "Useful Links";
footerMenu2.appendChild(fMenuTitle2);
var fList2 = document.createElement("ul");
fList2.className = "fList";
footerMenu2.appendChild(fList2);
var fListItems2 = ["Support", "Refund", "FAQ", "Feedback", "Stories"];
fListItems2.forEach(function (element) {
    var fListItem2 = document.createElement("li");
    fListItem2.className = "fListItem";
    fListItem2.textContent = element;
    fList2.appendChild(fListItem2);
});
//footer menu3
var footerMenu3 = document.createElement("div");
footerMenu3.className = "footerMenu";
footerLeft.appendChild(footerMenu3);
var fMenuTitle3 = document.createElement("h1");
fMenuTitle3.className = "fMenuTitle";
fMenuTitle3.textContent = "Products";
footerMenu3.appendChild(fMenuTitle3);
var fList3 = document.createElement("ul");
fList3.className = "fList";
footerMenu3.appendChild(fList3);
var fListItems3 = ["Air Force", "Air Jordan", "Blazer", "Crater", "Hippie"];
fListItems3.forEach(function (element) {
    var fListItem3 = document.createElement("li");
    fListItem3.className = "fListItem";
    fListItem3.textContent = element;
    fList3.appendChild(fListItem3);
});
//footer right
var footerRight = document.createElement("div");
footerRight.className = "footerRight";
footer.appendChild(footerRight);
var footerRightMenu1 = document.createElement("div");
footerRightMenu1.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu1);
var fRMenuTitle1 = document.createElement("h1");
fRMenuTitle1.className = "fMenuTitle";
fRMenuTitle1.textContent = "Subscribe to our news letter";
footerRightMenu1.appendChild(fRMenuTitle1);
var fMail = document.createElement("div");
footerRightMenu1.appendChild(fMail);
var fInput = document.createElement("input");
fInput.className = "fInput";
fInput.type = "mail";
fInput.placeholder = "your@email.com";
fMail.appendChild(fInput);
var fButton = document.createElement("button");
fButton.className = "fButton";
fButton.textContent = "Join!";
fMail.appendChild(fButton);
//footer right menu2
var footerRightMenu2 = document.createElement("div");
footerRightMenu2.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu2);
var fRMenuTitle2 = document.createElement("h1");
fRMenuTitle2.className = "fMenuTitle";
fRMenuTitle2.textContent = "Follow Us";
footerRightMenu2.appendChild(fRMenuTitle2);
var fIcons = document.createElement("div");
fIcons.className = "fIcons";
footerRightMenu2.appendChild(fIcons);
var icons = [
    "./img/facebook.png",
    "./img/twitter.png",
    "./img/instagram.png",
    "./img/whatsapp.png",
];
icons.forEach(function (element) {
    var fIcon = document.createElement("img");
    fIcon.className = "fIcon";
    fIcon.src = element;
    fIcons.appendChild(fIcon);
});
//footer right menu 3
var footerRightMenu3 = document.createElement("div");
footerRightMenu3.className = "footerRightMenu";
footerRight.appendChild(footerRightMenu3);
var copyright = document.createElement("span");
copyright.className = "copyright";
copyright.textContent = "@Nike Store. All rights reserved. 2025";
footerRightMenu3.appendChild(copyright);
var productsList = [
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
                img: "/img/goldstar.png"
            }
        ],
        description: "Step into comfort, durability, and iconic Nepali style with Goldstar Shoes – the footwear trusted for generations across the country. Whether you're navigating the busy streets of Kathmandu, trekking hillside trails, or walking to school or work, Goldstar shoes deliver unmatched reliability and everyday comfort."
    }
];
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
        wrapperLogic.style.transform = "translateX(".concat(-100 * index, "vw)");
        //change the chosen product
        chosenProduct = productsList[index];
        //default description
        var defaultDesc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est eius consectetur reprehenderit quam, unde qui illum, rem explicabo eum sed quae omnis optio consequuntur. Commodi sunt fugit quod. Doloremque.";
        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;
        currentProductDesc.textContent = chosenProduct.description || defaultDesc;
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
var productButtonLogic = document.querySelector(".productButton");
var paymentLogic = document.querySelector(".payment");
var closeLogic = document.querySelector(".close");
productButtonLogic.addEventListener("click", function () {
    payment.style.display = "flex";
});
closeLogic.addEventListener("click", function () {
    payment.style.display = "none";
});
