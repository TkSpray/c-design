import axios from '../axios'

export async function GetMyTopic(params) {
    console.log(params)
    const res = await axios.get('/topic/get-by-teacher', { params: params })
    return res.data
}

export async function GetMember(params) {
    const res = await axios.get('/student/get-by-topic', { params: params })
    return res.data
}

export async function SubmitScore(params) {
    const res = await axios.post('/student/add-score', params)
    return res.data
}
