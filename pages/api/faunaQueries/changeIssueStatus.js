import { client, q } from '../../config/db';

export default async function changeStatus(req, res) {
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
    if (issueState === 'Revisado') {
        const seenDate = new Date().toLocaleString([], //convierte la hora en la que se envió el problema a formato DD/MM/YYYY hh:mm
            { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    }
    else if (issueState === 'Solucionado') {
        const solvedDate = new Date().toLocaleString([], //convierte la hora en la que se envió el problema a formato DD/MM/YYYY hh:mm
            { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
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
                        seenDate: seenDate ? seenDate : '',
                        tags: tags,
                        solvedDate: solvedDate ? solvedDate : ''
                    }
                }
            )
        )
    return res.json()
}