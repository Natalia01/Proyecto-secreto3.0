import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Alert } from 'antd';
import { DatePicker } from 'antd';
import styles from '../../../styles/Panel.module.css'

const IssuesTable = ({ setActiveIssue, activeIssue, data }) => {
  const cardsDetails = {};
  const { RangePicker } = DatePicker;
  const data1 = data.map(({ ref: { '@ref': { id } }, data }) => { return { id, ...data } })
  const dateFormat = 'YYYY/MM/DD';
  let activeDetail
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
      title: 'Código',
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
            let color = tag.length > 7 ? 'geekblue' : 'green';
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
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => (
        <div className={`${styles.circleSpan}
                    ${styles[`priority-${priority}`]}`} />
      )
    },
    {
      title: 'Acciones',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <Space size="middle">
          <div className={styles.icons} onClick={async () => {
            activeDetail = id
            setActiveIssue(data.find(({ ref: { '@ref': { id } } }) => id === activeDetail))
          }}>Ver detalles</div>
          <a>Revisado</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
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