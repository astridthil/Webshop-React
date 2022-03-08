import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { HiOutlineTrash } from "react-icons/hi";
import { motion } from 'framer-motion'

function Checkout(props) {
    const { checkoutItems, setCheckoutItems, handleDecrement, handleIncrement, qty, checkoutTotal } = props;
    

    const deleteItem = (product) => {
      let filteredItems = checkoutItems.filter(p => p.id !== product.id)
      setCheckoutItems(filteredItems)
    }
    

    const increment = (product) => {
      
    }

    
  return (
    <table className='checkout-page'>
      <h1 className='checkout-title'>Checkout items</h1>
    {checkoutItems.length === 0 && <div>Your cart is empty, <Link style={linkStyle} to='/products'>continue shopping</Link></div>}
    {checkoutItems.map((product) => (
    <div key={product.id} className='checkout-container'>
      <div className='checkout-items'>
      <img src={product.url} alt="icons" className='checkout-img'/>
      <div className='checkout-title-price'>
      <Link to={`/products/${product.id}`} style={linkStyle}><p>{product.title}</p></Link>
      <p>{product.price} kr</p>
      </div>
        <div className='btns'>
        <motion.button 
        whileTap={{scale: 1.2}}
        className='minus-btn'
        onClick={handleDecrement}
        >-</motion.button>
        <p>{product.quantity}</p>
        <motion.button 
        whileTap={{scale: 1.2}}
        className='plus-btn'
        onClick={() => increment(product)}
        >+</motion.button>
        <motion.button
        whileHover={{color: '#FFDEF6' }}
        whileTap={{scale: 1.2}}
        className='delete-btn' onClick={() => deleteItem(product)}>
        <HiOutlineTrash />
        </motion.button>
        </div>
      </div>
    </div>
  ))}

  <div className='total'>Total price: {checkoutTotal} kr</div>
  </table>);
}

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: '#393939'
};




export default Checkout