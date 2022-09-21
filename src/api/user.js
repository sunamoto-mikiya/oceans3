import axios from "axios"

const API_BASE_URL = 'http://localhost:81/api'

export async function getUser(userId) {
    const res = await axios.get(`${API_BASE_URL}/detail/${userId}`)
        .catch(err => {
            return
        })
    return res.data
}
