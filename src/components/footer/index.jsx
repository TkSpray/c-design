import React from 'react'
import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons'
import './index.scss'

const Footer = () => {
    return (
        <footer className="login-footer">
            <div className="links">
                <a title="UESTC" href="https://www.uestc.edu.cn/">
                    UESTC
                </a>
                <a title="github" href="https://github.com/TkSpray">
                    <GithubOutlined />
                </a>
                <a title="cdesign" href="https://github.com/TkSpray/c-design">
                    综合课设
                </a>
            </div>
            <div className="copyright">
                Copyright <CopyrightOutlined /> 2020 By TkSpray
            </div>
        </footer>
    )
}

export default Footer
