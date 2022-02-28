import React from 'react'

function ProductListComponent({products}) {
  return (
    <div>
        {
             products.map((product) => (
                 <article key={product.id}>
                     <h1>{product.title}</h1>
                     <p>{product.price}</p>
                 </article>
             ))
         }
    </div>
  )
}

export default ProductListComponent