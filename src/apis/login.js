import axios from '../axios'

export async function Login(params) {
    const res = await axios.get('/login', { params: params })
    return res.data
}
