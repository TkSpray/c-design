import home from '../pages/home/welcome'
import usermanage from '../pages/home/usermanage'
import overview from '../pages/home/overview'
import release from '../pages/home/release'

import { HomeOutlined, CopyOutlined, FileAddOutlined, UserOutlined } from '@ant-design/icons'

const routes = [
    {
        name: '我的主页',
        path: '/home/welcome',
        component: home,
        icon: <HomeOutlined />,
        breadcrumbName: '我的主页'
    },
    {
        name: '课题总览',
        path: '/home/overview',
        component: overview,
        icon: <CopyOutlined />,
        breadcrumbName: '课题总览'
    },
    {
        name: '课题发布',
        path: '/home/release',
        component: release,
        icon: <FileAddOutlined />,
        breadcrumbName: '课题发布'
    },
    {
        name: '用户管理',
        path: '/home/usermanage',
        component: usermanage,
        icon: <UserOutlined />,
        breadcrumbName: '用户管理'
    }
]

export default routes
