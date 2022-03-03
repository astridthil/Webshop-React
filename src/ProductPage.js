import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';


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
        <h1>{product.title}</h1>
        <p>{product.price} SEK</p>
        <p>About the product: {product.description}</p>
        <p>Products in stock: {product.storage}</p>
        <input></input>
        <Button>
        <button onClick={() => addToCheckout(product)} className='cartbtn'>Add to cart</button>
        </Button>
        </div>
    </div>
  )
}

const Button = styled.button`
background-color: transparent;
`


export default ProductPage