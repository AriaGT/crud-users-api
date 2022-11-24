const express = require("express")

const quoteRouter = require('./users/users.router')

const port = 9000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'Ok'})
})

app.use('/api/v1', quoteRouter)

app.listen(port, () => {
  console.log(`Server Initialized in port ${port}`)
})