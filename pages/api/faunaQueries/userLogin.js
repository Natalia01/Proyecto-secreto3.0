import { client, q } from '../../config/db';
export default async (req, res) => {
    const { username, password } = JSON.parse(req.body)
    const result = await client.query(
        q.Login(
            q.Match(q.Index('Accounts_by_email'), username),
            { password: password, }
        ))
        .then(ret => ret)
        .catch(error => alert('Credenciales incorrectas'))
    return res.status(200).json(result)
}