import logo from './logo.svg';
import './App.css';
import Layout from './Layout.js';
import Products from './Product.js';

import Home from './Home.js';
import Detail from './Detail.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          
            <Route path="/:id" element={<Detail />} />
            <Route path="products" element={<Products />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}




export default App;
