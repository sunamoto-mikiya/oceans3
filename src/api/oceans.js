const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function index() {
    const res = await fetch(`${API_BASE_URL}/tests`)
    if (res.ok) {
        return res.json()
    }
}

export async function store() {
    const res = await fetch(`${API_BASE_URL}/tests`, {
        method: 'POST',
    })
    if (res.ok) {
        return res.json()
    }
}
