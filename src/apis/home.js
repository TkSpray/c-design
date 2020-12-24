import axios from '../axios'

export async function GetMyTopic(params) {
    const res = await axios.get('/topic/get-by-teacher', params)
    return res.data
}

export async function GetMember(params) {
    const res = await axios.get('/student/get-by-topic', params)
    return res.data
}

export async function SubmitScore(params) {
    const res = await axios.post('/student/add-score', params, {
        headers: { 'Content-Type': 'application/json' }
    })
    return res.data
}
