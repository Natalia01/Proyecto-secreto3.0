import React, { useState } from 'react'
import styles from '../../../styles/Panel.module.css'
import classNames from 'classnames/bind'
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
    const [priorState, setPriorState] = useState('0')
    const handleChange = (e) => {
        onRadio(e) //onRadio se pasa como prop desde la página de formulario
        setPriorState(e) //cambia el estado interno 
    }
    return (
        <>
            <div value={priorState} className={styles.radioGroup}>
                {radioList.map(({ rValue, name, type }) => {
                    return (
                        <label key={name} className={styles.radioBtn} onClick={() => handleChange(rValue)}>
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

