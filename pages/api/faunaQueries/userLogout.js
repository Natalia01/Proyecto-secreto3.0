import { client, q, Documents } from '../../config/db';
export default async (req, res) => {
    client
        .query(
            q.Logout(true)
        )
        .then(ret => ret.json())
        .catch((err) => console.error('Error: %s', err))
}