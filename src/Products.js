import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function Products() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
        const response = await fetch("https://codexplained.se/electronics.php");
        const data = await response.json();
        console.log(data);

        setProducts(data);
        } catch(error) {
            console.log(error);
        }
}

useEffect( () => {
    fetchData();
}, []);

  return (
    <div>
        <h1>ProductList</h1>

        <ProductList products={products} />
    </div>
  )
}

export default Products