import React from 'react';
import { Form, Button, Card, Input, Row, Col } from 'antd';
import { useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './LoginForm.css';

function LoginForm(props) {
    let history = useHistory();

    function submitForm() {
        props.authStatus();
        history.push("/trend");
    }

    return (
        <div className="login-form">
            <Row justify="center">
                <Col>
                    <Card 
                    id="card"
                    title="Please Login"
                    style={{ width: 400 }}>
                        <Form 
                            name="login-form"
                            wrapperCol={{ offset: 4, span: 16 }}
                            onFinish={submitForm}
                        >
                            <Form.Item
                            name="username"
                            rules={[
                                {
                                required: true,
                                message: 'Please enter a username',
                                },
                            ]}
                            >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please enter a password',
                                },
                            ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button 
                                id="login-button"
                                type="primary" 
                                htmlType="submit"
                                >
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

  export default LoginForm;