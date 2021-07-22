import React, { useState } from 'react'
import styles from '../../../styles/Panel.module.css'
import classNames from 'classnames/bind'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
const cx = classNames.bind(styles)
const RadioApp = ({ onRadio }) => {
    const radioList = [
        {
            rValue: 1,
            name: "Leve",
            type: "lime"
        }, {
            rValue: 2,
            name: "Medio",
            type: "yellow"
        }, {
            rValue: 3,
            name: "Urgente",
            type: "orange"
        }, {
            rValue: 4,
            name: "Crítico",
            type: "red"
        }
    ]
    const [priorState, setPriorState] = useState('')
    const handleChange = (e) => {
        onRadio(e) //onRadio se pasa como prop desde la página de formulario
        setPriorState(e) //cambia el estado interno del componente
    }
    return (
        <Row className={styles.radioButtons} style={{ fontWeight: "bold", marginTop: 8 }}>
            <Col span={6}>
                Prioridad: {' '}
            </Col>
            <Col span={16}>
                <div
                    value={priorState}
                    className={styles.radioGroup}
                    style={{ fontWeight: "normal" }}>
                    {radioList.map(({ rValue, name, type }) => {
                        return (
                            <label
                                key={name}
                                className={styles.radioBtn}
                                onClick={() => handleChange(rValue)}>
                                <span
                                    className={cx({
                                        radioSpan: true,
                                        radioSpanSelected: (priorState === rValue) ? true : false,
                                        [`radioSpan${type}`]: true
                                    })} />
                                {name}
                            </label>
                        )
                    })}
                </div>
            </Col>
        </Row>

    );
};
export default RadioApp;

