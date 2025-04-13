import React from 'react'

const products = [

    {
        id: 1,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 4,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 5,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 7,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 8,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },

]

function Shop() {
    return (
        <div id='shop' className="bg-orange-400 p-5 flex flex-col items-center">
            <div className="flex flex-col  justify-center h-full w-full gap-4 md:max-w-7xl">
                <h1 className='text-xl font-semibold text-white italic'>Mis productos favoritos</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    {products.map((product) => (
                        <div key={product.id} className=" flex flex-col gap-1 items-start justify-start overflow-hidden  transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden rounded-lg  max-h-64 md:max-h-[400px] w-full group cursor-pointer">
                                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className='flex flex-col items-start justify-start cursor-pointer'>
                                <h2 className='text-base'>{product.name}</h2>
                                <p className=" text-sm text-white">{product.price}</p>
                            </div>
                            <a href={product.href} className="text-base rounded-sm font-medium italic text-center p-1.5 text-white bg-gradient-to-br from-orange-600 to-orange-500  hover:from-orange-700 hover:to-orange-600 transition-all duration-300 ease-in-out w-full">Añadir al carrito</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop