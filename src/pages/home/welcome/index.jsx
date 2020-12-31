import React, { useState, useEffect, useContext } from 'react'
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
    InputNumber,
    Modal,
    Form,
    Spin
} from 'antd'
import './index.scss'
import ShowStatus from '../../../components/ShowStatus'
import { GetMyTopic, GetMember, SubmitScore } from '../../../apis/home'
import { DeleteTopic } from '../../../apis/overview'
import { UserContext } from '../../../index'
const Home = props => {
    const [drawerShow, setShow] = useState(false)
    const [detail, setDetail] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [form] = Form.useForm()
    const [topiclist, setTopiclist] = useState({})
    const [memberlist, setMemberlist] = useState([])
    const [loading, setLoading] = useState(true)
    const [memberLoading, setMemberloading] = useState(true)
    const user = useContext(UserContext)

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 }
    }
    const getTopicList = async uid => {
        try {
            const res = await GetMyTopic({ uid })
            if (res.code === 0) {
                setTopiclist(res.data)
                setLoading(false)
            } else {
                message.error('获取数据失败')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTopicList(user.userState.uid || 0)
    }, [user.userState.uid])

    const showDrawer = record => {
        setDetail(record)
        setShow(true)
        getMemberList(record.tid)
    }

    const getMemberList = async tid => {
        try {
            const res = await GetMember({ tid })
            if (res.code === 0) {
                setMemberlist(res.data.stulist)
                setMemberloading(false)
            } else {
                message.error('获取学生数据失败')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const onClose = async () => {
        setShow(false)
        await getTopicList(user.userState.uid)
    }
    const confirmDelete = async tid => {
        message.loading({ content: '删除中', key: 'Delete' })
        try {
            const res = await DeleteTopic({ tid })
            if (res.code === 0) {
                await getTopicList(user.userState.uid)
                message.success({ content: '删除成功', key: 'Delete' })
            } else {
                message.error({ content: res.msg || '删除失败', key: 'Delete' })
            }
        } catch (e) {
            message.error({ content: '删除失败', key: 'Delete' })
        }
    }

    const showModal = async record => {
        const { name, stuId, score } = record
        const student = [{ name, stuId, score }]

        student.push(
            ...record.children?.map(item => {
                const { name, stuId, score } = item
                return { name, stuId, score }
            })
        )

        form.setFieldsValue({ student })
        setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleOk = async () => {
        try {
            const values = await form.validateFields()
            message.loading({ content: '保存中', key: 'Ok' })
            const res = await SubmitScore(values)
            if (res.code === 0) {
                await getMemberList()
                message.success({ content: '保存成功', key: 'Ok' })
                setIsModalVisible(false)
            } else {
                message.error({ content: res.msg || '保存失败', key: 'Ok' })
            }
        } catch (e) {
            message.error({ content: '保存失败', key: 'Ok' })
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

    const groupColumns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '学号',
            dataIndex: 'stuId',
            key: 'stuId'
        },
        {
            title: '专业方向',
            dataIndex: 'direction',
            key: 'direction'
        },
        {
            title: '材料状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) =>
                record.url ? (
                    <a href={record.url}>下载材料</a>
                ) : (
                    'url' in record && <Tag color="warning">未提交</Tag>
                )
        },
        {
            title: '分数',
            dataIndex: 'score',
            key: 'score',
            align: 'center'
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record) =>
                record.children ? (
                    <Space size="middle">
                        <Button type="primary" ghost onClick={() => showModal(record)}>
                            打分
                        </Button>
                    </Space>
                ) : (
                    ''
                )
        }
    ]

    return (
        <>
            <Spin spinning={loading}>
                <ShowStatus status={{ done: topiclist.done, todo: topiclist.todo }} />
                <div className="content-wrapper" style={{ margin: '18px 24px' }}>
                    <Table columns={columns} dataSource={topiclist.topiclist} />
                    <Drawer
                        width={960}
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={drawerShow}
                    >
                        <Descriptions title="课题信息" column={3}>
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
                                    <Tag color={detail.status ? 'green' : 'warning'}>
                                        {detail.status ? '已完成' : '未完成'}
                                    </Tag>
                                }
                            </Descriptions.Item>
                        </Descriptions>

                        <Descriptions column={1}>
                            <Descriptions.Item label="主要任务">{detail.mession}</Descriptions.Item>
                        </Descriptions>
                        <Divider />
                        <Table
                            columns={groupColumns}
                            dataSource={memberlist}
                            loading={memberLoading}
                        />
                    </Drawer>
                    <Modal
                        title="小组打分"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        centered
                        okText="确认"
                        cancelText="取消"
                        destroyOnClose
                    >
                        <Form form={form} preserve={false} requiredMark={false} {...layout}>
                            <Form.List name="student">
                                {fields => (
                                    <>
                                        {fields.map(field => (
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'score']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '请输入分数'
                                                    }
                                                ]}
                                                label={
                                                    form.getFieldValue('student')[field.name].name
                                                }
                                            >
                                                <InputNumber placeholder="分数" />
                                            </Form.Item>
                                        ))}
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </Modal>
                </div>
            </Spin>
        </>
    )
}

export default Home
