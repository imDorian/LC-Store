import React, { useState } from 'react';

const AddButton = ({ product, addProductToCart }) => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        addProductToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 3000); // Quita el estilo tras 3 segundos
    };

    const baseStyle = "text-base rounded-xs font-medium italic text-center text-white p-1 transition-all duration-300 ease-in-out w-full";
    const normalStyle = "bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-300 ease-in-out hover:from-orange-700 hover:to-orange-600";
    const addedStyle = "bg-green-500 hover:bg-green-600 duration-300 transition-all ease-in-out"; // Puedes personalizarlo

    return (
        <button
            onClick={handleClick}
            className={`${baseStyle} ${added ? addedStyle : normalStyle}`}
        >
            {added ? "Añadido!" : "Añadir al carrito"}
        </button>
    );
};

export default AddButton;
