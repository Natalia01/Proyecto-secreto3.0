import React, { useState } from 'react'
import styles from '../../../styles/Panel.module.css'
import classNames from 'classnames/bind'
import { Row, Col, Checkbox } from 'antd'
import 'antd/dist/antd.css';
const TagsComponent = ({ handleChecklist }) => {
    const CheckboxGroup = Checkbox.Group
    const [checkedList, setCheckedList] = useState()
    const options = ['Customer Service', 'Finanzas', 'Ventas']
    function onChange(list) {
        setCheckedList(list)
        handleChecklist(list)
    }
    return (
        <Row className={styles.radioButtons} style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6}>
                Áreas: {' '}
            </Col>
            <Col span={16}>
                <CheckboxGroup options={options} value={checkedList} onChange={onChange}></CheckboxGroup>
            </Col>
        </Row>

    );
};
export default TagsComponent;

