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
        setCheckoutItems([...checkoutItems, product]);
    }
      const handleIncrement = () => {
        setQty(prevCount => qty + 1);
      };
      const handleDecrement = () => {
        setQty(prevCount => qty - 1);
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
        <Route path='/' element={<Product />} />
        <Route path='/products' element={<Product />} />
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
        handleIncrement={handleIncrement}
        checkoutTotal={checkoutTotal}
        qty={qty}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
