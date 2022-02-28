import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import Products from './Products';
import Footer from './Footer';
import ProductPage from './ProductPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Products />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductPage />} />
      </Routes>
      </BrowserRouter>
  

      <Footer />


    </div>
  );
}

export default App;
