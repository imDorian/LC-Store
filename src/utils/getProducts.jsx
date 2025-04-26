import { API_URL } from "../constants/API_URL"
import { TOKEN } from "../constants/TOKEN"

export async function getProducts() {

    const response = await window.fetch(`${API_URL}products?populate=media`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },

    })
    const res = await response.json()
    return res.data
}