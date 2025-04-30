import React from 'react'
import AddButton from './AddButton'
import { URL } from '../constants/URL'

const Product = ({ product, addProductToCart }) => {
    const { id, price, title, description, image } = product
    const desc = description[0].children[0].text
    const priceDecimal = price / 100

    console.log(product)
    // const images = media.map((image) => {
    //     return {
    //         id: image.id,
    //         name: image.name,
    //         url: 'http://localhost:1337' + image.url,
    //     }
    // }
    // )
    return (
        <div key={id} className="flex flex-col gap-1 items-start justify-between overflow-hidden transition-all duration-300 ease-in-out w-full">
            <div className="overflow-hidden rounded-lg w-full group cursor-pointer">
                <img loading='lazy' src={image} alt={title} className="object-cover object-top aspect-[9:16] transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className='w-full flex flex-col justify-between gap-y-2'>
                <div className='flex flex-col items-start justify-start cursor-pointer'>
                    <h2 className='text-base font-medium italic'>{title}</h2>
                    <p className=" text-sm font-medium ">{priceDecimal}€</p>
                </div>
                <AddButton product={product} addProductToCart={addProductToCart} />

            </div>
        </div>
    )
}

export default Product