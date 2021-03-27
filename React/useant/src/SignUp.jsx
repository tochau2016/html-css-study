import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

function SignUp() {

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
            span: 22,
        },
    };

    const onFinish = (values) => {
        console.log('Success: ', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
    }

    return (
        <Form {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Vui long nhap Email',
                    },
                    {
                        max: 10,
                        message: 'Khong duoc nhap qua 10 ky tu'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập Username',
                    },
                    {
                        max: 10,
                        message: 'Khong duoc nhap qua 10 ky tu'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu'
                    },
                    {
                        max: 10,
                        message: 'Khong duoc nhap qua 10 so'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Xác nhận mật khẩu"
                name="confirmPassword"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập xác nhận mật khẩu',
                    },
                    {
                        max: 10,
                        message: 'Khong duoc nhap qua 10 so'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Đăng Ký
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUp