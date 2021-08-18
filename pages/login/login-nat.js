import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';
import fauna, { query } from 'faunadb';
import { useRouter } from 'next/router'
import { Alert, Space, Col } from 'antd'
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
  const [username, setUsername] = useState(''); //user state en login
  const [password, setPassword] = useState(''); //password state en login
  const [error, setError] = useState("")
  const router = useRouter()
  const handleUsernameChange = e => setUsername(e.target.value.toLowerCase());
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleSubmitLogin = async e => {
    e.preventDefault();
    const key = await fetch('../api/faunaQueries/userLogin', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
    if (key) {
      Cookies.set('sessionKey', key.secret)
      Cookies.set('username', username)
    }
    if (Cookies.get('sessionKey')) {
      router.push('../admin/issueAdmin')
    }
  };
  const onFinish = values => console.log('Success:', values);
  const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);
  return (
    <div>
      <h1 className="login">Inicio de Sesión</h1>
      <Form
        {...layout}
        name="basic"
        //centrar labels
        wrapperCol={{ span: 10 }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          value={username}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            onChange={handleUsernameChange} />@klog.co
        </Form.Item>

        <Form.Item
          label="Password"
          value={password}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleSubmitLogin}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          {error ? <Alert {...tailLayout} className="button" message={error} type="error" /> : ''}
        </Form.Item>
      </Form>
      <style jsx>{`
    .login{
      text-align: center;
      margin-top: 50px;
      background: linear-gradient(
        120.04deg,
        #0062ff -5.36%,
        #ff6047 87.93%,
        #f98d51 103.19%
      );
      color: white;
    }
    Username{
      display: block;
    }
  .ant-alert{
    width: 10rem !important;
 }
    `
      }</style>
    </div>
  );
};
export default Demo







