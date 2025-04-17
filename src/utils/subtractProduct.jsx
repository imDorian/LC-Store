
export const subtractProduct = (productId) => {
    const cookies = JSON.parse(localStorage.getItem('cookies'))
    if (!cookies) {
        console.error('No cookies found')
        return
    }
    const updatedCookies = cookies.cart.map(item => {
        if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 }
        }
        return item
    }).filter(item => item.quantity > 0)
    window.localStorage.setItem('cookies', JSON.stringify({ ...cookies, cart: updatedCookies }))
    console.log('Product quantity updated in cart:', productId)
}
