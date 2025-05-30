const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const app = express()
const port = 8089

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const rent_services = require('./routes/rent-services');


app.use('/rent-services', rent_services);


app.get('/', (req, res) => {
    res.send('Hello App Engine!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})