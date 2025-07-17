import React from 'react'

const featureItems=[
{img:'/img/shipping.png',title:"FREE SHIPPING",desc:"Free worldwide shipping on all orders."},
{img:'/img/return.png',title:"30 DAYS RETURN",desc:"No question return and easy refund in 14 days."},
{img:'/img/gift.png',title:"GIFT CARDS",desc:"Buy gift cards and use coupon codes easily."},
{img:'/img/contact.png',title:"CONTACT US",desc:"Keep in touch via email and support system."},
];
function Feature() {
  return (
    <div className='features'>
        {featureItems.map((item,idx)=>(
            <div className="feature"key={idx}>
                <img src={item.img} alt={item.title} className="featureImg" />
                <span className="featureTitle">{item.title}</span>
                <span className="featureDesc">{item.desc}</span>
            </div>
        ))}
      
    </div>
  )
}

export default Feature
