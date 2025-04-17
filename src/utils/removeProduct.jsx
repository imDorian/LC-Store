
export const removeProduct = (productId) => {
    try {
        const cookies = JSON.parse(localStorage.getItem('cookies'))
        if (!cookies) {
            console.error('No cookies found')
            return
        }
        const updatedCookies = cookies.cart.filter(item => item.id !== productId)
        window.localStorage.setItem('cookies', JSON.stringify({ ...cookies, cart: updatedCookies }))
        console.log('Product removed from cart:', productId)
    } catch (error) {
        console.error('Error removing product from cart:', error)
    }
}

