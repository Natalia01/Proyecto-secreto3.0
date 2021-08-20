import { client, q } from '../../config/db';

export default async function changeStatus(req, res) {
    const format = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    const {
        activeReviewedIssue:
        {
            email,
            id,
            operationNumber,
            sentDate,
            seenDate,
            solvedDate,
            resolvedUploadedImages,
            state,
            priority,
            description,
            tags
        },
        issueState } = JSON.parse(req.body)
    let seenFormattedDate = seenDate
    let solvedFormattedDate = solvedDate
    if (issueState === 'Revisado') {
        seenFormattedDate = new Date().toLocaleString([], format)
    }
    else if (issueState === 'Solucionado') {
        solvedFormattedDate = new Date().toLocaleString([], format)
    }
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
                        seenDate: seenFormattedDate ? seenFormattedDate : '',
                        tags: tags,
                        solvedDate: solvedFormattedDate ? solvedFormattedDate : ''
                    }
                }
            )
        )
    return res.json()
}