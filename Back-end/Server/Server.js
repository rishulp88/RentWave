const express = require('express')
const app = express()
const port = 3000
const router = require('../Router/router')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  module.exports = router