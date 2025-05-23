import { createCookies } from "./createCookies"

export const getCookies = async () => {
    try {
        const cookies = JSON.parse(localStorage.getItem('cookies'))
        if (!cookies) {
            const newCookies = await createCookies()
            return newCookies
        }
        console.log('Cookies found:', cookies)
        return cookies

    } catch (error) {
        console.error('Error getting cookies:', error)

    }
}

