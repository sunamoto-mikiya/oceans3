import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function getWantedImage(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/wanted`)
        .catch(err => {
            return
        })
    return res.data
}
