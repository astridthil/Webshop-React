import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Product({product}) {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
      try {
      const response = await fetch("https://codexplained.se/shoes.php");
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
    products.map((product) => (
      <div>
       <article key={product.id}>
            <Link to={`/products/${product.id}`}><h1>{product.title}</h1></Link>
            <img src={product.url} alt="icons" className='product-img'/>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.storage}</p>
            <button>Add to cart</button>
        </article>
      </div>
      ))
  )
}

export default Product