import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import React, { useState } from 'react';
import Footer from './Footer'
import Header from './Header';


function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [qty, setQty] = useState(1);



    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);

        if (sum == 0) {
          setSum(product.price)
        } else {
          setSum(sum + product.price)
        }
    }
      const handleIncrement = () => {
        setQty(prevCount => prevCount + 1);
      };
      const handleDecrement = () => {
        setQty(prevCount => prevCount - 1);
      };


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductPage setSum = {setSum} sum = {sum}  addToCheckout={addToCheckout} checkoutItems={checkoutItems}/>} />
        <Route path='/checkout' element=
        {<Checkout 
        setCheckoutItems={setCheckoutItems}
        sum = {sum} 
        addToCheckout={addToCheckout} 
        checkoutItems={checkoutItems} 
        setCheckoutItems={setCheckoutItems}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        qty={qty}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
