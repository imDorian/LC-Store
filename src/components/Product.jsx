import React from 'react'

const Product = ({ product, addProductToCart, price }) => {
    return (
        <div key={product.id} className="flex flex-col gap-1 items-start justify-start overflow-hidden  transition-all duration-300 ease-in-out ">
            <div className="overflow-hidden rounded-lg  max-h-64 md:max-h-[400px] w-full group cursor-pointer">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className='flex flex-col items-start justify-start cursor-pointer'>
                <h2 className='text-base font-medium italic'>{product.name}</h2>
                <p className=" text-sm font-medium ">{price}€</p>
            </div>
            <a onClick={() => addProductToCart(product)} href={product.href} className="text-base rounded-sm font-medium italic text-center p-1.5 bg-gradient-to-br from-orange-600 to-orange-500  hover:from-orange-700 hover:to-orange-600 transition-all duration-300 ease-in-out w-full">Añadir al carrito</a>
        </div>
    )
}

export default Product