import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker} from 'antd';
import moment from 'moment';

const issuesAdmin = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const columns = [
    {
      title: 'N° Orden',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Descripción',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Área',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'Customer') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Severidad',
      key: 'severidad',
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link href = '/admin/details'>
          <a>Ver detalles</a>
          </Link>
          
          <a>Revisado</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['Customer'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return(
    <div>
      <head>
  </head>
    <body>
    </body>
      <h1 className = "titulo">Administrador de problemas</h1>
      <Table className = "columns" columns={columns} dataSource={data}/>


      <style jsx>{`

      .titulo{
        text-align: center;
        margin-top: 30px;
        margin-bot: 30px;
        color: white;
      }
      body{
        background: linear-gradient(
          120.04deg,
          #0062ff -5.36%,
          #ff6047 87.93%,
          #f98d51 103.19%
        );
        margin: 15px
        padding;15px
      }

      Table{
        display: block;
        margin: px
      }
      
      `
      } </style>
    </div> 


  
  )

}




export default issuesAdmin