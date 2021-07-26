import { client, q, Documents } from '../../config/db';
export const createUser = async (email, password) => {
    await client
        .query(
            q.Create(q.Collection('accounts'), {
                credentials: {
                    password
                },
                data: {
                    email
                }
            })
        )
        .then(ret => ret)
        .catch(error => console.error('Error: ', error.message));
};