import styles from '../../../styles/Panel.module.css';
import { Upload, Button, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React from 'react';

function PictureUploaderComponent({ onChange }) {
    return (
        <Row
            className={styles.picUploader}
            style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6} />
            <Col span={16}>
                <Upload onChange={e => {
                    if (e.file.status === 'done') {
                        onChange(e)
                    }
                }}>
                    <Button icon={<UploadOutlined />}>
                        Adjuntar Capturas
                    </Button>
                </Upload>
            </Col>
        </Row>
    )
}
export default PictureUploaderComponent;

