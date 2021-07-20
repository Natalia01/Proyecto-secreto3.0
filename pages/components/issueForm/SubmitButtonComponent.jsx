import { Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

function SubmitButtonComponent({handleSubmit}){
    return(
        <Row>
            <Col span={6} />
            <Col span={16}>
                <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit">
                    Enviar
                </Button>
            </Col>
        </Row>
    )
}
export default SubmitButtonComponent