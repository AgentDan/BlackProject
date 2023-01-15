const express = require('express')
const app = express()

const data = [
    {
        _id: 1,
        body: "Black project"
    },
    {
        _id: 2,
        body: "8088"
    }
]

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(8088, () => {
    console.log('Server started')
})