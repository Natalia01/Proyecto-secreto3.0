import { client, q } from '../../config/db';

export default async function deleteIssue(req, res) {
    const request = req.body
    const { body: ref } = request
    console.log(req.body)
    /* await client
        .query(
            q.Delete(
                q.Ref(
                    q.Collection('issues'), ref)
            )
        ).then(() => res.json()) */
}