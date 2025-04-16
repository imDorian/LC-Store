
export const createCookies = () => {
    try {
        const cookies = JSON.parse(window.localStorage.getItem('cookies'))
        if (!cookies) {
            const newCookies = {
                cart: [],
                favs: [],
                cookiesModal: true
            }
            window.localStorage.setItem('cookies', JSON.stringify(newCookies))
            console.log('Cookies created')
            return newCookies
        } else {
            console.log('Cookies already exist')
            return cookies
        }
    } catch (error) {
        console.error('Error creating cookies:', error)
        return error
    }
}

