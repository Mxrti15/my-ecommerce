import React, { useState } from 'react';
import Home from "./pages/Home";
import ProductosDetalles from "./pages/ProductosDetalles" 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductosDetalles/>}/>
      </Routes>
    </Router>
  )
}

export default App
