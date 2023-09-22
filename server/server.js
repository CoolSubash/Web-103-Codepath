const express = require('express')
const app = express()

const cors = require('cors')
const businessrouter = require('./routes/business.js')

app.use(cors())
app.use('/', businessrouter)

app.listen(8000, () => {
  console.log('I am listening to Server')
})
