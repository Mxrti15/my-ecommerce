import React from "react";

import { Product } from "../types/Product";

type  ProductCardProps = {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return(
        <div className="bg-white shadow rounded p-4">
            <img
                src={product.imag}
                alt={product.nom}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.nom}</h2>
            <p className="text-gray-600">${product.preu}</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                Ver detalles
            </button>
        </div>
    );
};
export default ProductCard;