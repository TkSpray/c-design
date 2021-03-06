import axios from '../axios'

export async function GetUser() {
    const res = await axios.get('/user/get-all')
    return res.data
}

export async function UserControl(params, flag) {
    const res = await axios.post(flag ? '/user/alter' : '/user/add', params)
    return res.data
}

export async function DeleteUser(params) {
    const res = await axios.get('/user/delete', { params: params })
    return res.data
}
