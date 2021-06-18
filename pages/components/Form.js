import { Select } from 'antd'
import styles from '../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
import Selector from './Select'
import NameApp from './nameApp'
import ButtonApp from './Button'
import { useFormik, Field } from 'formik';
const { Option } = Select;
const nameList = [
    "User 0",
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5",
    "User 6",
    "User 7"
]
let issueList = []
function Form() {
    const formik = useFormik({
        initialValues: {
            email: '',
            issueName: '',
            priority: '',
            description: '',
        },
        onSubmit: values => {
            issueList = [...issueList, formik.values]
            console.log(formik.values)
            console.log(issueList)
        }
    })
    const [selectState, setSelectState] = useState('')
    const [nameState, setNameState] = useState('')
    const [priorityState, setPriorityState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')
    const [currentIssueList, setCurrentIssueList] = useState({ selectState, nameState, priorityState, descriptionState })
    useEffect(() => {
        console.log(formik.values)
    }, [issueList])
    const handleSetSelected = (selectState) => {
        setSelectState(selectState)
        console.log(selectState)
    }
    const handleName = (e) => {
        setNameState(e)
        console.log(e)
    }
    const handleRadio = (e) => {
        /* setPriorityState(e) */
        formik.values.priority = e
        formik.handleChange
        console.log(e)
    }
    const handleSend = () => {
        setCurrentIssueList({ selectState, nameState, priorityState, descriptionState })
        console.log(currentIssueList)
    }
    const handleSelect = (e) => {
        formik.values.email = e
        formik.handleChange
    }
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <div className={styles.app}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.selectDiv}>
                        Nombre Trabajador (Correo(?)): {' '}
                        <Select
                            onChange={handleSelect}
                            value={formik.values.email}
                            placeholder="Nombre"
                            className={styles.selector}>
                            {
                                nameList.map((name) => {
                                    return (
                                        <Option key={name} value={name}>{name}</Option>
                                    )
                                })
                            }
                        </Select>
                        {/* <Selector value={selectState} onSetSelected={handleSetSelected} /> */}
                    </div>

                    <div className={styles.name}>
                        Nombre problema: {' '}
                        <input
                            className={styles.nameInput}
                            id="issueName"
                            name="issueName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.issueName} />
                        {/* <NameApp handleChange={handleName} /> */}
                    </div>


                    <div className={styles.radioButtons}>
                        Prioridad: {' '}

                        <RadioApp
                            id="priority"
                            onChange={handleRadio}
                            value={formik.values.priority}
                            onRadio={handleRadio} />

                    </div>
                    <div className={styles.description}>
                        Descripción: {' '}
                        <textarea
                            value={formik.values.description}
                            id="description"
                            onChange={formik.handleChange}
                            style={{ width: 500 }}>

                        </textarea>
                    </div>
                    <button type="submit">Enviar</button>
                    {/* <ButtonApp handleSubmit={handleSend} /> */}
                </form>

                <div className={styles.list}>
                    {issueList.map(({ priority, email, issueName }) =>
                        <div>Problema: {issueName} de prioridad {priority}, emitido por {email}</div>
                    )}
                </div>
            </div>
        </div >
    )
}
export default Form;