import express from 'express'

const app = express()
const PORT =  3001

app.get('/', (req, res) => {
    res.json("hello world")
})


app.listen(PORT, () => {
    `Working on ${PORT}`
})