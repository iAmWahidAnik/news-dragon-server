const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('dragon server is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`dragon server listening on port ${port}`);
})