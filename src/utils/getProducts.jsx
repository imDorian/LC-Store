import { API_URL } from "../constants/API_URL"
import { TOKEN } from "../constants/TOKEN"

export async function getProducts() {

    const response = await window.fetch(`${API_URL}products?populate=image`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },

    })
    const res = await response.json()
    const products = res.data.map((product) => {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image.url,
            quantity: 1,
        }
    })
    return products
}