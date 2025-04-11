import React from 'react'

// const Shop = () => {
//     return (
//         <div className='snap-center h-screen bg-orange-400 pt-40'>
//             <h1 className='text-6xl italic'>Tienda</h1>
//         </div>
//     )
// }

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '/Td.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
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
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/Td.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/Td.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },
    {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/Td.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/TomaDecision.png',
        imageAlt: 'Hand holding black machined-steel mechanical pencil with brass tip and top.',
    },

]

function Shop() {
    return (
        <div id='shop' className="snap-center h-screen bg-orange-400 overflow-hidden ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl pt-20 text-white italic">Tienda</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover object-top group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-lg text-white">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-neutral-200">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop