import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

const axiosInstance = axios.create({
    withCredentials: true,
    //请求前处理数据
    transformRequest: [
        function (data) {
            data = qs.stringify(data)
            return data
        }
    ],
    paramsSerializer(params) {
        return qs.stringify(params, {
            arrayFormat: 'repeat'
        })
    }
})

axiosInstance.interceptors.response.use(
    res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            message.error(error.data.response || '系统繁忙，请稍后再试')
            return Promise.reject(error.response)
        }
    }
)

export default axiosInstance
