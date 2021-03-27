import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Row, Col, Card } from 'antd';

// import { Space } from 'antd';

function Main() {

    const [toDoList, setToDoList] = useState([
        {
            title: "abc",
            description: "cde"
        },
    ])

    // const [newTask, setNewTask] = useState([
    //     {
    //         title: "",
    //         description: "",
    //     },
    // ])

    const { Search } = Input;

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
            span: 11,
        },
    };

    const onFinish = (values) => {
        console.log('Success:', values);

    setToDoList({
        values,
        ...toDoList
    })
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const deleteTask = () => {

}

const onSearch = value => console.log(value);
return (
    <>
        <Row>
            <Col span={10}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        // remember: true,
                        title: '',
                        description: ''
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your title',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input description',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Add
                            </Button>
                    </Form.Item>
                </Form>
            </Col>

            <Col span={12}>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Col>

        </Row>
        <Col span={12}>
            <Card title="" extra={<div><Button onClick={deleteTask}>Test</Button> <Button onClick={deleteTask}>Delete</Button></div>}>

            </Card>
        </Col>

    </>
);
};

export default Main
