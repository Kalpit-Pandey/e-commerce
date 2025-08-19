import React,{useState,useContext} from 'react'
import { CartContext } from '../context/CartContext'
import Payment from './Payment' 

function Cart({closeCart}) {
    const [showPayment,setShowPayment]=useState(false);

    const {cart,setCart,addToCart,removeFromCart,removeItem,totalPrice,totalQuantity} = useContext(CartContext)
    
    if(cart.length===0){
        return <><span className='closeCart'onClick={closeCart} >X</span><p> Your cart is empty.</p></>
    }

  return (
    <div className='cart-table'>
        <span className='closeCart' onClick={closeCart}>X</span>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    {/* <th>Size</th>
                    <th>Color</th> */}
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        {/* <td>{item.size}</td>
                        <td>{item.color}</td> */}
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price*item.quantity}</td>
                        <td>
                            <button onClick={()=>{addToCart(item)}}>➕</button>
                            <button onClick={()=>{removeFromCart(item.id)}}>➖</button>
                            <button onClick={()=>{removeItem(item.id)}}>❌</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        <div className="cart-summary">
            <p><strong>Total Items:</strong>{totalQuantity}</p>
            <p><strong>Total Price:</strong>${totalPrice}</p>
            <button onClick={()=>setCart([])}>Clear Cart</button>
            <button className="productButton" onClick={()=>setShowPayment(true)}>CHECKOUT</button>

        </div>
        {showPayment && <Payment onClose={()=>setShowPayment(false)}/>}
    </div>
  )
}

export default Cart
