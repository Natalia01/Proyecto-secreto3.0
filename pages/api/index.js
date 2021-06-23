import { client, q } from '../config/db';

export const createUser = (email, password) => {
    client
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
export const login = async (email, password) => {
    const result = await client.query(
        q.Login(
            q.Match(q.Index('Accounts_by_email'), email),
            { password: password, }
        ))
    return result
}