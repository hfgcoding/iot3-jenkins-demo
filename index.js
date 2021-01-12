const express = require('express')
const app = express()
const port = 3111

app.get('/', (req, res) => {
  res.send('Hello, new World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})