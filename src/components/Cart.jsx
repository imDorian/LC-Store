import React, { useEffect } from 'react'
import { useCartStore } from '../stores/useCartStore'

const Cart = ({ isCart }) => {

    const products = useCartStore((state) => state.products)
    const totalPrice = useCartStore((state) => state.totalPrice)
    const totalItems = useCartStore((state) => state.totalItems)
    const updateTotalPrice = useCartStore((state) => state.updateTotalPrice)
    const updateTotalItems = useCartStore((state) => state.updateTotalItems)
    const updateProducts = useCartStore((state) => state.updateProducts)

    useEffect(() => {
        updateTotalPrice()
        updateTotalItems()
    }, [[products]])

    const handleQuantityChange = (productId, quantity) => {
        // Prevent negative quantities
        useCartStore.getState().updateQuantity(productId, quantity)
    }

    const handleRemoveProduct = (productId) => {
        useCartStore.getState().removeProduct(productId)
    }

    const handleOnBlur = (e) => {
        if (e.target.value === '') {
            e.target.value = 1
        } else
            updateProducts()
    }


    return (
        <div className={isCart ? 'flex flex-col items-end justify-center h-auto transition-all duration-300 w-full mt-5' : 'h-0 transition-all duration-300 overflow-hidden'}>
            <span className='text-lg'>Cesta</span>
            <ul className={isCart ? 'flex flex-col gap-2 rounded-xl p-2 text-sm w-full transition-all duration-300 my-4 overflow-hidden h-auto divide-y-1 divide-neutral-200' : 'transition-all duration-300 h-0 overflow-hidden w-full opacity-0'}>
                {
                    products.map((product) => (
                        <li key={product.id} className=' flex flex-row items-center  justify-between w-full text-start px-2 py-2 transition-all duration-300 '>
                            <img src="/logo-fondo.jpg" alt="" className='object-cover w-14 rounded-xl' />
                            <div className='flex flex-col items-start justify-center'>
                                <span className='text-white'>{product.name}</span>
                                <span className='text-white'>{product.price}€</span>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <span>Cantidad</span>
                                <input onBlur={e => handleOnBlur(e)} type="tel" inputMode="numeric" pattern="[0-9]*" className='w-10 text-center rounded-lg' onChange={(e) => {
                                    const value = e.target.value;
                                    const numericValue = parseInt(value, 10);
                                    handleQuantityChange(
                                        product.id,
                                        value === '' || isNaN(numericValue) ? '' : numericValue
                                    );
                                }} value={product.quantity} />
                            </div>
                        </li>
                    ))
                }

                <span className='flex flex-row w-full items-center justify-between mt-4 text-start transition-all duration-300'>
                    <span className='text-base'>Subtotal {totalPrice}€</span>
                    <span className='text-base'>Productos {totalItems}</span>
                    <button disabled={products.length === 0} className={products.length === 0 ? 'rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-2 opacity-50' : 'rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-2'}>Continuar</button>
                </span>
            </ul>
        </div>
    )
}

export default Cart