import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Button, Modal, Form, Input, Switch, message, Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './index.scss'
import { GetUser, UserControl, DeleteUser } from '../../../apis/usermanage'

const UserManage = props => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [form] = Form.useForm()
    const [userlist, setUserlist] = useState([])
    const [loading, setLoading] = useState(true)

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 }
    }

    useEffect(() => {
        getForm()
    }, [])

    const getForm = async () => {
        try {
            const res = await GetUser()
            if (res.code === 0) {
                console.log(res)
                setUserlist(res.data.userlist)
                setLoading(false)
            } else {
                message.error('获取用户列表失败')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = async () => {
        try {
            const values = await form.validateFields()
            let editflag = values.uid ? true : false
            !editflag && delete values.uid
            message.loading({ content: '保存中', key: 'Ok' })
            const res = await UserControl(values, editflag)
            if (res.code === 0) {
                await getForm()
                message.success({ content: '保存成功', key: 'Ok' })
                setIsModalVisible(false)
            } else {
                message.error({ content: res.msg || '保存失败', key: 'Ok' })
            }
        } catch (e) {
            message.error({ content: '保存失败', key: 'Ok' })
        }
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const confirmDelete = async uid => {
        message.loading({ content: '删除中', key: 'Delete' })
        try {
            const res = await DeleteUser({ uid })
            if (res.code === 0) {
                await getForm()
                message.success({ content: '删除成功', key: 'Delete' })
            } else {
                message.error({ content: res.msg || '删除失败', key: 'Delete' })
            }
        } catch (e) {
            message.error({ content: '删除失败', key: 'Delete' })
        }
    }

    const editInfo = record => {
        form.setFieldsValue(record)
        setIsModalVisible(true)
    }
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '手机号',
            dataIndex: 'tel',
            key: 'tel'
        },
        {
            title: '邮箱',
            dataIndex: 'mail',
            key: 'mail'
        },
        {
            title: '角色',
            key: 'role',
            dataIndex: 'role',
            render: tag => (
                <>
                    {
                        <Tag color={tag ? 'geekblue' : 'green'} key={tag}>
                            {tag ? '管理员' : '教师'}
                        </Tag>
                    }
                </>
            )
        },
        {
            title: '操作',
            key: 'action',

            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => editInfo(record)}>
                        编辑
                    </Button>
                    <Popconfirm
                        title="确认删除?"
                        onConfirm={() => confirmDelete(record.uid)}
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

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <span className="content-title">用户列表</span>
                <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                    添加用户
                </Button>
            </div>

            <Table columns={columns} dataSource={userlist} loading={loading} />
            <Modal
                title="用户信息"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                okText="确认"
                cancelText="取消"
                destroyOnClose
            >
                <Form
                    {...layout}
                    form={form}
                    validateMessages={{
                        required: '${label}不能为空'
                    }}
                    preserve={false}
                >
                    <Form.Item name="uid" hidden></Form.Item>
                    <Form.Item
                        name="name"
                        label="姓名"
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Input placeholder="请输入姓名" />
                    </Form.Item>
                    <Form.Item
                        name="tel"
                        label="手机号"
                        rules={[
                            {
                                required: true,
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号'
                            }
                        ]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="mail"
                        label="邮箱"
                        rules={[
                            {
                                required: true,
                                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                message: '请输入正确的邮箱地址'
                            }
                        ]}
                    >
                        <Input placeholder="请输入邮箱地址" />
                    </Form.Item>
                    <Form.Item name="password" label="密码" rules={[{ required: true }]}>
                        <Input placeholder="请输入账户密码" />
                    </Form.Item>
                    <Form.Item name="role" label="管理员权限" initialValue={false}>
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default UserManage
