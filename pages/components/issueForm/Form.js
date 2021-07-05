
import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { logout, postIssue, getAllIssues } from '/pages/api';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Form() {
    const router = useRouter()
    const activeUser = Cookies.get('username')
    const sessionCookie = Cookies.get('sessionKey')
    useEffect(() => {
        formik.values.email = activeUser
    }, [sessionCookie])
    const [issueList, setIssueList] = useState([])
    const issueFunction = async () => {
        setIssueList(await getAllIssues())
    }
    useEffect(() => {
        issueFunction()
    }, [])
    const formik = useFormik({
        initialValues: {
            email: '',
            issueName: '',
            priority: '',
            description: '',
        },
        onSubmit: async values => {
            await postIssue(formik.values)
            issueFunction()

        }
    })
    const handleIssues = async () => {
        console.log(issueList[0].data)
    }

    const handleRadio = (e) => {
        formik.values.priority = e
        formik.handleChange
    }

    const handleLogout = () => {
        Cookies.remove('sessionKey');
        Cookies.remove('username');
        Cookies.remove('password');
        logout
        console.log(Cookies.get('sessionKey'))
        if (!Cookies.get('sessionKey')) {
            router.push('/login/login')
        }
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={handleIssues}>ISSUES</button>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <div className={styles.app}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.selectDiv}>
                        Correo trabajador:
                        <div className={styles.username}>
                            {Cookies.get('username')}
                        </div>
                        ¿No eres tú? Intenta iniciar sesión nuevamente pulsando <a onClick={handleLogout}>{' '}aquí</a>

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
                    </div>


                    <div className={styles.radioButtons}>
                        Prioridad: {' '}

                        <RadioApp
                            id="priority"
                            key="radio"
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
                            style={{ width: 480 }}>

                        </textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                <div className={styles.list}>
                    <Row className={styles.listTitles}>
                        <Col span={8}>Nombre del Problema</Col>
                        <Col span={8}>Prioridad del Problema</Col>
                    </Row>
                    {console.log(issueList)}
                    {issueList.map(({ data: { email: { issueName, priority } } }) => (
                        <Row className={styles.listRows}>
                            <Col span={8}>
                                {issueName}
                            </Col>
                            <Col span={8}>
                                <div className={`${styles.circleSpan} ${styles[`priority-${priority}`]}`}>

                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Form;