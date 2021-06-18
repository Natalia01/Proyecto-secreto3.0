import names from './names.json'

export default function (req, res) {
    const names1 = names.map(({ name }) => name)
    res.json([...new Set(names1)])
}