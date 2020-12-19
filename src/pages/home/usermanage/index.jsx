import React, { useState } from 'react'
import {
    Table,
    Tag,
    Space,
    Button,
    Modal,
    Form,
    Input,
    Select,
    Switch,
    message,
    Popconfirm
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './index.scss'

const UserManage = props => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [form] = Form.useForm()

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 }
    }

    const departmentOptions = [
        { label: '信息与软件工程学院', value: '信息与软件工程学院' },
        { label: '外国语学院', value: '外国语学院' }
    ]

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = async () => {
        try {
            await form.validateFields()
            message.success('保存成功')
            setIsModalVisible(false)
        } catch (e) {}
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const confirmDelete = () => {
        message.success('删除成功')
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
            title: '学院',
            dataIndex: 'department',
            key: 'department'
        },
        {
            title: '角色',
            key: 'role',
            dataIndex: 'role',
            render: tag => (
                <>
                    {
                        <Tag color={tag === '老师' ? 'geekblue' : 'green'} key={tag}>
                            {tag.toUpperCase()}
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
            role: '管理员'
        },
        {
            key: '2',
            name: '王伟的',
            tel: 18999998842,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '管理员'
        },
        {
            key: '3',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '老师'
        },
        {
            key: '4',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '老师'
        },
        {
            key: '5',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '老师'
        },
        {
            key: '6',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '老师'
        },
        {
            key: '7',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: '老师'
        }
    ]

    return (
        <div style={{ padding: 24, minHeight: 360, background: '#fff', margin: '24px' }}>
            <div className="content-header">
                <span className="content-title">用户列表</span>
                <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                    添加用户
                </Button>
            </div>

            <Table columns={columns} dataSource={data} />
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
                    <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                        <Input placeholder="请输入姓名" />
                    </Form.Item>
                    <Form.Item name="tel" label="手机号" rules={[{ required: true }]}>
                        <Input placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item name="mail" label="邮箱" rules={[{ required: true }]}>
                        <Input placeholder="请输入邮箱地址" />
                    </Form.Item>
                    <Form.Item name="department" label="学院" rules={[{ required: true }]}>
                        <Select placeholder="请选择学院" allowClear options={departmentOptions} />
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
