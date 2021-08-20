import styles from '../../../styles/Panel.module.css';
import 'antd/dist/antd.css';
import RadioApp from './RadioApp';
import React from 'react';
import { useFormikContext, Field } from 'formik';
import { Form } from 'antd'
import UserComponent from './UserComponent';
import OperationNumberComponent from './OperationNumberComponent';
import DescriptionComponent from './DescriptionComponent';
import PictureUploaderComponent from './PictureUploaderComponent';
import SubmitButtonComponent from './SubmitButtonComponent';
import TagsComponent from './TagsComponent'

const FormComponent = ({ handleLogout }) => {
    const { values, handleChange, handleSubmit, setFieldValue } = useFormikContext()
    let validation
    if (values.operationNumber == '' || values.priority == '' || values.description == '' || values.tags.length === 0) { validation = true } else { validation = false }
    const onRadio = e => { //maneja  'manualmente' el cambio de estado de los botones radio
        values.priority = e
        handleChange
    }
    const handleChecklist = e => {
        values.tags = e
        handleChange
    }
    const toBase64 = file => new Promise((resolve, reject) => { //convierte la imagen subida a BASE64 para poder subirla a cloudinary
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const pictureUploader = ({ field: { value } }) => {//otorga el valor de la imagen al componente y lo renderiza
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
                    onRadio={onRadio} />
                <DescriptionComponent
                    handleChange={handleChange}
                    value={values.description} />
                <TagsComponent
                    handleChecklist={handleChecklist}
                    value={values.tags} />
                <Field name="images">
                    {pictureUploader}
                </Field>
                <SubmitButtonComponent
                    validation={validation}
                    onSubmit={handleSubmit} />
            </Form>
        </div>
    )
}
export default FormComponent;