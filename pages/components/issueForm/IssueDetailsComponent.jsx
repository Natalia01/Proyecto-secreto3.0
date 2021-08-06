import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
import Cookies from 'js-cookie';

const IssueDetailsComponent = ({ email, resolvedUploadedImages, description, id }) => {
    Cookies.get('username')
    return (
        <div className={styles.list}>
            <Row className={styles.detailComponent}>
            </Row>
            <Row className={styles.detailComponent}>
                <Col span={8}>Descripción: </Col>
                <Col span={14}>{description}</Col>
            </Row>
            <Row className={styles.detailComponent}>
                <Col span={8}>
                    Capturas:
                </Col>
                {resolvedUploadedImages.map(({ imageUrl }) =>
                    <Col key={id}><img src={imageUrl} onClick={() => window.open(imageUrl)} className={styles.image} /></Col>)}

            </Row>
        </div>
    )
}

export default IssueDetailsComponent