import React, { useState } from 'react';
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
//import Footer from "./components/Footer";
import { Product } from "./types/Product";
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// React.FC es un tipo que devuelve JSX, incluye la propiedad children lo cual es útil en componentes hijos.
// const App: React.FC =() =>{

const App = () => {
  
  const ListaProductos: Product[] = [
    { id: 1, nom: "Producto 1", preu: 100, desc: "Descripción del producto 1", imag: "https://via.placeholder.com/150" },
    { id: 2, nom: "Producto 2", preu: 200, desc: "Descripción del producto 2", imag: "https://via.placeholder.com/150" },
    { id: 3, nom: "Producto 3", preu: 300, desc: "Descripción del producto 3", imag: "https://via.placeholder.com/150" },
  ];
  
  return (
    <>
      <Header></Header>
      
      <Home ListaProductos={ListaProductos}></Home>
      {/* <AppRoutes></AppRoutes> */}
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
