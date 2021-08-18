import { client, q, Documents } from '../../config/db';
export default async function getAllIssues(req, res) { //este es el que debería usar la Nati pa tener todos los problemas

    const result = await client
        .query(
            q.Map(
                q.Paginate(
                    q.Documents(
                        q.Collection('issues')
                    )
                ),
                q.Lambda(email => q.Get(email))
            )
        ).then(ret => res.json(ret))
        .catch(error => console.log('Error: ', error.message))
    return res
}
