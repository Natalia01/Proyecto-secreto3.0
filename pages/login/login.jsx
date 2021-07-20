import styles from '../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Cookies from 'js-cookie'
import { createUser, login } from '../api';
import { useRouter } from 'next/router';
import {sessionCheck} from '/components/loginCookies'

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

const LoginRegister = () => {

  const router = useRouter() //para redireccionar a páginas
  const [username, setUsername] = useState(''); //user state en login
  const [password, setPassword] = useState(''); //password state en login
  const [registerUsername, setRegisterUsername] = useState(''); //user state en registro
  const [registerPassword, setRegisterPassword] = useState(''); //password state en registro
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function handleUsernameChange(e) {  //actualiza el user state
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {//actualiza el password state
    setPassword(e.target.value);
  }

  async function handleSubmitRegister(e) {
    e.preventDefault();
    resetInputField();
    await createUser(username, password) //espera la query
    alert("Usuario registrado con éxito")
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    const key = await login(username, password)
    if (key) {
      Cookies.set('sessionKey', key.secret)
      Cookies.set('username', username)
    }
    if (Cookies.get('sessionKey')) {
      router.push('../crud/issueForm')
    }
  }

  function resetInputField() {
    setRegisterUsername('')
    setRegisterPassword('')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginApp}>
        <div>
          <h1 className="login">Inicio de Sesión</h1>
          <Form
            id='login'
            {...layout}
            name="basic"
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
              <div className={styles.loginTextInput}>
                <Input
                  onChange={handleUsernameChange} />@klog.co
              </div>
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
              <div className={styles.loginTextInput}>
                <Input.Password
                  onChange={handlePasswordChange} />
              </div>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Recuérdame</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={handleSubmitLogin}>
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>

          <style jsx>{`
    .login{
      text-align: center;
      margin-top: 50px;
    }

    Username{
      display: block;
    }
    `

          }</style>
        </div>
        <div className={styles.registration}>
          <h1 className="login">Registro de usuario</h1>
          <Form
            id='register'
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              value={registerUsername}
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <div className={styles.loginTextInput}>
                <Input
                  onChange={handleUsernameChange} />@klog.co
              </div>
            </Form.Item>

            <Form.Item
              label="Password"
              value={registerPassword}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <div className={styles.loginTextInput}>
                <Input.Password
                  onChange={handlePasswordChange} />
              </div>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={handleSubmitRegister}>
                Registrarse
              </Button>
            </Form.Item>
          </Form>

          <style jsx>{`

    .login{
      text-align: center;
    }

    Username{
      display: block;
    }
    `

          }</style>
        </div>
      </div>
    </div >
  )
}
export default sessionCheck(LoginRegister);