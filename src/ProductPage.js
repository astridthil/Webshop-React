import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion'


function ProductPage(props) {
  const { addToCheckout, setSum, sum } = props;

//Hämta enskilt api
    const [product, setProduct] = useState([]);
    const params = useParams();
    const fetchData = async () => {
        try {
        const response = await fetch("https://codexplained.se/cakes.php?id=" + params.id);
        const data = await response.json();
//console.log(data);

        setProduct(data);
        } catch(error) {
//console.log(error);
        }
}
useEffect( () => {
    fetchData();
}, []);


  
return (
    <div className='productpage'>
      <img src={product.url} alt="icons" className='product-img'/>
      <div className='productpage-info'>
        <motion.h1
        initial={{opacity: 0}}
        animate={{fontSize: 200, opacity: 1}}
        transition={{duration: 0.8}}
        style={titleStyle}
        >{product.title}</motion.h1>
        <p>{product.price} kr</p>
        <p>{product.description}</p>
        <p>Products in stock: {product.storage}</p>
        <input className='productpage-input'></input>
        <motion.button
        whileHover={{backgroundColor: '#EFE1E9'}}
        whileTap={{scale: 0.9}}
        onClick={() => addToCheckout(product)} className='cartbtn'>Add to cart</motion.button>
        </div>
    </div>
  )
}

const titleStyle = {
  color: '#B9D8F6'
};


export default ProductPage