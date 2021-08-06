import { client, q } from '../../config/db';
export default async (req, res) => {
    client
        .query(
            q.Logout(true)
        )
        .then(ret => ret)
        .catch(err => console.error('Error: %s', err))
    return res.json()
}