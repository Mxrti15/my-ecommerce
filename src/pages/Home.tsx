import React, { useState } from "react";
import { Product } from "../types/Product";

interface Productos{
    ListaProductos: Product[]; //ListaProductos viene de App
}

const Home: React.FC<Productos> = ({ListaProductos}) => {
    return( 
        <div>
            <p>Estas en casa </p>
            {ListaProductos.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nom}</h3>
                    <p>{producto.desc}</p>
                    {/* <img src={product.imag} alt={product.nom} /> */}
                </div>
            ))}
        </div>
    );

    
    
}

export default Home; //Exporta Home

