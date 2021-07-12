import { useRouter } from 'next/router'
import FormComponent from '../components/issueForm/FormComponent'
import { sessionCheck } from '../../components/loginCookies'

function issueForm() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <>        
            <FormComponent />
        </>
    )
}

export default sessionCheck(issueForm);