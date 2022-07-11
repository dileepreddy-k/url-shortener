import React, { useState, useEffect } from 'react';

import apiClient from '../api/api';

import { Form, Input, Row, Col, Button } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UrlForm = ({ getUrlList }) => {

    const [url, setUrl] = useState(undefined);
    const [status, setStatus] = useState(undefined);
    const [urlList, setUrlsList] = useState(JSON.parse(localStorage.getItem('urlHash')) || []);

    const renderToast = (type, message) => {

        const toastConfig = {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false
        }

        if (type === 'success')
            toast.success(message, toastConfig)
        else if (type === 'error')
            toast.error(message, toastConfig)
        else if (type === 'warning')
            toast.warn(message, toastConfig)
        else if (type === 'info')
            toast.info(message, toastConfig)
        else
            toast(message, toastConfig)  
    }

    useEffect(() => {
        localStorage.setItem('urlHash', JSON.stringify(urlList));
        getUrlList(urlList);
    }, [getUrlList, urlList]);

    const apiShortenUrl = () => {
        apiClient
            .post('/shorten', { longUrl: url })
            .then((response) => {
                setStatus("");
                setUrlsList([...urlList, response.data]);
                renderToast('success', 'URL Saved');
            }).catch((err) => {
                setStatus('error');
                renderToast('error', err.response.data);
            });
    }
    
    const renderErrorMessage = () => {
        setStatus('error');
        renderToast('error', 'Please, provide a valid url')
    }

    const submitHandler = () => {
        url ? apiShortenUrl() : renderErrorMessage();
    }

    const setUrlValue = (e) => {
        setStatus(undefined);
        setUrl(e.target.value);
    }

    return (
        <>
            <Form onFinish={submitHandler}>
                <ToastContainer />
                <Row align='middle' justify='center'>
                    <Col span={18}>
                        <Form.Item name="url">
                            <Input
                                status={status ? 'error' : ''}
                                type="text"
                                placeholder="Enter URL"
                                value={url}
                                onChange={setUrlValue}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>Shorten</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default UrlForm;