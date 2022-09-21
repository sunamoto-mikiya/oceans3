import axios from "axios"

const API_BASE_URL = 'http://localhost:81/api'

export async function getUsers() {
    const res = await axios.get(`${API_BASE_URL}/users`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getUser(id) {
    const res = await axios.get(`${API_BASE_URL}/detail/${id}`)
        .catch(err => {
            return
        })
    return res.data
}
