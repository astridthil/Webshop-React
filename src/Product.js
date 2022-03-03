import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'



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
    products.map((product) => (
      <div className='products'>
       <article key={product.id}>
            <img src={product.url} alt="icons" className='product-img'/>
            <Link to={`/products/${product.id}`}><h1>{product.title}</h1></Link>
            <p>{product.price}</p>
            <p>{product.storage}</p>
            <button >Add to cart</button>
        </article>
    
      </div>
      ))
  )
}



export default Product