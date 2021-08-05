import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from '/styles/Panel.module.css'

const IssueDetailsComponent = ({ images, description, id }) => {
    return (
        <>
            <Row className={styles.detailComponent}>
                <Col>descripción: {description}</Col>
                {images.map(({ imageUrl, imageId }) =>
                    <Col key={id}><img src={imageUrl} /></Col>)}
            </Row>
        </>
    )
}

export default IssueDetailsComponent