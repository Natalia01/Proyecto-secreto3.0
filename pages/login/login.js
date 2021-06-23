
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react'
import { createUserItem } from '../api';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const Demo = () => {
  const [userDetail, setUserDetail] = useState('');
  const [username, setUsername] = useState([]);
  function handleUserDetailChange(e) {
    console.log(e.target.value);
    setUserDetail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    createUserItem(userDetail).then(res => {
      console.log('User added to the database');
    });
  }

  function resetInputField() {
    setUserDetail('')
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={userDetail}
          name={userDetail}
          onChange={handleUserDetailChange}
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Demo
//ReactDOM.render(<Demo />, mountNode);





