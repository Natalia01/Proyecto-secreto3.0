import FormComponent from '../components/issueForm/FormComponent'
import { sessionCheck } from '../../components/loginCookies'
import IssueListComponent from '../components/issueForm/issueListComponent'
import styles from '../../styles/Panel.module.css'
import {useEffect,useState} from 'react'
import {getAllIssuesByUser} from '../api'
import Cookies from 'js-cookie'

function issueForm() {
    const [issueList, setIssueList] = useState([])
    const data = issueList
    const email = Cookies.get('username')

    const issueFunction = async () => setIssueList(await getAllIssuesByUser(email));
    useEffect(() => {
        issueFunction()
    }, [])
    const onFormSubmit = () => {
        issueFunction()
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.app}>
                <FormComponent onFormSubmit={onFormSubmit}/>
                <IssueListComponent data={data} />
            </div>                
        </div>
    )
}

export default sessionCheck(issueForm);