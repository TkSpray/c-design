import axios from '../axios'

export async function GetTopic() {
    const res = await axios.get('/topic/get-all')
    return res.data
}

export async function DeleteTopic(params) {
    const res = await axios.get('/topic/delete', { params: params })
    return res.data
}
