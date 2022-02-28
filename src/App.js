import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Product.js';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/product' element={<Product />} />

      </Routes>
      </BrowserRouter>
      
      <Footer />


    </div>
  );
}

export default App;
