import styles from '../../../styles/Panel.module.css';
import { Upload, Button, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React from 'react';

function PictureUploaderComponent() {
    function getBase64(file){      
        return new Promise((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onLoad=() => resolve(reader.result);
            reader.onerror = error=> reject(error);
            reader.readAsBinaryString(file.originFileObj);
            console.log(reader.readAsBinaryString(file.originFileObj));
        });
    }
    return (
        <Row className={styles.picUploader} style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6} />
            <Col span={16}>
                <Upload onChange={(file)=>getBase64(file.originFileObj)} >
                    <Button icon={<UploadOutlined />}>
                        Adjuntar Capturas
                    </Button>
                    <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg=="/>
                </Upload>
            </Col>
        </Row>
    )
}
export default PictureUploaderComponent;

