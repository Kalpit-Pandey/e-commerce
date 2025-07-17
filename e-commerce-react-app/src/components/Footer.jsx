import React from "react";

const fListItems1=["Company", "Contact", "Careers", "Affiliates", "Stores"];
const fListItems2=["Support", "Refund", "FAQ", "Feedback", "Stories"];
const fListItems3=["Air Force", "Air Jordan", "Blazer", "Crater", "Hippie","Goldstar"];
const icons=["/img/facebook.png","/img/twitter.png","/img/instagram.png","/img/whatsapp.png",]

function Footer() {
  return (
    <footer>
      <div className="footerLeft">
        <div className="footerMenu">
          <h1 className="fMenuTitle">About Us</h1>
          <ul className="fList">
            {fListItems1.map((item, idx) => (
              <li className="fListItem" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Useful Links</h1>
          <ul className="fList">
            {fListItems2.map((item, idx) => (
              <li className="fListItem" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Products</h1>
          <ul className="fList">
            {fListItems3.map((item, idx) => (
              <li className="fListItem" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Subscribe to our news letter</h1>
          <div className="fMail">
            <input type="mail" className="fInput" placeholder="your@mail.com" />
            <button className="fButton">Join!</button>
          </div>
        </div>

        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Follow Us</h1>
          <div className="fIcons">
            {icons.map((item, idx) => (
              <img src={item} alt="" className="fIcon" key={idx} />
            ))}
          </div>
        </div>

        <div className="footerRightMenu">
          <span className="copyright">
            @Nike Store. All rights reserved. 2025
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
