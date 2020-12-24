import axios from '../axios'

export async function GetTopic() {
    const res = await axios.get('home/gettopic')
    return res.data
}

export async function DeleteTopic(params) {
    const res = await axios.get('home/deletetopic', params)
    return res.data
}
