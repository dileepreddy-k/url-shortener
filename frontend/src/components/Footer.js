import React from 'react';

import { Layout, Row, Col, Typography } from 'antd';

const Footer = () => {
    return (
        <>
            <Layout.Footer>
                <Row gutter={[16, 16]} align='middle' justify='space-between'>
                    <Col>
                        <Typography.Paragraph style={{margin: 0}}>URL Shortner</Typography.Paragraph>
                    </Col>
                    <Col>
                        <Typography.Paragraph style={{margin: 0}}>&copy; 2022</Typography.Paragraph>
                    </Col>
                </Row>
            </Layout.Footer>
        </>
    )
}

export default Footer;