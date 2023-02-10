// File System-->synchronously(Blocking)
const {readFileSync , writeFileSync} = require('fs');
console.log("Start");
const first = readFileSync('./content/first.txt' , 'utf-8');
const second = readFileSync('./content/second.txt' , 'utf-8');
console.log(first)
console.log(second)
console.log("End");


//  The write method either creates a file in the given directory with the given name or over-rides the current file with the data that we passed.
writeFileSync('./content/result-sync.txt' , `Here is the third file that we created using the fs-module. previous Files : ${first} , ${second}`,{flag: "a"});
// flag a will append the result to the current file  --> so the same text will be written two times .