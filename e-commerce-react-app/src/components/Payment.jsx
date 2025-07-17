import React from 'react'

function Payment() {
  return (
    <div className='payment'>
        <h1 className="payTitle">Personal Information</h1>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder='John Doe' className='payInput' />
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder='+977 9840000000'className='payInput' />
        <label htmlFor="">Address</label>
        <input type="text" placeholder='Elton St 21 22-145' className='payInput'/>
        <h1 className="payTitle">Card Information</h1>
        <div className="cardIcons">
            <img src="/img/visa.png" alt="visa" width={40} className="carIcon" />
            <img src="/img/master.png" alt="master" width={40} className="cardIcon" />
        </div>
        <input type="password"placeholder='Card Number' className="payInput" />
        <div className="cardInfo">
            <input type="text" placeholder='mm'className="payInput sm" />
            <input type="text" placeholder='yyyy'className="payInput sm" />
            <input type="text" placeholder='dd'className="payInput sm" />
        </div>
        <button className="payButton">Checkout!</button>
        <span className="close">X</span>
    </div>
  )
}

export default Payment
