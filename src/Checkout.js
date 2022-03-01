import React, { useState, useEffect } from 'react'

function Checkout(props) {
    const { product } = props;
    const [checkoutItems, setCheckoutItems] = useState([]);

    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);
    }

    const checkoutProducts = checkoutItems.map((product) => (
        <div key={product.id}>
          {`${product.title}: ${product.price}`}
        </div>
      ));
    

    console.log(checkoutItems);

  return (
    <div>
        <h1>checkout items</h1>
        <p>här är mina varor:{checkoutItems}</p>
        <p>du har {checkoutItems} st checkoutitems i korgen</p>
        <button onClick={() => setCheckoutItems(product.title)}>lägg till</button>
    </div>
  );
}

export default Checkout