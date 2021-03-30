import { useState } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';

import Item from './Item';

function List() {
  const [toDoList, setToDoList] = useState([]);
  console.log('🚀 ~ file: List.jsx ~ line 8 ~ List ~ toDoList', toDoList);

  const [searchKey, setSearchKey] = useState('');

  const filterToDoList = toDoList.filter((item) => {
    return item.title.trim().toLowerCase().indexOf(searchKey.trim().toLowerCase()) !== -1;
  });

  function addTask(values) {
    setToDoList([
      values,
      ...toDoList,
    ])
  }

  function editTask(values, index) {
    const newToDoList = toDoList;
    newToDoList.splice(index, 1, values);
    setToDoList([ ...newToDoList ]);
  }

  function deleteTask(index) {
    const newToDoList = toDoList;
    newToDoList.splice(index, 1);
    setToDoList([...newToDoList]);
  }

  function renderToDoList() {
    return filterToDoList.map((item, index) => {
      return (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          index={index}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      );
    })
  }

  return (
    <Row gutter={24} style={{ maxWidth: 1000, width: '100%', margin: '16px auto 0' }}>
      <Col span={8}>
        <Card title="Add task" size="small">
          <Form
            layout="vertical"
            name="addTask"
            initialValues={{ title: '', description: '' }}
            onFinish={(values) => addTask(values)}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
          </Form>
        </Card>
      </Col>
      <Col span={16}>
        <Input.Search
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search..."
        />
        {renderToDoList()}
      </Col>
    </Row>
  );
}

export default List;
