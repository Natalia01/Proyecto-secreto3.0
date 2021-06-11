import styles from '../../styles/Panel.module.css';
import { Radio, Select, Option } from 'antd';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
import Selector from './Select1'
import nameApp from './nameApp'


function Form() {
    const [issueListState, setIssueListState] = useState('')
    const [selectState, setSelectState] = useState('')
    const [nameState, setNameState] = useState('')
    const [priorityState, setPriorityState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')
    /* const handleChange = (value) => {
        console.log(value)
        console.log(selectState)
        setSelectState(value)
    } */
    const handleSetSelected = (selectState) => {
        setSelectState(selectState)
        console.log(selectState)
    }
    return (
        <div className={styles.wrapper}>
            <h1>Soporte</h1>
            <div className={styles.app}>
                <form className={styles.form}>
                    <div className={styles.CSName}>
                        Nombre Trabajador (Correo(?)): {' '}
                        <Selector onSetSelected={handleSetSelected} />
                    </div>

                    <div className={styles.name}>
                        Nombre problema: {' '}
                        <nameApp />
                        <input type="text">

                        </input>
                    </div>

                    {/* 0: resuelto 1: posible mejora 2: error leve 3: importante 4: crítico */}
                    <div className={styles.radioButtons}>
                        Prioridad: {' '}
                        <RadioApp />

                    </div>
                    <div className={styles.description}>
                        Descripción: {' '}
                        <textarea>

                        </textarea>
                    </div>

                    <button type="button">
                        Enviar
                    </button>
                </form>

                <div className={styles.list}>

                </div>
            </div>
        </div >
    )
}
export default Form;