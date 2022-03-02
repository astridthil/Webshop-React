import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import Footer from './Footer';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import { useState } from 'react';
import {Link} from 'react-router-dom'


function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);
    }
   /* const checkoutProducts = checkoutItems.map((product) => (
        <div key={product.id}>
          {`${product.title}: ${product.price}`}
        </div>
      ));*/
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductPage addToCheckout={addToCheckout} checkoutItems={checkoutItems}/>} />
        <Route path='/checkout' element={<Checkout addToCheckout={addToCheckout} checkoutItems={checkoutItems}/>} />
      </Routes>
      <ul>
        <li> <Link to='/checkout'>checkout</Link> </li>
        <li> <Link to='/products'>products</Link> </li>
      </ul>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
