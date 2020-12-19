import React, { useState } from 'react'
import {
    Table,
    Tag,
    Space,
    Button,
    message,
    Popconfirm,
    Drawer,
    Divider,
    Descriptions,
    Empty
} from 'antd'
import { useHistory } from 'react-router-dom'
import './index.scss'
import { PlusOutlined } from '@ant-design/icons'
const Overview = props => {
    const [drawerShow, setShow] = useState(false)
    const [detail, setDetail] = useState({})
    const history = useHistory()
    const showDrawer = record => {
        setDetail(record)
        setShow(true)
    }

    const onClose = () => {
        setShow(false)
    }
    const confirmDelete = () => {
        message.success('删除成功')
    }

    const columns = [
        {
            title: '课题名称',
            dataIndex: 'topic',
            key: 'topic',
            render: (text, record) => <a onClick={() => showDrawer(record)}>{text}</a>
        },
        {
            title: '课程名称',
            dataIndex: 'course',
            key: 'course'
        },

        {
            title: '专业方向',
            dataIndex: 'direction',
            key: 'direction',
            render: tags => (
                <>
                    {tags.map(tag => {
                        return <Tag key={tag}>{tag}</Tag>
                    })}
                </>
            )
        },
        {
            title: '选课年级',
            dataIndex: 'grade',
            key: 'grade',
            render: tags => (
                <>
                    {tags.map(tag => {
                        return <Tag key={tag}>{tag}</Tag>
                    })}
                </>
            )
        },
        {
            title: '指导教师',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '手机号',
            dataIndex: 'tel',
            key: 'tel'
        },

        {
            title: '操作',
            key: 'action',

            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="确认删除?"
                        onConfirm={confirmDelete}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button type="primary" danger>
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            )
        }
    ]

    const data = [
        {
            key: '1',
            name: '俯冲',
            tel: 18888888832,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师', '管理员'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字信息处理', '系统与技术'],
            grade: ['大一', '大二', '大三', '大四'],
            mession: '擦擦擦测测'
        },
        {
            key: '2',
            name: '王伟的',
            tel: 18999998842,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['管理员'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫'],
            grade: ['大一'],
            mession: '擦擦擦测测'
        },
        {
            key: '3',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫', '网络安全'],
            grade: ['大一', '大二'],
            mession: '擦擦擦测测'
        },
        {
            key: '4',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫'],
            grade: ['不限'],
            mession: '擦擦擦测测'
        },
        {
            key: '5',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫', '数字信息处理'],
            grade: ['大一'],
            mession: '擦擦擦测测'
        },
        {
            key: '6',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师'],
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫'],
            grade: ['大一'],
            mession: '擦擦擦测测'
        }
    ]
    return (
        <div style={{ padding: 24, minHeight: 360, background: '#fff', margin: '24px' }}>
            <div className="content-header">
                <span className="content-title">课题列表</span>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => history.push('/home/release')}
                >
                    课题发布
                </Button>
            </div>
            <Table columns={columns} dataSource={data} />
            <Drawer
                width={600}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={drawerShow}
            >
                <Descriptions title="课题信息" column={2}>
                    <Descriptions.Item label="课题名称">{detail.topic}</Descriptions.Item>
                    <Descriptions.Item label="专业方向">
                        {detail.direction?.map(tag => {
                            return <Tag key={tag}>{tag}</Tag>
                        })}
                    </Descriptions.Item>
                    <Descriptions.Item label="课程名称">{detail.course}</Descriptions.Item>
                    <Descriptions.Item label="选课年级">
                        {detail.grade?.map(tag => {
                            return <Tag key={tag}>{tag}</Tag>
                        })}
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
                <Descriptions title="教师信息" column={2}>
                    <Descriptions.Item label="姓名">{detail.name}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{detail.tel}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{detail.mail}</Descriptions.Item>
                    <Descriptions.Item label="学院">{detail.department}</Descriptions.Item>
                </Descriptions>
                <Divider />
            </Drawer>
        </div>
    )
}

export default Overview
