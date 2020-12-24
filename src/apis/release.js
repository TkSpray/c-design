import axios from '../axios'

export async function SubmitTopic(params) {
    const res = await axios.post('home/release', params, {
        headers: { 'Content-Type': 'application/json' }
    })
    return res.data
}
