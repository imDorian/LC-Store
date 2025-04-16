import { getCookies } from "./getCookies"


export const addToCart = async (product) => {
    try {
        const cookies = await getCookies()
        const newCookies = {
            ...cookies,
            cart: [...cookies.cart, product]
        }
        window.localStorage.setItem('cookies', JSON.stringify(newCookies))
        console.log('Product added to cart:', product)
    } catch (error) {
        console.error(error)
        return error
    }
}



