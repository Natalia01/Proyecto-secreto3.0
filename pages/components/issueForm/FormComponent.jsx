import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Form } from 'antd'
import UserComponent from './UserComponent';
import OperationNumberComponent from './OperationNumberComponent';
import DescriptionComponent from './DescriptionComponent';
import PictureUploaderComponent from './PictureUploaderComponent';
import SubmitButtonComponent from './SubmitButtonComponent';
import axios from 'axios'

function FormComponent({ onFormSubmit }) {
    const router = useRouter()
    const activeUser = Cookies.get('username')
    const sessionCookie = Cookies.get('sessionKey')
    useEffect(() => {
        formik.values.email = activeUser
    }, [sessionCookie])
    const formik = useFormik({
        initialValues: {
            email: '',
            date: '',
            operationNumber: '',
            priority: '',
            description: '',
            image: '',
        },
        onSubmit: async (values) => {
            await axios.post('../api/faunaQueries/postIssue', {
                method: 'POST',
                body: values
            }).then((res) => setIssueList([...data, res]))
                .catch(() => console.log(JSON.stringify(values)))
            onFormSubmit()
        }
    })
    const handleRadio = (e) => {
        formik.values.priority = e
        formik.handleChange
    }
    const handleLogout = () => {
        Cookies.remove('sessionKey');
        Cookies.remove('username');
        Cookies.remove('password');
        fetch('../api/faunaQueries/userLogout')
        if (!Cookies.get('sessionKey')) {
            router.push('/login/login')
        }
    }
    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <Form onFinish={formik.handleSubmit}>
                <UserComponent handleLogout={handleLogout} />
                <OperationNumberComponent
                    handleChange={formik.handleChange}
                    operationValue={formik.values.operationNumber} />
                <RadioApp
                    id="priority"
                    key="radio"
                    value={formik.values.priority}
                    required={true}
                    onRadio={handleRadio} />
                <DescriptionComponent
                    handleChange={formik.handleChange}
                    value={formik.values.description} />
                <PictureUploaderComponent
                    value={formik.values.image} />
                <SubmitButtonComponent
                    type="submit"
                    onSubmit={formik.handleSubmit} />
            </Form>
        </div>
    )
}
export default FormComponent;