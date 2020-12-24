import React, { useEffect, useState, useContext } from 'react'
import { Layout, Menu, Avatar, Dropdown, PageHeader } from 'antd'
import { Switch, Route, Redirect, withRouter, NavLink, useLocation, Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './index.scss'
import route from '../../routes/index'
import UESTC from '../../assets/images/UESTC.png'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { UserContext } from '../../index'

const { Header, Sider, Content } = Layout

const App = props => {
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    const user = useContext(UserContext)
    useEffect(() => {
        setPath(location.pathname)
    }, [location])

    const breadcrumbRender = (route, params, routes, paths) => {
        const last = routes.indexOf(route) === routes.length - 1
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        )
    }

    const menu = (
        <Menu style={{ width: 120 }}>
            <Menu.Item icon={<LogoutOutlined />}>
                <NavLink to="/login">退出登录</NavLink>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Sider
                width={208}
                theme="light"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    zIndex: 99
                }}
                className="shadow-sider"
            >
                <div className="logo">
                    <NavLink to="/home/welcome">
                        <img src={UESTC} alt="" />
                    </NavLink>
                </div>
                <Menu selectedKeys={[path]} mode="inline">
                    {route.map(item => {
                        if (item.name === '用户管理' && !user.userState.role) {
                            return <></>
                        }
                        return (
                            <Menu.Item key={item.path} icon={item.icon}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout
                style={{
                    marginLeft: 208,
                    position: 'relative',
                    minHeight: '100vh',
                    paddingBottom: 80
                }}
            >
                <Header
                    style={{
                        background: '#fff',
                        textAlign: 'center',
                        padding: 0,
                        height: 48,
                        lineHeight: 48,
                        zIndex: 98
                    }}
                    className="shadow-header header"
                >
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <div className="avatar-wrapper">
                            <Avatar
                                style={{ backgroundColor: '#1890ff' }}
                                icon={<UserOutlined />}
                            />
                            <span>{user.userState.name}</span>
                        </div>
                    </Dropdown>
                </Header>
                <Content>
                    <Switch>
                        {route.map(item => {
                            if (item.name === '用户管理' && !user.userState.role) {
                                return <></>
                            }
                            return (
                                <Route
                                    exact
                                    key={item.path}
                                    path={item.path}
                                    render={props => (
                                        <>
                                            <PageHeader
                                                className="site-page-header shadow"
                                                title={item.name}
                                                style={{ backgroundColor: '#fff' }}
                                                breadcrumb={{
                                                    routes: [
                                                        {
                                                            path: 'welcome',
                                                            breadcrumbName: '首页'
                                                        },
                                                        {
                                                            breadcrumbName: item.name
                                                        }
                                                    ],
                                                    itemRender: breadcrumbRender
                                                }}
                                            />
                                            <item.component title={item.name} />
                                        </>
                                    )}
                                />
                            )
                        })}
                        <Redirect from="/home" to="/home/welcome" exact />
                    </Switch>
                </Content>
                <Footer style={{ paddingLeft: 208 }} />
            </Layout>
        </Layout>
    )
}

export default withRouter(App)
