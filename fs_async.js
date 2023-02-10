const {readFile , writeFile} = require("fs");
console.log("Start")
readFile('./content/second.txt' ,'utf-8', (err , result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    // console.log(result);
    const first = result ;
    readFile("./content/second.txt" ,'utf-8' , (err , result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result ;
        writeFile('./content/result-async.txt' , `Here is the result: ${first} , ${second}` , (err , result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("File Written");
        })

    });
    
});
console.log("Starting next task")

// This example shows how this a much better and efficient way to execute this task using callbacks 
// But promises and async await is the better option