import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import Header from './Header';


function App() {

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [checkoutTotal, setCheckoutTotal] = useState(0);



    const addToCheckout = (product) => {

      
          const check_index = checkoutItems.findIndex(item => item.id === product.id);
          if (check_index !== -1) {

            product = Object.assign({}, {...product}, {quantity : qty + 1})

            setCheckoutItems([...checkoutItems, product]);

          } else {
            setCheckoutItems([...checkoutItems, product]);
          }
    
    }

      function handleDecrement() {
        setQty(prevQty => prevQty - 1);
      };

      useEffect(() => {
        total();
      }, [checkoutItems]);

      const total = () => {
        let totalVal = 0;
        for (let i = 0; i < checkoutItems.length; i++) {
          totalVal += checkoutItems[i].price;
        }
        setCheckoutTotal(totalVal);
      };

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Product addToCheckout={addToCheckout}/>} />
        <Route path='/products' element={<Product addToCheckout={addToCheckout}/>} />
        <Route path='/products/:id' element={<ProductPage 
        addToCheckout={addToCheckout} 
        checkoutItems={checkoutItems}
        qty={qty}
        setQty={setQty}/>} />
        <Route path='/checkout' element={<Checkout 
        setCheckoutItems={setCheckoutItems}
        addToCheckout={addToCheckout} 
        checkoutItems={checkoutItems} 
        setCheckoutItems={setCheckoutItems}
        handleDecrement={handleDecrement}
        checkoutTotal={checkoutTotal}
        qty={qty}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
