import React, { useState, useEffect } from 'react';
import Product from './Product';

function ProductList() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
        const response = await fetch("https://codexplained.se/cakes.php");
        const data = await response.json();
        console.log(data);

        setProducts(data);
        } catch(error) {
            console.log(error);
        }
}

useEffect( () => {
    fetchData();
}, [])




  return (
    <div>
        <h1>Product list</h1>
        <div>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default ProductList