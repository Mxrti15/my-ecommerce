import React, { useState } from "react";
import { Product } from "../types/Product";

// interfaz que define que Home debe recibir un objeto llamado ListaProductos que debe ser de tipo Product
interface Productos{
    ListaProductos: Product[]; //ListaProductos viene de App
}

// <Productos> valida el tipo de props, asegura que las props de ListaProductos tengan una estructura correcta
const Home: React.FC<Productos> = ({ListaProductos}) => { // () porque es un props y {} desestructura el bjeto props para obtener de forma directas las propiedades de ListaProductos
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

