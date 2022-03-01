import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import Footer from './Footer';
import ProductPage from './ProductPage';
import Checkout from './Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </BrowserRouter>
      <ul>
        <li> <a href='/checkout'>checkout</a> </li>
        <li> <a href='/products'>products</a> </li>
      </ul>
  

      <Footer />


    </div>
  );
}

export default App;
