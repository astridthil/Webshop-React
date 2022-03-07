import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'



function Product({product}) {
  const [selectedId, setSelectedId] = useState(null)
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
      try {
      const response = await fetch("https://codexplained.se/cakes.php");
      const data = await response.json();
      //console.log(data);

      setProducts(data);
      } catch(error) {
          console.log(error);
      }
}

useEffect( () => {
  fetchData();
}, [])




  return (
    <div className='products'>
    {products.map((product) => (
      <div>
       <article key={product.id}>
         <div className='products-product'>
            <img src={product.url} alt="icons" className='products-img'/>
            <Link style={linkStyle} to={`/products/${product.id}`}><h1>{product.title}</h1></Link>
            <p>{product.price} kr</p>
            <motion.button 
            className='products-cartbtn'
            whileHover={{backgroundColor: '#EFE1E9'}}
            whileTap={{scale: 0.9}}
            >Add to cart</motion.button>
            </div>
        </article>
    
      </div>
      ))}
      </div>
  )
}

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: '#393939'
}


export default Product