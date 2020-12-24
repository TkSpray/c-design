// 使用 Mock
import Mock from './mock'

export default Mock.mock('/api/login', 'get', {
    code: 0,
    data: {
        uid: '1',
        name: '张翔',
        role: false
    },
    msg: '登录成功'
})
