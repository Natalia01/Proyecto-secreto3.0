import { Radio } from 'antd';
import React, { useState } from 'react'
import styles from '../../styles/Panel.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const RadioApp = ({ onRadio, value }) => {
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
    const [priorState, setPriorState] = useState('0')
    const handleChange = (e) => {
        onRadio(e)
        setPriorState(e)
    }
    return (
        <>
            <div value={priorState} className={styles.radioGroup}>
                {radioList.map(({ rValue, name, type }) => {
                    return (
                        <label className={styles.radioBtn} onClick={() => handleChange(rValue)}>
                            <span className={cx({ radioSpan: true, radioSpanSelected: (priorState === rValue) ? true : false, [`radioSpan${type}`]: true })} />
                            {name}
                        </label>
                    )
                })}
            </div>
        </>

    );
};
export default RadioApp;

