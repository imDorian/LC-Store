import { getCookies } from "./getCookies"


export const addToCart = async (prod) => {
    const product = {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: 1,
        image: prod.image,
    }
    try {
        const cookies = await getCookies()
        function isProductInCart(productId) {
            return cookies.cart.some(item => item.id === productId)
        }
        if (isProductInCart(product.id)) {
            console.log('Product already in cart:', product)
            const updatedCookies = cookies.cart.map(item => {
                if (item.id === product.id) {

                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            window.localStorage.setItem('cookies', JSON.stringify({ ...cookies, cart: updatedCookies }))
        } else {
            const newCookies = {
                ...cookies,
                cart: [...cookies.cart, product]
            }
            window.localStorage.setItem('cookies', JSON.stringify(newCookies))
            console.log('Product added to cart:', product)
        }
    } catch (error) {
        console.error(error)
        return error
    }
}



