import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, message, Popconfirm, Drawer, Divider, Descriptions } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.scss'
import { PlusOutlined } from '@ant-design/icons'
import { GetTopic, DeleteTopic } from '../../../apis/overview'
const Overview = props => {
    const [drawerShow, setShow] = useState(false)
    const [detail, setDetail] = useState({})
    const history = useHistory()
    const [topiclist, setTopiclist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTopicList()
    }, [])
    const showDrawer = record => {
        setDetail(record)
        setShow(true)
    }

    const onClose = () => {
        setShow(false)
    }
    const confirmDelete = async tid => {
        message.loading({ content: '删除中', key: 'Delete' })
        try {
            const res = await DeleteTopic({ tid })
            if (res.code === 0) {
                await getTopicList()
                message.success({ content: '删除成功', key: 'Delete' })
            } else {
                message.error({ content: res.msg || '删除失败', key: 'Delete' })
            }
        } catch (e) {
            message.error({ content: '删除失败', key: 'Delete' })
        }
    }

    const getTopicList = async () => {
        try {
            const res = await GetTopic()
            if (res.code === 0) {
                setTopiclist(res.data.topiclist)
                setLoading(false)
            } else {
                message.error('获取数据失败')
            }
        } catch (err) {
            console.log(err)
        }
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
            title: '课题状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <Tag color={record.status ? 'green' : 'warning'}>
                    {record.status ? '已完成' : '未完成'}
                </Tag>
            )
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="确认删除?"
                        onConfirm={() => confirmDelete(record.tid)}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button danger type="text">
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            )
        }
    ]

    return (
        <div className="content-wrapper">
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
            <Table columns={columns} dataSource={topiclist} loading={loading} />
            <Drawer
                width={360}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={drawerShow}
            >
                <Descriptions title="课题信息" column={1}>
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
                    <Descriptions.Item label="课题状态">
                        {
                            <Tag color={detail.status ? 'green' : 'red'}>
                                {detail.status ? '已完成' : '未完成'}
                            </Tag>
                        }
                    </Descriptions.Item>
                </Descriptions>
                <Descriptions column={1}>
                    <Descriptions.Item label="主要任务">{detail.mession}</Descriptions.Item>
                </Descriptions>
                <Divider />
                <Descriptions title="教师信息" column={1}>
                    <Descriptions.Item label="姓名">{detail.name}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{detail.tel}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{detail.mail}</Descriptions.Item>
                </Descriptions>
                <Divider />
            </Drawer>
        </div>
    )
}

export default Overview
