import { Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

function SubmitButtonComponent({ onSubmit }) {
    return (
        <Row>
            <Col span={6} />
            <Col span={16}>
                <Button
                    onClick={() => onSubmit()}
                    type="primary">
                    Enviar
                </Button>
            </Col>
        </Row>
    )
}
export default SubmitButtonComponent