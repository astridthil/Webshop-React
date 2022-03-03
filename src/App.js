import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Footer from './Footer'
import ProductList from './ProductList';
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

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductPage setSum = {setSum} sum = {sum}  addToCheckout={addToCheckout} checkoutItems={checkoutItems}/>} />
        <Route path='/checkout' element={<Checkout setCheckoutItems={setCheckoutItems} sum = {sum} addToCheckout={addToCheckout} checkoutItems={checkoutItems} setCheckoutItems={setCheckoutItems}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
