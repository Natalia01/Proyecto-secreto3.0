import { Layout, Menu, Breadcrumb } from 'antd';
import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Card, Button, Comment, Avatar, Form, List, Input, Row, Col } from 'antd';
import moment from 'moment';
import styles from '../../../styles/Panel.module.css';

const { TextArea } = Input;
const CardsDetails = ({ activeIssue, data, setCommentState }) => {
  const { data:
    {
      email,
      operationNumber,
      priority,
      sentDate,
      resolvedUploadedImages,
      description,
      id,
      tags,
      comment
    } = {} } = activeIssue
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={`N° Operación: ${operationNumber ? operationNumber : ''}`} bordered={false} style={{ width: 300 }}>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>Usuario: </Col>
            <Col span={14}>{email}</Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>Descripción: </Col>
            <Col span={14}>{description}</Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>Prioridad: </Col>
            <Col span={14}>{<div className={`${styles.circleSpan}
                    ${styles[`priority-${priority}`]}`} />}</Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>
              Fecha enviado:
            </Col>
            <Col>{sentDate}</Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>
              Capturas:
            </Col>
            {resolvedUploadedImages ? resolvedUploadedImages.map(({ imageUrl }) =>
              <Col key={imageUrl}>
                <img
                  src={imageUrl}
                  onClick={() => window.open(imageUrl)}
                  className={styles.image} /></Col>) : <div></div>}
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>
              Áreas:
            </Col>
            <Col>{tags}</Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>
              Comentarios:
            </Col>
            <Col>
              {comment}
            </Col>
          </Row>
        </Space>
        <Space size="middle">
          <Row className={styles.detailComponent}>
            <Col span={8}>
              Escribir comentarios:
            </Col>
            <Col>
              {resolvedUploadedImages && <Input onChange={e => setCommentState(e.target.value)} />}
            </Col>
          </Row>
        </Space>
      </Card>

    </div>

  )
}

<style jsx>{`
.site-card-border-less-wrapper {
    padding: 30px;
    background: #ececec;
  }
`
}
</style>


export default CardsDetails;