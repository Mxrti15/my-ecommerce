import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductosDetalles from "../pages/ProductosDetalles" 

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductosDetalles/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;