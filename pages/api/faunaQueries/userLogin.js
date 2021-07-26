import { client, q, Documents } from '../../config/db';
export const login = async (email, password) => {
    const result = await client.query(
        q.Login(
            q.Match(q.Index('Accounts_by_email'), email),
            { password: password, }
        ))
        .then(ret => ret)
        .catch(error => alert('Credenciales incorrectas'))
    return result
}