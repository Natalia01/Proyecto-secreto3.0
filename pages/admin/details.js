import { Layout, Menu, Breadcrumb } from 'antd';
import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker} from 'antd';
import moment from 'moment';



const details = () =>
{
    const { Header, Content, Footer } = Layout;

    return(
        <div>
            <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header> 
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Link href = '/admin/issueAdmin'>
          <Breadcrumb.Item>
          <a>Administrador de problemas</a>
          </Breadcrumb.Item>
          </Link>
        <Breadcrumb.Item>Detalles</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Aqui va la descripción del problema </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>,
  
);
<style jsx>{`
.site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }`
    
}

</style>

        </div>)
}
    

export default details;