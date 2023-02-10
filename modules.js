//  Modules -- Encapsulation Code (only share minimum)
// CommonJS , every file is module (by default)
const secret = "Secret"


//  The data is always exported as an Array

// const names = require("./module-1")
// const sayHi = require("./module-2")
// const person = require("./6-alternative_export")

// when we import a module we actually invoke it ... look at the example below
require("./7-mind_grenade")

// sayHi("Ansh")
// sayHi(names.john)
// sayHi(names.tina)
// console.log(module)
// console.log(person)