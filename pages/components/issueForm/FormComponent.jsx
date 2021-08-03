import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React, { useEffect, useState } from 'react';
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
    const [imageState, setImageState] = useState([])
    const [imageTo64, setImageTo64] = useState([])
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
    const handlePictureLoad = async file => {
        console.log(file.file.originFileObj)
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
        console.log('imageTo64', imageTo64)
        imageTo64.map(async file => {
            console.log(file)
            const response = await fetch('../api/uploadImages', {
                method: 'POST',
                body: file
            }).then(async response => {
                console.log('object')
                const imageResObj = await response.json()
                const imageId = await imageResObj.public_id
                const imageUrl = await imageResObj.url
                setImageState([...imageState,
                { imageUrl: imageUrl, imageId: imageId }])
                formik.values.images = imageState
                formik.handleChange
            })
        })
    }
    const handleSubmit = async () => {
        uploadImage()
            .then(() => formik.handleSubmit())
            .then(() => {
                setImageState([])
                formik.values.images = imageState
                formik.handleChange
            })
            .then(() => console.log(formik.values.images))
    }
    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Registro de Problemas</h1>
            <Form onFinish={handleSubmit}>
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
                    onChange={handlePictureLoad}
                    value={formik.values.images} />
                <SubmitButtonComponent
                    type="submit"
                    onSubmit={handleSubmit} />
            </Form>
        </div>
    )
}
export default FormComponent;