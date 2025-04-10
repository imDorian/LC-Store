import { create } from 'zustand'

export const useCartStore = create((set) => ({
    products: [{ id: 1, name: 'Product 1', price: 10, quantity: 1 }, { id: 2, name: 'Product 2', price: 20, quantity: 2 }],
    totalPrice: 0,
    totalItems: 0,
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
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


