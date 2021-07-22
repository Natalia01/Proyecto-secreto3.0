import styles from '../../../styles/Panel.module.css';
import { Form,Input, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';


function OperationNumberComponent({ handleChange, operationValue }) {
    return (
        <Row className={styles.name} style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6}>
                Número operación: {' '}
            </Col>
            <Col span={16}>
                <Form.Item
                    name="operationNumber"
                    className={styles.nameInput}
                    id="operationNumber"
                    required={true}
                    onChange={handleChange}
                    value={operationValue} >
                <Input/>
                </Form.Item>
            </Col>
        </Row>
    )
}
export default OperationNumberComponent;