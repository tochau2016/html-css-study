import React from 'react'
import { Form, Input, Button, Layout } from 'antd';
import './Form.css'

function LoginForm() {
    const { Content } = Layout;

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Content  className="content-form">
                <h4>SIGN IN</h4>
            <Form
               {...layout}
               className="form"
               name="basic"
               initialValues={{
                   remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button className="btn-signin" type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
            </Content>
        </div>
    )
}

export default LoginForm
