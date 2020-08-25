const express = require('express')
const app = express()  //function
const port = 3000      //port buka

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/another', (req, res) => {
    res.send('Another Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})