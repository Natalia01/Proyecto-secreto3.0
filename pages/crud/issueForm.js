import FormComponent from '../components/issueForm/FormComponent'
import { sessionCheck } from '../../components/loginCookies'
import IssueListComponent from '../components/issueForm/issueListComponent'
import styles from '../../styles/Panel.module.css'
import {/* useEffect, */useState} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function issueForm() {
    const [issueList, setIssueList] = useState([])
    const data = issueList
    const email = Cookies.get('username')
    useEffect(() => {
        setIssuesFunction()
    }, [])

    const setIssuesFunction = async () =>         
        await axios.get('../api/faunaQueries/getIssuesByUser',
                {params: {email: email.toString()}})
        .then(res=>setIssueList(res.data.data))
    const onFormSubmit = () => {
        setIssuesFunction()
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <FormComponent onFormSubmit={onFormSubmit} data={data}/>
                <IssueListComponent data={data} />
                <button 
                onClick={()=> console.log(`issueList:${issueList}`) }>API</button>
            </div>                
        </div>
    )
}

export default sessionCheck(issueForm);