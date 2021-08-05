import { client, q } from '../../config/db';

export default async function changeStatus(req, res) {
    console.log(req.body)
    const { email, id, operationNumber, date, resolvedUploadedImages, state, priority, description } = JSON.parse(req.body)

    await client
        .query(
            q.Replace(
                q.Ref(
                    q.Collection('issues'), id),
                {
                    data: {
                        email: email,
                        date: date,
                        operationNumber: operationNumber,
                        priority: priority,
                        description: description,
                        resolvedUploadedImages: resolvedUploadedImages,
                        state: 'Revisado',
                    }
                }
            )
        )
    return res.json()
}