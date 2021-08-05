import { client, q } from '../config/db';
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
export const logout = () => {
    client
        .query(
            q.Logout(true)
        )
        .then((ret) => console.log(ret))
        .catch((err) => console.error('Error: %s', err))
}
export const postIssue = async (email, operationNumber, priority, description) => {
    await client
        .query(
            q.Create(q.Collection('issues'), {
                data: {
                    email,
                    operationNumber,
                    priority,
                    description
                }
            })
        )
}
export const getAllIssuesByUser = async (email) => { // este es para cada usuario
    const result = await client
        .query(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('indexByMail'),
                        email
                    )
                ),
                q.Lambda(email => q.Get(email))
            )
        )
        .then(ret => ret.data)
        .catch(error => console.log('Error: ', error.message))
    return result
}
export const getAllIssues = async (email) => { //este es el que debería usar la Nati pa tener todos los problemas
    const result = await client
        .query(
            q.Map(
                q.Paginate(
                    q.Documents(
                        q.Collection('issues')
                    )
                ),
                q.Lambda(() => q.Get(email))
            )
        )
        .then(ret => ret.data)
        .catch(error => console.log('Error: ', error.message))
    return result
}
