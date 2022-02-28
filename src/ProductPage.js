import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';

function ProductPage() {
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
    <div>
        <h1>a specific product with id {params.id}</h1>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>Products in stock: {product.storage}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default ProductPage