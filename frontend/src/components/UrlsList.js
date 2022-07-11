import React from 'react';

import { Card, Row, Col, Divider, Button } from 'antd';
import { LinkOutlined, CopyOutlined } from '@ant-design/icons';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const UrlsList = ({ urlsList }) => {

    return (
        <>
            <Card>
            {
                urlsList && urlsList.map((el, index) => {
                    return (   
                        <>                     
                            <Row key={el._id} align='middle' justify='space-between' gutter={[16, 16]}>
                                <Col span={12}>{el.longUrl}</Col>
                                <Col span={6} type="flex" align="end">
                                    <Button type='link' href={el.shortUrl} target="_blank" rel='noreferrer'>{el.shortUrl}</Button>
                                </Col>
                                <Col span={3} type="flex" align="middle">
                                    <CopyToClipboard text={el.shortUrl}>
                                        <Button type='primary' icon={<CopyOutlined />} size="large">Copy</Button>
                                    </CopyToClipboard>
                                </Col>
                                <Col span={3} type="flex" align="middle">
                                    <Button type='primary' href={el.shortUrl} target="_blank" rel='noreferrer' icon={<LinkOutlined />} size="large">Open</Button>
                                </Col>
                            </Row>
                            {
                                urlsList.length !== index + 1 ? <Divider /> : ''
                            }
                        </>
                    )
                })
            }
            </Card>
        </>
    )
}

export default UrlsList;