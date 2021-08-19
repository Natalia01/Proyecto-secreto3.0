import { Layout, Menu, Breadcrumb } from 'antd';
import { Table, Tag, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link'
import { Card, Button, Comment, Avatar, Form, List, Input, Row, Col } from 'antd';
import moment from 'moment';
import styles from '../../../styles/Panel.module.css';

const { TextArea } = Input;
const CardsDetails = ({ activeIssue, data }) => {
  const { data: { operationNumber, priority, sentDate, resolvedUploadedImages, description, id, tags } = {} } = activeIssue
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={`N° Operación: ${operationNumber}`} bordered={false} style={{ width: 300 }}>
        <Row className={styles.detailComponent}>
        </Row>
        <Row className={styles.detailComponent}>
          <Col span={8}>Descripción: </Col>
          <Col span={14}>{description}</Col>
        </Row>
        <Row className={styles.detailComponent}>
          <Col span={8}>Prioridad: </Col>
          <Col span={14}>{<div className={`${styles.circleSpan}
                    ${styles[`priority-${priority}`]}`} />}</Col>
        </Row>
        <Row className={styles.detailComponent}>
          <Col span={8}>
            Fecha enviado:
          </Col>
          <Col>{sentDate}</Col>
        </Row>
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
        <Row className={styles.detailComponent}>
          <Col span={8}>
            Áreas:
          </Col>
          <Col>{tags}</Col>
        </Row>
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