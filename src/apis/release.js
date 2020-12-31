import axios from '../axios'

export async function SubmitTopic(params) {
    console.log(params)
    const res = await axios.post('/topic/add', params)
    return res.data
}
