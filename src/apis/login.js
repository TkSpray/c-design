import axios from '../axios'

export async function Login(params) {
    const res = await axios.get('user/login', params)
    return res.data
}
