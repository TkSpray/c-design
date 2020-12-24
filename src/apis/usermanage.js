import axios from '../axios'

export async function GetUser() {
    const res = await axios.get('home/getuser')
    return res.data
}

export async function UserControl(params, flag) {
    const res = await axios.post(flag ? 'home/edituser' : 'home/adduser', params, {
        headers: { 'Content-Type': 'application/json' }
    })
    return res.data
}

export async function DeleteUser(params) {
    const res = await axios.get('home/deleteuser', params)
    return res.data
}
