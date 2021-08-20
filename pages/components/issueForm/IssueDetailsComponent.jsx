import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'
import Cookies from 'js-cookie';

const IssueDetailsComponent = ({ email, resolvedUploadedImages, description, id, tags, comment }) => {
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
                {resolvedUploadedImages.map(({ imageUrl, imageId }) =>
                    <Col key={imageId}><img src={imageUrl} onClick={() => window.open(imageUrl)} className={styles.image} /></Col>)}

            </Row>
            <Row className={styles.detailComponent}>
                <Col span={8}>
                    Áreas:
                </Col>
                <Col>{tags}</Col>
            </Row>
            <Row className={styles.detailComponent}>
                <Col span={8}>
                    Comentarios:
                </Col>
                <Col>
                    {comment}
                </Col>
            </Row>
        </div>
    )
}

export default IssueDetailsComponent