const os =  require('os')
// console.log(os)

// user info

// const user = console.log(os.userInfo())

// Uptime of the computer

console.log("The System uptime in seconds : " ,os.uptime());

const currentOS = {
    name:os.type(),
    release : os.release() ,
    totalMem : os.totalmem() ,
    freeMem : os.freemem(),
}
console.log(currentOS)