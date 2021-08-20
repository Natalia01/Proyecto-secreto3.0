import { client, q } from '../../config/db';

export default async function commentIssue(req, res) {
    const {
        activeIssue:
        {
            ref:
            {
                '@ref': { id }
            },
            data:
            {
                email,
                operationNumber,
                sentDate,
                seenDate,
                solvedDate,
                resolvedUploadedImages,
                state,
                priority,
                description,
                tags,
                comment
            }
        },
        commentState } = JSON.parse(req.body)
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
                        state: state,
                        seenDate: seenDate ? seenDate : '',
                        tags: tags,
                        solvedDate: solvedDate ? solvedDate : '',
                        comment: commentState
                    }
                }
            )
        )
    return res.json()
}