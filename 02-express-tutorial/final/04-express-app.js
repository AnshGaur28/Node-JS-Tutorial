const express = require("express")
const path = require("path")
 const app = express();


//  Static and Middlewares
 app.use(express.static('./public'));
//  This helps to load css and files other than the index.html


 app.get('/' , (req,res)=>{
  res.sendFile(path.resolve(__dirname ,'/navbar-app/index.html'))
  //  Here instead of resolve we can also use join 
 })

// We have already added the index.html to the public and use it as static file above....
// Another method for dynamic rendering is to use server side rendering which we will cover in server templating

 app.all('*' , (req , res)=>{
  res.status(404).send("RESOURCE not FOUND")
 })

 app.listen(5000 , ()=>{
  console.log("Server is Listening at port 5000")
 })


 
//  console.log('Express Tutorial')

// const express = require('express')
// const path = require('path')

// const app = express()

// // setup static and middleware
// app.use(express.static('./public'))

// // app.get('/', (req, res) => {
// //   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// // })

// //  Instead I can set up Index.html as a static file as well in the public folder 
// //  Or use SSR (server side rendering )

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000....')
// })