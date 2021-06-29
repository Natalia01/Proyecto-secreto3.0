
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import Layout from '../../components/layout'
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import fauna, { query } from 'faunadb';
import {useRouter} from 'next/router'
import { Alert, Space, Col } from 'antd'



  
//Se conecta a fauna
var client = new fauna.Client({
  secret: 'fnAEMaWwwhACBrMqNkUnj5fkK7pqMPprRQLcmyVr',
  keepAlive: false,
})

var q = fauna.query

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

  const [error, setError] = useState("")

  const router = useRouter()
  const onFinish = async (values) => {
    

    let result = await client.paginate(
      q.Match(
        q.Index('get_login'), [values.username, values.password])
      )

    result
  .map(function(ref) {
    return q.Get(ref)
  })
  .each(function(page) {
    if(page.length > 0) {
      router.push('/admin/issueAdmin')
    }else{
   setError("Datos incorrectos"); // Logs the retrieved documents.
  }})
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
      
        <Form.Item {...tailLayout}>
          
        {error ? <Alert {...tailLayout} className="button" message={error} type="error" /> : ''}
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

  .ant-alert{
    width: 10rem !important;

 }
    `
      
    }</style>
          </div> 
  );
};
export default Demo

//ReactDOM.render(<Demo />, mountNode);

      


    
