import React from 'react'

import LoginFrom from '../../components/LoginForm'
import Footer from '../../components/Footer'
import './index.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="logos">
                <h2 className="title">综设管理系统</h2>
                <p className="desc">电子科技大学综合课程设计管理系统</p>
            </div>
            <LoginFrom />
            <Footer />
        </div>
    )
}

export default Login
