export function plusProduct(product) {
    const cookies = JSON.parse(localStorage.getItem('cookies'))
    if (!cookies) {
        console.error('No cookies found')
        return
    }

}