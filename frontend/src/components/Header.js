import React from 'react'

import { Button, Layout, Row, Col, Typography } from 'antd';

const Header = () => {
    return (
        <Layout.Header>
            <Row justify='space-between' align='middle'>
                <Col>
                    <Typography.Title level={2} style={{ margin: 0}}>
                        <Button type='link' href="/" style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>Short URL</Button>
                    </Typography.Title>
                </Col>
                <Col>
                    <Button type='link' href="https://github.com/dileepreddy-k/url-shortener.git" target="_blank" rel='noreferrer'>github</Button>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default Header