import React from 'react'
import axios from '../../axios'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './index.scss'
import { useHistory } from 'react-router'

const LoginForm = val => {
    const { username, password } = val
    const history = useHistory()
    const loginSubmit = async () => {
        try {
            let res = await axios({
                url: 'user/login',
                data: {
                    username: username,
                    password: password
                }
            })
            if (res.data.code === 0) {
                message.success(res.data.msg)
                history.push('/home')
            } else {
                message.error('登录失败')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="login-form">
            <Form
                name="normal_login"
                className="login-form-wrapper"
                initialValues={{ remember: true }}
                onFinish={loginSubmit}
            >
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                    <Input
                        className={'login-form-input'}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="用户名"
                    />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                    <Input
                        className={'login-form-input'}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default LoginForm
