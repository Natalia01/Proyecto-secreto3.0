import faunadb from 'faunadb'
const client = new faunadb.Client({
    secret: "fnAEL7T4a2ACAp7xSVc5tzcsDTMT3auCqLBQZOGD"
});
const q = faunadb.query;
export { client, q }