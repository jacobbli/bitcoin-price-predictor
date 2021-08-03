import React from 'react';
import { Form, Button, Card, Input, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './LoginForm.css';

class LoginForm extends React.Component {

    submitForm = () => {
        this.props.authStatus()
    }

  render() {
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
                        <Input placeholder="Enter username" />
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
                        <Input.Password placeholder="Enter password"/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ offset: 8, span: 1}}
                        >
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                onClick={this.submitForm}
                            >
                                <Link to="/trend">Login</Link> 
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

  export default LoginForm;