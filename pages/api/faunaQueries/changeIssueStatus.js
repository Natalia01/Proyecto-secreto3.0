import { client, q } from '../../config/db';

export default async function changeStatus(req, res) {
    const { activeReviewedIssue: { email, id, operationNumber, sentDate, resolvedUploadedImages, state, priority, description, tags }, issueState } = JSON.parse(req.body)
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
                        state: issueState,
                        seenDate: seenDate,
                        tags: tags
                    }
                }
            )
        )
    return res.json()
}