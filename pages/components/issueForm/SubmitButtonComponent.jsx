import { Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

function SubmitButtonComponent({ onSubmit, validation }) {
    return (
        <Row>
            <Col span={6} />
            <Col span={16}>
                <Button
                    disabled={validation}
                    onClick={() => onSubmit()}
                    type="primary">
                    Enviar
                </Button>
            </Col>
        </Row>
    )
}
export default SubmitButtonComponent