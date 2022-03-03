import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import { useState } from 'react';
import {Link} from 'react-router-dom'


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
        <Route path='/products/:id' element={<ProductPage setSum = {setSum} sum = {sum}  addToCheckout={addToCheckout} checkoutItems={checkoutItems}/>} />
        <Route path='/checkout' element={<Checkout sum = {sum} addToCheckout={addToCheckout} checkoutItems={checkoutItems} setCheckoutItems={setCheckoutItems}/>} />
      </Routes>
      <ul>
        <li> <Link to='/checkout'>checkout</Link> </li>
        <li> <Link to='/products'>products</Link> </li>
      </ul>
      </BrowserRouter>
  
      
    </div>
  );
}

export default App;
