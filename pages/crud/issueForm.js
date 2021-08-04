import FormComponent from '../components/issueForm/FormComponent'
import { sessionCheck } from '../../components/loginCookies'
import IssueListComponent from '../components/issueForm/issueListComponent'
import styles from '../../styles/Panel.module.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Formik } from 'formik'

function issueForm() {

    const [issueList, setIssueList] = useState([])
    const [imageValue, setImageValue] = useState([])
    const email = Cookies.get('username')
    useEffect(() => {
        setIssuesFunction()
    }, [])
    const setIssuesFunction = async () =>
        await axios.get('../api/faunaQueries/getIssuesByUser',
            { params: { email: email.toString() } })
            .then(res => setIssueList(res.data.data))
    const onFormSubmit = () => {
        setIssuesFunction()
    }


    const submit = async values => {
        const payload = { ...values, images: imageValue }
        await axios.post('../api/faunaQueries/postIssue', {
            method: 'POST',
            body: payload
        })
        //setIssueList([...res])
        await onFormSubmit()
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <Formik
                    initialValues={{
                        email: '',
                        date: '',
                        operationNumber: '',
                        priority: '',
                        description: '',
                        images: [],
                        state: 'Enviado'
                    }}

                    onSubmit={submit}>
                    <FormComponent setImageValue={setImageValue} />
                </Formik>
                <IssueListComponent issueList={issueList} setIssuesFunction={setIssuesFunction} />
            </div>
        </div>
    )
}

export default sessionCheck(issueForm);