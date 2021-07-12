import React, {useState,useEffect} from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
import {getAllIssues} from '/pages/api'
function IssueListComponent() {
   
    const [issueList, setIssueList] = useState([])
    const issueFunction = async () => {
        setIssueList(await getAllIssues())
    }
    useEffect(() => {
        issueFunction()
    }, [])
    return (        
        <div className={styles.list}>
            <Row className={styles.listTitles}>
                <Col span={4}>Prioridad</Col>
                <Col span={8}>Número de operación</Col>
            </Row>
            {issueList.map(({ data: { email: { issueName, priority } } }) => (
                <Row className={styles.listRows}>
                    <Col span={4}>
                        <div key={issueName} className={`${styles.circleSpan} ${styles[`priority-${priority}`]}`}>

                        </div>
                    </Col>
                    <Col span={8}>
                        {issueName}
                    </Col>
                </Row>
            ))}
        </div>
    )
}
export default IssueListComponent