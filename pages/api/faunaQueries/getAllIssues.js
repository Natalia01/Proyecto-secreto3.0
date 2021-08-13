import { client, q, Documents } from '../../config/db';
export const getAllIssues = async (email) => { //este es el que debería usar la Nati pa tener todos los problemas
    const result = await client
        .query(
            q.Map(
                q.Paginate(
                    q.Documents(
                        q.Collection('issues')
                    )
                ),
                q.Lambda(() => q.Get(email))
            )
        )
        .then(ret => ret.data)
        .catch(error => console.log('Error: ', error.message))
    return result
}
