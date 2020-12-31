import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

const axiosInstance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    //请求前处理数据
    transformRequest: [
        function (data) {
            return qs.stringify(data, {
                indices: false
            })
        }
    ],
    paramsSerializer(params) {
        return qs.stringify(params, {
            arrayFormat: 'repeat'
        })
    }
})
axiosInstance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded; charset=UTF-8'
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
