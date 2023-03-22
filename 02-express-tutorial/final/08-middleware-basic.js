const express = require('express')
const app = express()

//  req => middleware => res


const logger = (req,res,next)=>{
  console.log(req.method)
  console.log(req.url)
  const time = new Date().getFullYear();
  console.log(time)
  next(); // pass to next middleware or we should end the middleware by passing our own response....
}
app.get('/' ,logger , (req , res)=>{
  res.send('<h1>Home</h1>')
})
app.get('/about',(req, res)=>{
  res.send("About")
})
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
