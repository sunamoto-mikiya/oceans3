import axios from "axios"

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
    const res = await axios.get(`${API_BASE_URL}/posts`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getPost(id) {
    const res = await axios.get(`${API_BASE_URL}/posts/${id}`)
        .catch(err => {
            return
        })
    return res.data
}
