import React, { useContext } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Login } from '../../apis/login'
import { UserContext } from '../../index'

import './index.scss'
import { useHistory } from 'react-router'

const LoginForm = props => {
    const [form] = Form.useForm()
    const history = useHistory()
    const userContext = useContext(UserContext)

    const loginSubmit = async () => {
        try {
            const res = await Login(form.getFieldsValue())
            if (res.code === 0) {
                message.success('登录成功')
                userContext.stateDispatch({ type: 'SUCCESS', data: res.data })
                history.push('/home/welcome')
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
                onFinish={loginSubmit}
                form={form}
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
