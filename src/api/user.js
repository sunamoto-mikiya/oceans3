import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function getUser(userId) {
    const res = await axios.get(`${API_BASE_URL}/detail/${userId}`)
        .catch(err => {
            return
        })
    return res.data
}
