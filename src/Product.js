import React from 'react'

function Product({product}) {
  return (
    <div>
        <article key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
        </article>
    </div>
  )
}

export default Product