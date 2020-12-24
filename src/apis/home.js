import axios from '../axios'

export async function GetMyTopic() {
    const res = await axios.get('home/getmytopic')
    return res.data
}

export async function GetMember(params) {
    const res = await axios.get('home/getmember', params)
    return res.data
}

export async function SubmitScore(params) {
    const res = await axios.post('home/score', params, {
        headers: { 'Content-Type': 'application/json' }
    })
    return res.data
}
