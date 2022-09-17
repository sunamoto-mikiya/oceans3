const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
    const res = await fetch(`${API_BASE_URL}/posts`)
    if (res.ok) {
        return res.json()
    }
}

export async function getPost(id) {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`)
    if (res.ok) {
        return res.json()
    }
}
