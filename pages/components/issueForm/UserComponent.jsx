import styles from '../../../styles/Panel.module.css';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import Cookies from 'js-cookie';
import React from 'react';

function UserComponent({ handleLogout }) {
    return (
        <>
            <Row className={styles.selectDiv} style={{ fontWeight: "bold", marginTop: 8 }}>
                <Col span={6}>
                    Correo trabajador:
                </Col>
                <Col span={16} className={styles.username}>
                    {Cookies.get('username')}@klog.co
                </Col>
            </Row>
            <Row>
                <Col span={6} />
                <Col span={16}>
                    ¿No eres tú? Intenta iniciar sesión nuevamente pulsando <a onClick={handleLogout}>{' '}aquí</a>
                </Col>
            </Row>
        </>
    )
}
export default UserComponent;