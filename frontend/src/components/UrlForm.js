import React, { useState } from 'react';

import apiClient from '../api/api';

import { Form, Input, Row, Col, Button } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UrlForm = () => {

    const [url, setUrl] = useState("");
    const [status, setStatus] = useState(undefined);

    const renderToast = (type, message) => {

        const toastConfig = {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
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

    const submitHandler = () => {

        apiClient
            .post('/shorten', { longUrl: url })
            .then(() => {
                setStatus("");
                renderToast('success', 'URL Saved');
            }).catch((err) => {
                setStatus('error');
                renderToast('error', err.response.data);
            });
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
                                onChange={(e) => setUrl(e.target.value)}
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

const ToastAlert = ({ type, message }) => {

    console.log('Dummy');

    const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    if (type === 'success')
        toast.success(message, toastConfig)
    else if (type === 'error')
        toast.error(message, toastConfig)
    else if ( type === 'warning')
        toast.warn(message, toastConfig)
    else if (type === 'info')
        toast.info(message, toastConfig)
    else
        toast(message, toastConfig)        
}

export default UrlForm;