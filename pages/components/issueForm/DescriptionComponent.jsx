import styles from '../../../styles/Panel.module.css';
import { Input, Row, Col,Form } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

function DescriptionComponent({ handleChange, descriptionValue,onSubmit }) {
    const { TextArea } = Input
    return (
        <Row className={styles.description} style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6}>
                Descripción: {' '}
            </Col>
            <Col span={16}>
                <Form.Item
                    name="description"
                    id="description"
                    onChange={handleChange}
                    className={styles.textareaForm}
                    value={descriptionValue}>
                        <Input.TextArea/>
                </Form.Item>
            </Col>
        </Row>
    )
}
export default DescriptionComponent;