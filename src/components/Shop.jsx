import React from 'react'
import { addToCart } from '../utils/addToCart'
import { useCartStore } from '../stores/useCartStore'
import Product from './Product'

const products = [

    {
        id: 1,
        name: 'One t-shirt',
        href: '#',
        price: 3399,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 2,
        name: 'California Roll',
        href: '#',
        price: 3899,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'camiseta LosAntronautas',
        href: '#',
        price: 3599,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 4,
        name: 'Camiseta LC Camionero',
        href: '#',
        price: 3899,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 5,
        name: 'Camionero Tumbler',
        href: '#',
        price: 3099,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 6,
        name: 'Camiseta Camionero',
        href: '#',
        price: 3699,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 7,
        name: 'Camiseta Rapido',
        href: '#',
        price: 3599,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 8,
        name: 'Camiseta Toma Decision',
        href: '#',
        price: 3599,
        quantity: 1,
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },

]


function Shop() {
    const { addProduct } = useCartStore((state) => state)

    function addProductToCart(product) {
        console.log(product)
        addToCart(product)
        addProduct(product)
    }
    return (
        <div id='shop' className=" p-5 flex flex-col items-center">
            <div className="flex flex-col  justify-center h-full w-full gap-4 md:max-w-7xl">
                <h1 className='text-xl font-semibold text-white italic'>Mis productos favoritos</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    {products.map((product) => {
                        const price = (product.price / 100).toFixed(2)
                        return (
                            <Product key={product.id} product={product} addProductToCart={addProductToCart} price={price} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop