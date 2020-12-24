import React from 'react'
import { Row, Col, Statistic, Card } from 'antd'

import './index.scss'

const ShowStatus = props => {
    const { status } = props
    return (
        <>
            <Row gutter={16} style={{ margin: '16px auto', padding: '0 16px' }}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="课题总数"
                            value={status?.todo + status?.done || 0}
                            className="value-style"
                            valueStyle={{ fontSize: 36, fontWeight: 500 }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="已完成课题"
                            value={status?.done}
                            valueStyle={{ fontSize: 36, fontWeight: 500, color: 'green' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="未完成课题"
                            value={status?.todo}
                            valueStyle={{ fontSize: 36, fontWeight: 500, color: 'red' }}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ShowStatus
