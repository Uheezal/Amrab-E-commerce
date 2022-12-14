import React, {useState} from 'react'
import './Cart.css'
import Paypal from './Paypal';


const Cart = ({ cartItem, addTocart, decreaseQty }) => {

  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);
  const [checkout, setCheckout] = useState(false);

  return (
  
    
   <>
          {checkout ? (<Paypal totalPrice={totalPrice} /> ):  (
                   <section className='cart-items'>
                   <div className='container d_flex'>
                     <div className='cart-details'>
                       {cartItem.length === 0 && <h1 className='no-items product'>No items are added to the cart</h1>}
                       {cartItem.map((item,index) => {
                         const productQty = item.price * item.qty;
                         return (
                           <div className='cart-list product d_flex' key={index}>
                             <div className='img'>
                               <img src={item.cover} alt='' />
                             </div>
                             <div className='cart-details'>
                               <h3>{item.name}</h3>
                               <h4>{item.price}.00 * {item.qty}</h4>
                                 <span>${productQty}.00</span>
                               
                             </div>
                             <div className='cart-items-function'>
                               <div className='removeCart'>
                                 <button>
                                   <i className='fa-solid fa-xmark'></i>
                                 </button>
                               </div>
                             </div>
                             <div className='cartControl d_flex'>
                               <button className='inCart' onClick={() => addTocart(item)}>
                                 <i className='fa fa-plus'></i>
                               </button>
                               <button className='deCart' onClick={() => decreaseQty(item)}>
                                 <i className='fa fa-minus'></i>
                               </button>
                             </div>
                           </div>
                         )
                       })}
                     </div>
                     <div className='cart-total product'>
                       <h2>Cart Summary</h2>
                       <div className='d_flex'>
                         <h4>Total price:</h4>
                         <h3>${totalPrice}.00</h3>
                           <button onClick={()=>{setCheckout(true)}}>Checkout</button>
                       </div>
                     </div>
                   </div>
                 </section>
          )}
      </>
  )
}
export default Cart