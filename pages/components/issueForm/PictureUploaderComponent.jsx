import styles from '../../../styles/Panel.module.css';
import { Upload, Button, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React from 'react';
import handler from '../../api/images';

function PictureUploaderComponent() {
    const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const upload = async (file) => {
    console.log(file)
    fetch('../api/images', {
        method: 'POST',
        body: await toBase64(file)
    }).then(response=>JSON.stringify(response))}
    

    return (
        <Row
        className={styles.picUploader}
        style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6} />
            <Col span={16}>
                <Upload onChange={(e)=>upload(e.file.originFileObj)} >
                    <Button icon={<UploadOutlined />}>
                        Adjuntar Capturas
                    </Button>
                </Upload>
            </Col>
        </Row>
    )
}
export default PictureUploaderComponent;

