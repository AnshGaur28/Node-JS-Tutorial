const http = require('http');
const server1 = http.createServer((req , res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    // res.write();
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops ! </h1>
    <p> We Could'nt find the page you were looking for. </p>
    <a href="/"> Back Home</a>
    `)
});


// Port that we will be listening to
server1.listen(5000);