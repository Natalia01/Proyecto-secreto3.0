
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import SessionContext, { SessionProvider } from '../../context/session'
import React, { useContext } from 'react'
import SessionContext from '../../context/session';
import { createUser, login } from '../api';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [state, dispatch] = React.useReducer(sessionReducer, { user: null })
  const SessionContext = useContext(SessionContext)
  const { user } = sessionContext.state

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }
  function handleSubmitRegister(e) {
    e.preventDefault();
    createUser(username, password);
    resetInputField();
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    await login(username, password)
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <SessionProvider value={{ state, dispatch }}>
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
      </SessionProvider>
    </div>
  );
};
export default Demo
//ReactDOM.render(<Demo />, mountNode);





