import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import Footer from './Footer'
import Header from './Header';

function App() {

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

    const addToCheckout = (product) => {
      setCheckoutItems([...checkoutItems, product]);}

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
         checkoutItems={checkoutItems}/>} />
        <Route path='/checkout' element={<Checkout 
         addToCheckout={addToCheckout} 
         checkoutItems={checkoutItems} 
         setCheckoutItems={setCheckoutItems}
         checkoutTotal={checkoutTotal}/>} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
