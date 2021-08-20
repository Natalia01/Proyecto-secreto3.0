import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
import IssueMapComponent from './IssueMapComponent';
function IssueListComponent({ issueList, setIssuesFunction }) {
    return (
        <div className={styles.list}>
            <h1>Estado de problemas enviados</h1>
            <Row className={styles.listTitles}>
                <Col span={4}>Prioridad</Col>
                <Col span={6}>N° de operación</Col>
                <Col span={6}>Fecha de registro</Col>
                <Col span={4}>Acciones</Col>
                <Col span={4}>Estado</Col>
            </Row>
            {issueList.map(({ ref: { "@ref": { id } }, data: { email, operationNumber, priority, sentDate, resolvedUploadedImages, state, description, seenDate, tags, comment } }) => (
                <IssueMapComponent
                    key={id}
                    id={id}
                    email={email}
                    operationNumber={operationNumber}
                    priority={priority}
                    sentDate={sentDate}
                    resolvedUploadedImages={resolvedUploadedImages}
                    state={state}
                    description={description}
                    seenDate={seenDate}
                    setIssuesFunction={setIssuesFunction}
                    tags={tags}
                    comment={comment} />
            ))}
        </div>
    )
}
export default IssueListComponent