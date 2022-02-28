import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import Footer from './Footer';
import ProductList from './ProductList';
import Products from './Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/product' element={<Product />} />

      </Routes>
      </BrowserRouter>
      
      <Footer />
      <ProductList />
      <Products />


    </div>
  );
}

export default App;
