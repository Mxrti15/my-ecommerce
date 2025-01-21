import React, { useState } from "react";
import { Product } from "../types/Product";

const Home: React.FC= () => {
    const[productos, setProductos] =useState<Product[]>([
        { id: 1, nom: "Producto 1", preu: 100, desc: "Descripción del producto 1", imag: "https://via.placeholder.com/150" },
        { id: 2, nom: "Producto 2", preu: 200, desc: "Descripción del producto 2", imag: "https://via.placeholder.com/150" },
        { id: 3, nom: "Producto 3", preu: 300, desc: "Descripción del producto 3", imag: "https://via.placeholder.com/150" },
    ]);

    return(
        <div></div>
    )
    
}

export default Home; //Exporta Home

