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
    Row,
    Col,
    Statistic,
    Card,
    InputNumber,
    Modal,
    Form
} from 'antd'
import './index.scss'
const Home = props => {
    const [drawerShow, setShow] = useState(false)
    const [detail, setDetail] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [form] = Form.useForm()

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 }
    }

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

    const showModal = record => {
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
        console.log(form.getFieldsValue(), 1)
        try {
            await form.validateFields()
            message.success('保存成功')
            setIsModalVisible(false)
        } catch (e) {}
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
                        onConfirm={confirmDelete}
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
            mession:
                '擦擦擦测测擦擦擦测测擦擦擦测擦擦擦测测擦擦擦测测擦擦擦测测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测',
            status: 1
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
            mession: '擦擦擦测测',
            status: 1
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
            mession: '擦擦擦测测',
            status: 0
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
            mession: '擦擦擦测测',
            status: 0
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
            mession: '擦擦擦测测',
            status: 1
        },
        {
            key: '6',
            name: '张翔',
            tel: 17788889932,
            mail: 'fuchong@uestc.com',
            department: '信息与软件工程学院',
            role: ['老师'],
            status: 0,
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: ['数字动漫'],
            grade: ['大一'],
            mession: '擦擦擦测测'
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
                record.status ? (
                    <a href={record.status}>下载材料</a>
                ) : (
                    <Tag color="warning">未提交</Tag>
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

    const groupData = [
        {
            key: '1',
            name: '俯冲',
            stuId: 2018091608000,
            department: '信息与软件工程学院',
            direction: '数字信息处理',
            status: 1,
            score: 0,
            children: [
                {
                    key: '2',
                    name: '王伟的',
                    stuId: 2018091608000,
                    department: '信息与软件工程学院',
                    topic: '后台管理系统',
                    course: '综合课程设计I',
                    direction: '数字动漫',
                    score: 0
                },
                {
                    key: '3',
                    name: '张翔',
                    stuId: 2018091608000,
                    department: '信息与软件工程学院',
                    topic: '后台管理系统',
                    course: '综合课程设计I',
                    direction: '网络安全',
                    score: 0
                }
            ]
        },
        {
            key: '2',
            name: '王伟的',
            stuId: 2018091608000,
            department: '信息与软件工程学院',
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: '数字动漫',
            status: 1,
            score: 0,
            children: []
        },
        {
            key: '3',
            name: '张翔',
            stuId: 2018091608000,
            department: '信息与软件工程学院',
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: '网络安全',
            status: 0,
            score: 0,
            children: []
        },
        {
            key: '4',
            name: '张翔',
            stuId: 2018091608000,
            department: '信息与软件工程学院',
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: '数字动漫',
            status: 0,
            score: 0,
            children: []
        },
        {
            key: '5',
            name: '张翔',
            stuId: 2018091608000,
            department: '信息与软件工程学院',
            topic: '后台管理系统',
            course: '综合课程设计I',
            direction: '数字信息处理',
            status: 1,
            score: 0,
            children: []
        }
    ]
    return (
        <>
            <Row gutter={16} style={{ margin: '16px auto', padding: '0 16px' }}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="课题总数"
                            value={39}
                            valueStyle={{ fontSize: 36, fontWeight: 500 }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="已完成课题"
                            value={28}
                            valueStyle={{ fontSize: 36, fontWeight: 500, color: 'green' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="未完成课题"
                            value={12}
                            valueStyle={{ fontSize: 36, fontWeight: 500, color: 'red' }}
                        />
                    </Card>
                </Col>
            </Row>
            <div style={{ padding: 24, minHeight: 360, background: '#fff', margin: '18px 24px' }}>
                <Table columns={columns} dataSource={data} />
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
                    <Table columns={groupColumns} dataSource={groupData} />
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
                                            label={form.getFieldValue('student')[field.name].name}
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
        </>
    )
}

export default Home
