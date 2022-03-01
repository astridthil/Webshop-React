import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import Checkout from './Checkout';

function ProductPage() {


//Hämta enskilt api
    const [product, setProduct] = useState([]);
    const params = useParams();
    const fetchData = async () => {
        try {
        const response = await fetch("https://codexplained.se/electronics.php?id=" + params.id);
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
      <p>image</p>
      <div className='productpage-info'>
        <h1>{product.title}</h1>
        <p>{product.price} SEK</p>
        <p>About the product: {product.description}</p>
        <p>Products in stock: {product.storage}</p>
        <button className='cartbtn'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductPage