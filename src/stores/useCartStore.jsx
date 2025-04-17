import { create } from 'zustand'

export const useCartStore = create((set) => ({
    products: [],
    totalPrice: 0,
    totalItems: 0,
    addProduct: (product) => set((state) => {
        const isProductInCart = state.products.some(item => item.id === product.id)
        if (isProductInCart) {
            const updatedProducts = state.products.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { products: updatedProducts }
        } else {
            const newProduct = { ...product, quantity: 1 }
            return { products: [...state.products, newProduct] }
        }
    }),
    removeProduct: (productId) => set((state) => ({ products: state.products.filter(product => product.id !== productId) })),
    clearCart: () => set({ products: [] }),
    updateTotalPrice: () => set((state) => ({ totalPrice: state.products.reduce((acc, product) => acc + product.price * product.quantity, 0) })),
    updateTotalItems: () => set((state) => ({ totalItems: state.products.reduce((acc, product) => acc + Number(product.quantity), 0) })),
    updateQuantity: (productId, quantity) => set((state) => {
        const updatedProducts = state.products.map(product => {
            if (product.id === productId && quantity >= 0) {
                return { ...product, quantity: quantity }
            }
            return product
        })
        return { products: updatedProducts }
    }),
    updateProducts: () => set((state) => ({
        products: state.products.filter((product) => {
            return product.quantity > 0
        })
    })),
}))


