import { client, q } from '../../config/db';

export default async function postIssue(req,res){
    const request = req.body
    const {body:{email, operationNumber,priority,description,image}} = request
    const date = new Date().toString()
    await client
        .query(
            q.Create(
                q.Collection('issues'), {
                data: {
                    email,
                    date,
                    operationNumber,
                    priority,
                    description,
                    image,
                }
            })
        ).then(()=>res.json())
        .catch(err=>err)
}