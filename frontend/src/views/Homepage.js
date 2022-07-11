import React from 'react';

import Layout from '../Layout/Layout';

import UrlForm from '../components/UrlForm'; 
import UrlsList from '../components/UrlsList';

import { Row, Col } from 'antd';

const Homepage = () => {
    return (
        <>
            <Layout>
                <Row>
                    {/* Input field to add long url with submit button */}
                    <Col span={24}>
                        <UrlForm />
                    </Col>
                </Row>
                
                {/* List of added urls from the cookies/localstorage */}
                <UrlsList />
            </Layout>
        </>
    )
}

export default Homepage;