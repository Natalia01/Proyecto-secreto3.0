
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import Layout from '../../components/layout'
import 'antd/dist/antd.css';
import Firebase from '../server/firebase';

class Login extends React.Component{
  //variables de estado 
  state = {
    autenticado : false,
    usuario : "",
    firebase: null
  }

  componentDidMount(){
    const firebase = new Firebase();

    //saber si el usuario está logeado o no
    //onAuthSatetChanged permite evaluar si el usuario está conectado o no
    firebase.auth.onAuthStateChanged(authUser => {
     //si el usuario está conectado cambia el estado a true
      authUser 
      ? this.state({
        autenticado: true,
        usuario: firebase.auth.currentUser.email,
        firebase: firebase
      })
      //si no está conectado muestra (pinta)
      :firebase.firebaseui.start("#firebaseui-auth-container"),{
        signInSuccessUrl: "/login/login-nat",
        
        callbacks:
        

      }
    }) 
  }
}

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
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div>
        <h1 className="login">Inicio de Sesión</h1>
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
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
  );
};
export default Demo

//ReactDOM.render(<Demo />, mountNode);

      


    
