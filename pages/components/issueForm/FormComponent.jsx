import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect } from 'react';
import { useFormikContext, Field } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Form } from 'antd'
import UserComponent from './UserComponent';
import OperationNumberComponent from './OperationNumberComponent';
import DescriptionComponent from './DescriptionComponent';
import PictureUploaderComponent from './PictureUploaderComponent';
import SubmitButtonComponent from './SubmitButtonComponent';

const FormComponent = () => {
    const { values, handleChange, handleSubmit, setFieldValue } = useFormikContext()
    const router = useRouter()
    const activeUser = Cookies.get('username')
    const sessionCookie = Cookies.get('sessionKey')
    useEffect(() => {
        values.email = activeUser
    }, [sessionCookie])
    const handleRadio = (e) => {
        values.priority = e
        handleChange
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
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const pictureUploader = ({ field: { value } }) => {
        const handlePictureLoad = async file => {
            const image = await toBase64(file.file.originFileObj);
            setFieldValue('images', [...value, image]);
        }
        return (
            <PictureUploaderComponent
                key='images'
                onChange={handlePictureLoad}
                value={values.images} />
        )
    }
    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <Form >
                <UserComponent handleLogout={handleLogout} />
                <OperationNumberComponent
                    handleChange={handleChange}
                    operationValue={values.operationNumber} />
                <RadioApp
                    id="priority"
                    key="radio"
                    value={values.priority}
                    onRadio={handleRadio} />
                <DescriptionComponent
                    handleChange={handleChange}
                    value={values.description} />
                <Field name="images">
                    {pictureUploader}
                </Field>
                <SubmitButtonComponent
                    onSubmit={handleSubmit} />
            </Form>
        </div>
    )
}
export default FormComponent;