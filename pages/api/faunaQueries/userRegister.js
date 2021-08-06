import { client, q } from '../../config/db';
export default async (req, res) => {
    const { lowerCaseUsername, password } = JSON.parse(req.body)
    await client
        .query(
            q.Create(q.Collection('accounts'), {
                credentials: {
                    password
                },
                data: {
                    email: lowerCaseUsername
                }
            })
        )
        .then(() => res.json())
        .catch(error => error.message);
};