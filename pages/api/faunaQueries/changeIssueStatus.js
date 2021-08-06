import { client, q } from '../../config/db';

export default async function changeStatus(req, res) {
    console.log(req.body)
    const { email, id, operationNumber, sentDate, resolvedUploadedImages, state, priority, description } = JSON.parse(req.body)
    const seenDate = new Date().toString()
    await client
        .query(
            q.Replace(
                q.Ref(
                    q.Collection('issues'), id),
                {
                    data: {
                        email: email,
                        sentDate: sentDate,
                        operationNumber: operationNumber,
                        priority: priority,
                        description: description,
                        resolvedUploadedImages: resolvedUploadedImages,
                        state: 'Revisado',
                        seenDate: seenDate
                    }
                }
            )
        )
    return res.json()
}