import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function getLanguages() {
    const res = await axios.get(`${API_BASE_URL}/languages`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getFrameworks() {
    const res = await axios.get(`${API_BASE_URL}/frameworks`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getDatabases() {
    const res = await axios.get(`${API_BASE_URL}/databases`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getServices() {
    const res = await axios.get(`${API_BASE_URL}/services`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getUserLanguages(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/languages`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getUserFrameworks(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/frameworks`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getUserDatabases(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/databases`)
        .catch(err => {
            return
        })
    return res.data
}

export async function getUserServices(userId) {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/services`)
        .catch(err => {
            return
        })
    return res.data
}
