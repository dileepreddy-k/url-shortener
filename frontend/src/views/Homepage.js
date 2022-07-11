import React, { useState, useEffect } from 'react';

import Layout from '../Layout/Layout';

import UrlForm from '../components/UrlForm'; 
import UrlsList from '../components/UrlsList';

import { Row, Col } from 'antd';

const Homepage = () => {

    const [urlList, setUrlList] = useState([]);

    const getUrlList = (list) => {
        setUrlList(list);
    }
    
    return (
        <>
            <Layout>
                <Row>
                    <Col span={24}>
                        <UrlForm getUrlList={getUrlList}/>
                    </Col>
                </Row>                
                <UrlsList urlsList={urlList}/>
            </Layout>
        </>
    )
}

export default Homepage;