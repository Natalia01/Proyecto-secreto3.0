import styles from '../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
import Selector from './Select'
import NameApp from './nameApp'
import ButtonApp from './Button'
import useSWR, { mutate } from 'swr'

function Form() {
    const [currentIssueList, setCurrentIssueList] = useState([''])
    const [selectState, setSelectState] = useState('')
    const [nameState, setNameState] = useState('')
    const [priorityState, setPriorityState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')
    const handleSetSelected = (selectState) => {
        setSelectState(selectState)
        console.log(selectState)
    }
    const handleRadio = (e) => {
        setPriorityState(e)
    }
    const handleSend = () => {
        setCurrentIssueList([selectState, , priorityState,])
    }
    console.log(currentIssueList)
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <div className={styles.app}>
                <form className={styles.form}>
                    <div className={styles.selectDiv}>
                        Nombre Trabajador (Correo(?)): {' '}
                        <Selector onSetSelected={handleSetSelected} />
                    </div>

                    <div className={styles.name}>
                        Nombre problema: {' '}
                        <NameApp />
                    </div>

                    {/* 0: resuelto 1: posible mejora 2: error leve 3: importante 4: crítico */}
                    <div className={styles.radioButtons}>
                        Prioridad: {' '}
                        <RadioApp onRadio={handleRadio} />

                    </div>
                    <div className={styles.description}>
                        Descripción: {' '}
                        <textarea style={{ width: 500 }}>

                        </textarea>
                    </div>
                    <ButtonApp onSend={handleSend} />
                </form>

                <div className={styles.list}>

                </div>
            </div>
        </div >
    )
}
export default Form;