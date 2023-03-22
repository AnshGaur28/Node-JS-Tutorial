const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('../logger')
const authorize = require('./authorize')
//  req => middleware => res
// use vs route 
// options==> 1. own 2. express  3. thirdparty(morgan package)

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
