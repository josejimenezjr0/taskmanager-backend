const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('init')
})

const port = process.env.PORT

app.listen(port, () => console.log(`listening on port: ${port}`))