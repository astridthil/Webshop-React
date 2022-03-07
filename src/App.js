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
  const [sum, setSum] = useState(0)



    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);

        if (sum == 0) {
          setSum(product.price)
        } else {
          setSum(sum + product.price)
        }
    }

      const [count, setCount] = useState(1);
      const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
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
        count={count}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
