import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import Cookies from 'js-cookie';
import axios from 'axios';

const IssuesTable = ({ data, setIssuesFunction }) => {
  const cardsDetails = {};
  const { RangePicker } = DatePicker;
  const data1 = data.map(({ data }) => data)
  console.log(data1)
  const dateFormat = 'YYYY/MM/DD';
  const columns = [
    {
      title: 'N° Operación',
      dataIndex: 'email',
      key: 'email',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Fecha',
      dataIndex: 'sentDate',
      key: 'sentDate',
    },
    {
      title: 'Descripción',
      dataIndex: 'operationNumber',
      key: 'operationNumber',
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
      dataIndex: 'prioridad',
      key: 'prioridad',

    },
    {
      title: 'Acciones',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link href='/admin/cardsDetails'>
            <a>Ver detalles</a>
          </Link>

          <a>Revisado</a>
        </Space>
      ),
    },
  ];

  /*  const data = [
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
     }
   ]; */

  return (
    <div>
      <button onClick={() => console.log(data)}>ALLISSUES</button>
      <h1 className="titulo">Administrador de problemas</h1>
      <Table columns={columns} dataSource={data1} />



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
          
        }
        {.revisado{
          
        }
  
        .cards{
          
        }
      }`
      } </style>
    </div>
  )
}

export default IssuesTable