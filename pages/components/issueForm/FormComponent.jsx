import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Form } from 'antd'
import UserComponent from './UserComponent';
import OperationNumberComponent from './OperationNumberComponent';
import DescriptionComponent from './DescriptionComponent';
import PictureUploaderComponent from './PictureUploaderComponent';
import SubmitButtonComponent from './SubmitButtonComponent';
import axios from 'axios'

const FormComponent = ({ setImageValue }) => {
    const { values, handleChange, handleSubmit, setFieldValue, resetForm } = useFormikContext()
    const router = useRouter()
    const activeUser = Cookies.get('username')
    const sessionCookie = Cookies.get('sessionKey')
    const [imageTo64, setImageTo64] = useState([])
    useEffect(() => {
        values.email = activeUser
    }, [sessionCookie])
    /* const formik = useFormik({
        initialValues: {
            email: '',
            date: '',
            operationNumber: '',
            priority: '',
            description: '',
            images: '',
            state: 'Enviado',

        },
        onSubmit: async (values) => {
            await axios.post('../api/faunaQueries/postIssue', {
                method: 'POST',
                body: values
            }).then(res => setIssueList([...data, res]))
                .catch(() => JSON.stringify(values))
            onFormSubmit()
        }
    }) */
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
    const handlePictureLoad = async file => {
        await toBase64(file.file.originFileObj)
            .then(res => setImageTo64([...imageTo64, res]))
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const uploadImage = async () => {
        let images = []
        for (const file of imageTo64) {
            const response = await fetch('../api/uploadImages', {
                method: 'POST',
                body: file
            })
            const imageResObj = await response.json()
            const imageId = imageResObj.public_id
            const imageUrl = imageResObj.url
            images = [...images, { imageUrl: imageUrl, imageId: imageId }]
        }
        return images

    }
    const handleFormSubmit = async () => {
        const images = await uploadImage();
        setImageValue(images)
        await handleSubmit();
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
                    required={true}
                    onRadio={handleRadio} />
                <DescriptionComponent
                    handleChange={handleChange}
                    value={values.description} />
                <PictureUploaderComponent
                    key='images'

                    onChange={handlePictureLoad}
                    value={values.images} />
                <SubmitButtonComponent
                    onSubmit={handleFormSubmit} />
            </Form>
        </div>
    )
}
export default FormComponent;