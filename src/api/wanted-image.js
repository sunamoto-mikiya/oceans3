import axios from "axios"

const API_BASE_URL = 'http://localhost:81/api'

export async function getWantedImage(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/wanted`)
        .catch(err => {
            return
        })
    return res.data
}
