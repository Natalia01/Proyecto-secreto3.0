import { client, q, Documents } from '../../config/db';
export const logout = () => {
    client
        .query(
            q.Logout(true)
        )
        .then((ret) => console.log(ret))
        .catch((err) => console.error('Error: %s', err))
}