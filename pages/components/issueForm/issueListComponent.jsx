import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
function IssueListComponent({data}) {
    return (        
        <div className={styles.list}>
                <h1>Estado de problemas enviados</h1>
            <Row className={styles.listTitles}>
                <Col span={4}>Prioridad</Col>
                <Col span={8}>Número de operación</Col>
            </Row>
            {data.map(({ref, data: { email: { operationNumber, priority } } }) => (
                <Row key={ref} className={styles.listRows}>
                    <Col span={4}>
                        <div className={`${styles.circleSpan} ${styles[`priority-${priority}`]}`}/>
                    </Col>
                    <Col span={8}>
                        {operationNumber}
                    </Col>
                </Row>
            ))}
        </div>
    )
}
export default IssueListComponent