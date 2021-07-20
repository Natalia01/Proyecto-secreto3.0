
import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { logout, postIssue } from '/pages/api';
import { useRouter } from 'next/router';
import { Input,Form } from 'antd'
import classNames from 'classnames/bind'
import UserComponent from './UserComponent';
import OperationNumberComponent from './OperationNumberComponent';
import DescriptionComponent from './DescriptionComponent';
import PictureUploaderComponent from './PictureUploaderComponent';
import SubmitButtonComponent from './SubmitButtonComponent';
import IssueListComponent from './issueListComponent';
const cx = classNames.bind(styles)

function FormComponent() {
    const { TextArea } = Input
    const router = useRouter()
    const activeUser = Cookies.get('username')
    const sessionCookie = Cookies.get('sessionKey')
    useEffect(() => {
        formik.values.email = activeUser
    }, [sessionCookie])
    const formik = useFormik({
        initialValues: {
            email: '',
            issueName: '',
            priority: '',
            description: '',
        },
        onSubmit: async (values, e) => {
            await postIssue(formik.values)
            issueFunction()
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
        logout
        console.log(Cookies.get('sessionKey'))
        if (!Cookies.get('sessionKey')) {
            router.push('/login/login')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <div>
                <h1 className={styles.h1}>Registro de Problemas</h1>
                    <div className={styles.form}>
                        <Form onFinish={formik.handleSubmit}>
                            <UserComponent
                                handleLogout={handleLogout} />

                            <OperationNumberComponent
                                handleChange={formik.handleChange}
                                operationValue={formik.values.issueName} />
                            <RadioApp
                                id="priority"
                                key="radio"
                                onChange={handleRadio}
                                value={formik.values.priority}
                                required={true}
                                onRadio={handleRadio} />

                            <DescriptionComponent
                                handleChange={formik.handleChange}
                                value={formik.values.description} />
                            <PictureUploaderComponent />
                            <SubmitButtonComponent 
                                type="submit"
                                onSubmit={formik.handleSubmit}/>
                        </Form>
                    </div>
                </div>
                <div>                    
                <h1>Estado de problemas enviados</h1>
                <IssueListComponent/>
                </div>
            </div>
        </div >
    )
}
export default FormComponent;