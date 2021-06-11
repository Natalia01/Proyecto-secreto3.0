import { Radio } from 'antd';
import React, { useState } from 'react'
import styles from '../../styles/Panel.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const RadioApp = () => {
    const radioList = [
        {
            value: 1,
            name: "Leve",
            type: "lime"
        }, {
            value: 2,
            name: "Medio",
            type: "yellow"
        }, {
            value: 3,
            name: "Urgente",
            type: "orange"
        }, {
            value: 4,
            name: "Crítico",
            type: "red"
        }
    ]
    const [priorityState, setPriorityState] = useState('0')
    const handleChange = (value) => {
        setPriorityState(value)
    }
    return (
        <>
            <div className={styles.radioGroup}>
                {radioList.map(({ value, name, type }) => {
                    return (
                        <label className={styles.radioBtn} onClick={() => handleChange(value)}>
                            <span className={cx({ radioSpan: true, radioSpanSelected: (priorityState === value) ? true : false, [`radioSpan${type}`]: true })} />
                            {name}
                        </label>
                    )
                })}
            </div>
        </>

    );
};
export default RadioApp;

