// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/api/user/login', 'get', {
    code: 0,
    data: {
        role: ['管理员', '老师']
    },
    msg: '登录成功'
})
