import FormComponent from '../components/issueForm/FormComponent'
import { sessionCheck } from '../../components/loginCookies'
import IssueListComponent from '../components/issueForm/issueListComponent'
import styles from '../../styles/Panel.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function issueForm() {
    const [issueList, setIssueList] = useState([])
    const activeUser = Cookies.get('username')
    const router = useRouter()
    const handleLogout = () => { //elimina las cookies, las credenciales y te manda a la pagina de login
        Cookies.remove('sessionKey');
        Cookies.remove('username');
        Cookies.remove('password');
        fetch('../api/faunaQueries/userLogout')
        router.push('/login/login')
    }
    const setIssuesFunction = async () => //esta es la función que actualiza la lista
        await axios.get('../api/faunaQueries/getIssuesByUser',
            { params: { email: activeUser.toString() } })
            .then(res => setIssueList(res.data.data))
    useEffect(() => { //para que la lista de problemas se actualice cada vez que se envía un nuevo problema
        setIssuesFunction()
    }, [])
    const onFormSubmit = () => {
        setIssuesFunction()
    }
    const submit = async values => { //sube la información del problema a la base de datos
        await fetch('../api/faunaQueries/postIssue', {
            method: 'POST',
            body: JSON.stringify(values)
        })
        await onFormSubmit()
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <Formik
                    initialValues={{
                        email: activeUser,
                        sentDate: '',
                        operationNumber: '',
                        priority: '',
                        description: '',
                        images: [],
                        state: 'Enviado',
                        comment: '',
                        seenDate: '',
                        tags: []
                    }}
                    onSubmit={submit}>
                    <FormComponent handleLogout={handleLogout} />
                </Formik>
                <IssueListComponent issueList={issueList} setIssuesFunction={setIssuesFunction} />
            </div>
        </div>
    )
}

export default sessionCheck(issueForm); //esta envuelto en un HOC para que verifique que la sesión está iniciada