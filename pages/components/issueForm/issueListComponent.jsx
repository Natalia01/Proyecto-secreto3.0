import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
import IssueMapComponent from './IssueMapComponent';
function IssueListComponent({ issueList }) {
    return (
        <div className={styles.list}>
            <h1>Estado de problemas enviados</h1>
            <Row className={styles.listTitles}>
                <Col span={4}>Prioridad</Col>
                <Col span={6}>N° de operación</Col>
                <Col span={6}>Fecha</Col>
                <Col span={4}>Acciones</Col>
                <Col span={4}>Estado</Col>
            </Row>
            {issueList.map(({ ref: { "@ref": { id } }, data: { operationNumber, priority, date, images, state, description } }) => (
                <IssueMapComponent
                    key={id}
                    operationNumber={operationNumber}
                    priority={priority}
                    date={date}
                    images={images}
                    state={state}
                    description={description} />
            ))}
        </div>
    )
}
export default IssueListComponent