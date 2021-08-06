import { client, q } from '../../config/db';

export default async function getIssuesByUser(req, res) { // este es para cada usuario
    const { email } = req.query
    await client
        .query(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('indexByMail'),
                        email
                    )
                ),
                q.Lambda(email => q.Get(email))
            )
        ).then(response => response)
        .then(response => res.json(response))
        .catch(error => console.log('Error: ', error.message))
    return res
}
