import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Checkout(props) {
    const { checkoutItems, sum, setCheckoutItems } = props;

    const deleteItem = (product) => {
      let filteredItems = checkoutItems.filter(p => p.id !== product.id)
      console.log(filteredItems)
      setCheckoutItems(filteredItems)
    }
    

    console.log(props);

    
  return (
    <table className='checkout-page'>
      <div>Checkout items</div>
    {checkoutItems.length === 0 && <div>Your cart is empty, <Link to='/products'>continue shopping</Link></div>}
    {checkoutItems.map((product) => (
    <div key={product.id} className='checkout-container'>
      <div className='checkout-items'>
      <img src={product.url} alt="icons" className='checkout-img'/>
        <p className='checkout-title-price'>{product.title} {product.price} SEK</p>
        <div className='btns'>
        <button className='minus-btn'>-</button>
        <p>Antal</p>
        <button className='plus-btn'>+</button>
        <button className='delete-btn' onClick={() => deleteItem(product)}>Delete</button></div>
      </div>
    </div>
  ))}
  <div className='total'>Total price: {sum}</div>
  </table>);
}

export default Checkout