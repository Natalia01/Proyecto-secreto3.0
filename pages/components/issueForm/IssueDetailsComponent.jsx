import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'

const IssueDetailsComponent = ({ resolvedUploadedImages, description, id }) => {
    return (
        <div className={styles.list}>
            <Row className={styles.detailComponent}>
                <Col>Descripción: {description}</Col>
            </Row>
            <Row className={styles.detailComponent}>
                Capturas:
                {resolvedUploadedImages.map(({ imageUrl }) =>
                    <Col key={id}><img src={imageUrl} onClick={() => window.open(imageUrl)} className={styles.image} /></Col>)}

            </Row>
        </div>
    )
}

export default IssueDetailsComponent