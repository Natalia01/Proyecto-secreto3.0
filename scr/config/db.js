import faunadb from 'faunadb';

const client = new faunadb.Client8({
    secret: process.env.fnAEMaWwwhACBrMqNkUnj5fkK7pqMPprRQLcmyVr
});

const q = faunadb.query;
export {client, q};

