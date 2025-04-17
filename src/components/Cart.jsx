import React, { useEffect } from 'react'
import { useCartStore } from '../stores/useCartStore'
import CloseIcon from '../../public/icons/CloseIcon'
import { removeProduct } from '../utils/removeProduct'
import { subtractProduct } from '../utils/subtractProduct'
import { addToCart } from '../utils/addToCart'

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
    }, [products])

    const handleQuantityChange = (productId, quantity) => {
        // Prevent negative quantities
        useCartStore.getState().updateQuantity(productId, quantity)
    }

    const handleRemoveProduct = (productId) => {
        useCartStore.getState().removeProduct(productId)
        removeProduct(productId)
    }

    const handleOnBlur = (e) => {
        if (e.target.value === '') {
            e.target.value = 1
        }
        else
            updateProducts()
    }

    function subProduct(product) {
        subtractProduct(product.id)
        handleQuantityChange(product.id, product.quantity - 1)
    }

    function plusProduct(product) {
        addToCart(product)
        handleQuantityChange(product.id, product.quantity + 1)
    }


    return (
        <div className={isCart ? 'flex flex-col items-end justify-center h-auto transition-all duration-300 w-full mt-5 ease-in-out' : 'h-0 transition-all duration-300 overflow-hidden ease-in-out w-full'}>
            {/* <span className={isCart ? 'text-lg transition-all duration-300 h-auto' : 'h-0 transition-all duration-300'}>Cesta</span> */}
            <ul className={isCart ? 'flex flex-col gap-2 rounded-xl p-2 text-sm w-full transition-all duration-300 my-4 overflow-hidden h-auto divide-y-1 divide-neutral-300' : 'transition-all duration-300 h-0 overflow-hidden w-full opacity-0 flex flex-col gap-2 rounded-xl  text-sm '}>
                {
                    products.map((product) => {
                        const price = (product.price / 100 * product.quantity).toFixed(2)

                        return (
                            <li key={product.id} className=' grid grid-cols-[1.5fr_3fr_3fr_0.5fr] text-start justify-items-start w-full py-2 transition-all duration-300 '>
                                <img src="/logo-fondo.jpg" alt="" className='object-cover w-14 rounded-xl' />
                                <div className='flex flex-col items-start justify-center'>
                                    <span className='text-white'>{product.name}</span>
                                    <span className='text-white'>{price}€</span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <span>Cantidad</span>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <button className='rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-0 px-2' onClick={() => subProduct(product)}>-</button>
                                        <input disabled onBlur={e => handleOnBlur(e)} type="tel" inputMode="numeric" pattern="[0-9]*" className='w-10 text-center rounded-lg border border-neutral-400 inset-shadow-sm inset-shadow-neutral-700 focus:outline-2 outline-amber-400' onChange={(e) => {
                                            const value = e.target.value;
                                            const numericValue = parseInt(value, 10);
                                            handleQuantityChange(
                                                product.id,
                                                value === '' || isNaN(numericValue) ? '' : numericValue
                                            );
                                        }} value={product.quantity} />
                                        <button className='rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-0 px-2' onClick={() => plusProduct(product)}>+</button>
                                    </div>
                                </div>
                                <div className='flex items-center w-full justify-end '>
                                    <button className='' onClick={() => handleRemoveProduct(product.id)}>
                                        <CloseIcon className='size-5 text-neutral-100' />
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }

                <span className='flex flex-row w-full items-center justify-between mt-4 text-start transition-all duration-300'>
                    <span className='text-base'>Subtotal <br />{totalPrice / 100}€</span>
                    <span className='text-base'>Productos <br />{totalItems}</span>
                    <button disabled={products.length === 0} className={products.length === 0 ? 'rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-2 opacity-50' : 'rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 p-2'}>Continuar</button>
                </span>
            </ul>
        </div>
    )
}

export default Cart